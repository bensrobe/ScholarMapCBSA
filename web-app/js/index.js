var imageArrayC = new Array();
    imageArrayC[0] = "images/CBSA/c-1.JPG";
    imageArrayC[1] = "images/CBSA/c-2.JPG";
    imageArrayC[2] = "images/CBSA/c-3.JPG";
    imageArrayC[3] = "images/CBSA/c-4.JPG";
    imageArrayC[4] = "images/CBSA/c-5.JPG";
    imageArrayC[5] = "images/CBSA/c-6.JPG";
    imageArrayC[6] = "images/CBSA/c-7.JPG";


function doC()
    {
    var rand = Math.floor(Math.random()*7);

    var imgPath = "<img src='"+imageArrayC[rand]+"' alt='header' border='0' align='absmiddle' />";

    document.getElementById("imageC").innerHTML = imgPath;

    }

var imageArrayA = new Array();
    imageArrayA[0] = "images/CBSA/a-1.JPG";
    imageArrayA[1] = "images/CBSA/a-2.JPG";
    imageArrayA[2] = "images/CBSA/a-3.JPG";
    imageArrayA[3] = "images/CBSA/a-4.JPG";
    imageArrayA[4] = "images/CBSA/a-5.JPG";

function doA()
    {
    var rand = Math.floor(Math.random()*5);

    var imgPath = "<img src='"+imageArrayA[rand]+"' alt='header' border='0' align='absmiddle' />";

    document.getElementById("imageA").innerHTML = imgPath;

    }

var imageArrayB = new Array();
    imageArrayB[0] = "images/CBSA/b-1.JPG";
    imageArrayB[1] = "images/CBSA/b-2.JPG";
    imageArrayB[2] = "images/CBSA/b-3.JPG";
    imageArrayB[3] = "images/CBSA/b-4.JPG";
    imageArrayB[4] = "images/CBSA/b-5.JPG";
    imageArrayB[5] = "images/CBSA/b-6.JPG";

function doB()
    {
    var rand = Math.floor(Math.random()*6);

    var imgPath = "<img src='"+imageArrayB[rand]+"' alt='header' border='0' align='absmiddle' />";

    document.getElementById("imageB").innerHTML = imgPath;

    }



var imageArrayS = new Array();
    imageArrayS[0] = "images/CBSA/s-1.JPG";
    imageArrayS[1] = "images/CBSA/s-2.JPG";
    imageArrayS[2] = "images/CBSA/s-3.JPG";
    imageArrayS[3] = "images/CBSA/s-4.JPG";
    imageArrayS[4] = "images/CBSA/s-5.JPG";

function doS()
    {
    var rand = Math.floor(Math.random()*5);

    var imgPath = "<img src='"+imageArrayS[rand]+"' alt='header' border='0' align='absmiddle' />";

    document.getElementById("imageS").innerHTML = imgPath;

    }

doC();
doB();
doS();
doA();
