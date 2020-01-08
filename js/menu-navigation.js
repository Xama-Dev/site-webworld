var aHome = document.getElementById("a-home");
var liHome = document.getElementById("li-home");
aHome.onmouseover = function () {
    liHome.style.borderBottom = "2px solid #00cccc"
    aHome.style.color = "#00cccc";
}
aHome.onmouseout = function () {
    liHome.style.borderBottom = "2px solid transparent"
    aHome.style.color = "#999999";
}

var aAboutUs = document.getElementById("a-aboutUs");
var liAboutUs = document.getElementById("li-aboutUs");
aAboutUs.onmouseover = function () {
    liAboutUs.style.borderBottom = "2px solid #00cccc"
    aAboutUs.style.color = "#00cccc";
}
aAboutUs.onmouseout = function () {
    liAboutUs.style.borderBottom = "2px solid transparent"
    aAboutUs.style.color = "#999999";
}

var aServices = document.getElementById("a-services");
var liServices = document.getElementById("li-services");
aServices.onmouseover = function () {
    liServices.style.borderBottom = "2px solid #00cccc"
    aServices.style.color = "#00cccc";
}
aServices.onmouseout = function () {
    liServices.style.borderBottom = "2px solid transparent"
    aServices.style.color = "#999999";
}

var aPages = document.getElementById("a-pages");
var submenuPages = document.getElementById("submenu-pages");
var liPages = document.getElementById("li-pages");
aPages.onmouseover = function () {
    liPages.style.borderBottom = "2px solid #00cccc"
    aPages.style.color = "#00cccc";
    submenuPages.style.visibility = "visible";
    submenuPages.style.opacity = "1";
}
submenuPages.onmouseover = function () {
    submenuPages.style.visibility = "visible";
    submenuPages.style.opacity = "1";
}
aPages.onmouseout = function () {
    liPages.style.borderBottom = "2px solid transparent"
    aPages.style.color = "#999999";
    submenuPages.style.visibility = "hidden";
    submenuPages.style.opacity = "0";
}
submenuPages.onmouseout = function () {
    submenuPages.style.visibility = "hidden";
    submenuPages.style.opacity = "0";
}

var aBlog = document.getElementById("a-blog");
var liBlog = document.getElementById("li-blog");
aBlog.onmouseover = function () {
    liBlog.style.borderBottom = "2px solid #00cccc"
    aBlog.style.color = "#00cccc";
}
aBlog.onmouseout = function () {
    liBlog.style.borderBottom = "2px solid transparent"
    aBlog.style.color = "#999999";
}

var aContacUs = document.getElementById("a-contactUs");
var liContactUs = document.getElementById("li-contactUs");
aContacUs.onmouseover = function () {
    liContactUs.style.borderBottom = "2px solid #00cccc"
    aContacUs.style.color = "#00cccc";
}
aContacUs.onmouseout = function () {
    liContactUs.style.borderBottom = "2px solid transparent"
    aContacUs.style.color = "#999999";
}