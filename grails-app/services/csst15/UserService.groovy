package csst15

import csst15.command.LoadUserCommand
import csst15.command.QuickNewUserCommand
import csst15.command.RequiredFieldsCommand
import csst15.conf.FieldLockConf
import csst15.conf.FieldVisibilityConf
import csst15.constants.Roles
import csst15.lists.Department
import csst15.lists.Position
import csst15.lists.Specialization
import csst15.security.Role
import csst15.security.User
import csst15.security.UserRole
import grails.transaction.Transactional
import groovy.util.logging.Slf4j

@Slf4j
@Transactional
class UserService {
    def notificationService
    def springSecurityService

    def createQuickUser(QuickNewUserCommand userCommand) {
        def user = new User()
        user.properties = userCommand.properties
        user.username = GeneralUtils.createUsername(user.firstName,user.lastName,user.email)

        addConfigToUser(user)

        if (user.save(flush: true)) {
            log.info("Created user with id ${user.id}")
            addDefaultRole(user)
            return user
        } else {
            log.error("User creation attempt failed")
            log.error(user.errors.dump())
        }

        return null
    }

    def createUser(String email) {
        createUser(email, GeneralUtils.createUsername(null,null,email), makeRandomPassword())
    }

    def createUser(String email, String username, String password) {
        def user = new User(email: email, username: username, password: password, enabled: true)
        addConfigToUser(user)

        if (user.save(flush: true)) {
            log.info("Created user with id ${user.id}")
            addDefaultRole(user)
            notificationService.sendInvitationToUser(user, password)
            return user
        } else {
            log.error("User creation attempt failed")
            log.error(user?.errors?.dump())
        }

        return null
    }

    def createUser(Map fieldsMap) {
        println("Create users")
        println(fieldsMap.values())
        fieldsMap.values().each {Map fields->
            LoadUserCommand loadUserCommand = new LoadUserCommand()


            if (fields?.size() > 0) {
                def user = new User()
                println "Processing user"
                loadUserCommand.email = fields?.get("email")
                loadUserCommand.firstName = fields?.get("firstName")
                loadUserCommand.lastName = fields?.get("lastName")
                loadUserCommand.degreeInstitution = fields?.get("degreeInstitution")
                loadUserCommand.degreeYear = fields?.get("degreeYear")
                loadUserCommand.position = fields?.get("postition")
                loadUserCommand.currentInstitution = fields?.get("currentInstitution")
                loadUserCommand.schoolOrDepartment = fields?.get("schoolOrDepartment")
                loadUserCommand.url = fields?.get("url")

                println "Processing command ${loadUserCommand}"
                if (loadUserCommand.validate()) {
                     println "Validates"
                    user.email = loadUserCommand.email
                    user.firstName = loadUserCommand.firstName
                    user.lastName = loadUserCommand.lastName
                    user.username = GeneralUtils.createUsername(user.firstName,user.lastName,user.email)
                    user.degreeYear = loadUserCommand.degreeYear
                    def password = makeRandomPassword()
                    user.password = password
                    user.enabled = true
                    user.currentInstitution = loadUserCommand.currentInstitution
                    user.schoolOrDepartment = loadUserCommand.schoolOrDepartment
                    user.position = loadUserCommand.position ? Position.findByNameLike(loadUserCommand.position) : user.position
                    user.degreeInstitution = loadUserCommand.degreeInstitution
                    user.url = loadUserCommand.url
                    user.lockConf = new FieldLockConf()
                    user.visibilityConf = new FieldVisibilityConf()

                    if (user.save()) {
                        log.info("Created user with username: ${user.username}, id: ${user.id}")
                        addDefaultRole(user)
                        notificationService.sendInvitationToUser(user, password)
                        println "Saves ${user.firstName}"
                    } else {
                        println "Fails ${user.firstName}"
                        log.error("User creation attempt failed")
                        log.error(user?.errors?.dump())
                    }
                } else {
                    println "Errors validating ${loadUserCommand.errors}"
                }

            }

        }

        return true
    }

    def updateProfile(RequiredFieldsCommand command, User user) {
        user.firstName = command.firstName ? command.firstName : user.firstName
        user.lastName = command.lastName ? command.lastName : user.lastName
        user.degreeYear = command.degreeYear ? command.degreeYear : user.degreeYear
        user.currentInstitution = command.currentInstitution ?:user.currentInstitution
        user.schoolOrDepartment = command.schoolOrDepartment?:user.schoolOrDepartment
        user.position = command.position ? Position.findByName(command.position) : user.position
        user.degreeInstitution = command.degreeInstitution?:user.degreeInstitution
        user.url = command.url?:user.url

        if (user.save(flush: true)) {
            log.info("Updated user with id ${user.id}")
            return user
        } else {
            log.error("User creation attempt failed")
            log.error(user.errors.dump())
        }

        return null
    }


    private void addDefaultRole(User user) {
        def role = Role.findByAuthority(Roles.USER.name)
        UserRole.create(user, role)
    }


    private String makeRandomPassword() {
        Random rand = new Random()
        String r = "abcdefghijklmnopqrstuvwxyz12345678990"
        String password = ""
        (1..8).each {
          password+=r.charAt(rand.nextInt(r.length()))
        }

        return "${password}"
    }

    private String constructUsername(String email) {
        return email.split("@")[0]
    }

    private void addConfigToUser(User user) {
        user.lockConf = new FieldLockConf()
        user.visibilityConf = new FieldVisibilityConf()
    }
}
