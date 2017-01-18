<%@ page import="csst15.constants.Roles; csst15.security.User" %>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
<head>
    <title>Welcome to Scholarmap</title>
    <%--<link href="http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic" rel="stylesheet"/>--%>
    <link rel="shortcut icon" href="${resource(dir: 'images', file: 'favicon.ico')}">
    <asset:stylesheet src="application.css"/>
    <asset:javascript src="application.js"/>


</head>

<body>

<header class="header navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="row">
            <div id="masthead-logo"> <asset:image id="msulogo" src="images/masthead-helmet-white.png" alt="MSU masthead logo" /> </div>
            <div id="search-tool-box">
                <form action="https://search.msu.edu/index.php" method="get">
                    <input accesskey="4" id="q" name="q" placeholder="Search MSU.edu..." />
                    <input id="btn_search" type="submit" value="" /> </form>
            </div>
        </div>
        <div class="row">
            <div class="navbar-header">
                <button type="button" data-toggle="collapse" data-target="#navbar-collapse-1"
                        class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span
                        class="icon-bar"></span></button>
                <section class="logo text-center">
                    <g:link uri="/assets/index.html" class="navbar-brand"><strong>CENTER FOR BUSINESS AND SOCIAL ANALYTICS</strong></g:link>
                </section>
            </div>

            <div id="navbar-collapse-1" class="collapse navbar-collapse">
                <sec:ifLoggedIn>
                    <div class="nav navbar-nav navbar-btn" style="margin-left: 350px"></div>
                </sec:ifLoggedIn>
                <ul class="nav navbar-nav navbar-right">
                    <sec:ifAllGranted roles="${Roles.ADMIN.name}">
                        <li><g:link controller="admin" action="board">Board</g:link></li>
                    </sec:ifAllGranted>
                    <sec:ifNotGranted roles="${Roles.ADMIN.name}">
                        <li><g:link controller="home" action="index">Map</g:link></li>
                        <li><g:link controller="home" action="list">People</g:link></li>
                        <li class="dropdown text-normal nav-profile">
                            <a href="javascript:void(0);" data-toggle="dropdown">
                                <span class="hidden-xs">
                                    <span>Explore</span>
                                </span>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <g:link controller="home" action="areas"><span>Areas</span></g:link>
                                </li>
                                <li>
                                    <g:link controller="home" action="theories"><span>Theories</span></g:link>
                                </li>
                                <li>
                                    <g:link controller="home" action="methods"><span>Methods</span></g:link>
                                </li>
                                <li>
                                    <g:link controller="home" action="venues"><span>Venues</span></g:link>
                                </li>
                                <li>
                                    <g:link controller="home" action="references"><span>References</span></g:link>
                                </li>
                            </ul>
                        </li>
                        <li><g:link controller="home" action="about">About</g:link></li>
                    </sec:ifNotGranted>
                    <sec:ifLoggedIn>
                        <li class="dropdown text-normal nav-profile">
                            <a href="javascript:void(0);" data-toggle="dropdown">
                                <span class="hidden-xs">
                                    <span>Welcome,  <csst:userFullName/></span>
                                </span>
                            </a>
                            <ul class="dropdown-menu with-arrow">
                                <li>
                                    <g:link controller="user" action="profile" params="[username: csst.username()]">
                                        <span data-i18n="My Profile">My Profile</span>
                                    </g:link>
                                </li>
                                <li>
                                    <g:link controller="logout"><span>Logout</span></g:link>
                                </li>
                            </ul>
                        </li>
                    </sec:ifLoggedIn>
                    <sec:ifNotLoggedIn>
                        <li>
                            <g:link controller="login" action="auth">Sign In</g:link>
                        </li>
                    </sec:ifNotLoggedIn>
                </ul>
            </div>
        </div>
    </div>
</header>

<div class="content" style="margin-top: 40px">
    <g:layoutBody/>
    <g:render template="/utils/hiddenLinks"/>



</div>


<footer>
    <div class="MSUwrapper dark-background" id="MSUstandardFooter" role="contentinfo">
        <div class="fourMSUcolumns" id="standard-footer-MSU-wordmark">
            <a href="http://www.msu.edu"> <asset:image alt="Michigan State University Wordmark" class="screen-msuwordmark" src="images/msu-wordmark-white-221x47.png" height="47" width="221" /> </a>
        </div>
        <div class="twelveMSUcolumns">
            <div id="standard-footer-site-links">
                <ul>
                    <li>Call us: <strong>(517) 355-7505</strong>
                    <li><a href="https://msu.edu/contactus.html">Contact Information</a>
                    <li><a href="https://msu.edu/accessibility.html">Site Accessibility</a> </ul>
            </div>
            <div id="standard-footer-MSU-info">
                <ul>
                    <li>Call MSU: <span class="msu-phone"><strong>(517) 355-1855</strong></span></li>
                    <li>Visit: <strong><a href="http://msu.edu">msu.edu</a></strong></li>
                    <li>MSU is an affirmative-action, equal-opportunity employer.</li>
                    <li><a href="http://oie.msu.edu/"><strong>Notice of Nondiscrimination</strong></a></li>
                </ul>
                <ul>
                    <li class="spartans-will">Spartans Will.</li>
                    <li>@ Michigan State University</li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</body>
</html>

