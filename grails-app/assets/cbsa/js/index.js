var imageArrayC = [];
imageArrayC[0] = "images/CBSA/c-1.JPG";
imageArrayC[1] = "images/CBSA/c-2.JPG";
imageArrayC[2] = "images/CBSA/c-3.JPG";
imageArrayC[3] = "images/CBSA/c-4.JPG";
imageArrayC[4] = "images/CBSA/c-5.JPG";
imageArrayC[5] = "images/CBSA/c-6.JPG";
imageArrayC[6] = "images/CBSA/c-7.JPG";
imageArrayC[7] = "images/CBSA/c-8.JPG";
imageArrayC[8] = "images/CBSA/c-9.JPG";
imageArrayC[9] = "images/CBSA/c-10.JPG";

function doC() {
    "use strict";
    var rand = Math.floor(Math.random() * 10), imgPath = "<img src='" + imageArrayC[rand] + "' alt='logo-C' border='0' align='absmiddle' />";
    document.getElementById("imageC").innerHTML = imgPath;
}


var imageArrayB = [];
imageArrayB[0] = "images/CBSA/b-1.JPG";
imageArrayB[1] = "images/CBSA/b-2.JPG";
imageArrayB[2] = "images/CBSA/b-3.JPG";
imageArrayB[3] = "images/CBSA/b-4.JPG";
imageArrayB[4] = "images/CBSA/b-5.JPG";
imageArrayB[5] = "images/CBSA/b-6.JPG";
imageArrayB[6] = "images/CBSA/b-7.JPG";
imageArrayB[7] = "images/CBSA/b-8.JPG";

function doB() {
    "use strict";
    var rand = Math.floor(Math.random() * 8), imgPath = "<img src='" + imageArrayB[rand] + "' alt='logo-B' border='0' align='absmiddle' />";
    document.getElementById("imageB").innerHTML = imgPath;
}


var imageArrayS = [];
imageArrayS[0] = "images/CBSA/s-1.JPG";
imageArrayS[1] = "images/CBSA/s-2.JPG";
imageArrayS[2] = "images/CBSA/s-3.JPG";
imageArrayS[3] = "images/CBSA/s-4.JPG";
imageArrayS[4] = "images/CBSA/s-5.JPG";
imageArrayS[5] = "images/CBSA/s-6.JPG";
imageArrayS[6] = "images/CBSA/s-7.JPG";
imageArrayS[7] = "images/CBSA/s-8.JPG";
imageArrayS[8] = "images/CBSA/s-9.JPG";

function doS() {
    "use strict";
    var rand = Math.floor(Math.random() * 9), imgPath = "<img src='" + imageArrayS[rand] + "' alt='logo-S' border='0' align='absmiddle' />";
    document.getElementById("imageS").innerHTML = imgPath;
}


var imageArrayA = [];
imageArrayA[0] = "images/CBSA/a-1.JPG";
imageArrayA[1] = "images/CBSA/a-2.JPG";
imageArrayA[2] = "images/CBSA/a-3.JPG";
imageArrayA[3] = "images/CBSA/a-4.JPG";
imageArrayA[4] = "images/CBSA/a-5.JPG";
imageArrayA[5] = "images/CBSA/a-6.JPG";
imageArrayA[6] = "images/CBSA/a-7.JPG";
imageArrayA[7] = "images/CBSA/a-8.JPG";

function doA() {
    "use strict";
    var rand = Math.floor(Math.random() * 8), imgPath = "<img src='" + imageArrayA[rand] + "' alt='logo-A' border='0' align='absmiddle' />";
    document.getElementById("imageA").innerHTML = imgPath;
}

doC();
doB();
doS();
doA();