$(document).ready(function () {
    $('.conteiner-carrosel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        speed: 200,
        arrows: true
    });
});




/*Estiliza os links do menu nav*/

document.getElementById("a-home").onmouseover = function () {
    document.getElementById("p-home").style.borderBottom = "2px solid #00cccc";
}
document.getElementById("a-home").onmouseout = function () {
    document.getElementById("p-home").style.borderBottom = "2px solid #efefef";
}

document.getElementById("a-aboutUs").onmouseover = function () {
    document.getElementById("p-aboutUs").style.borderBottom = "2px solid #00cccc";
}
document.getElementById("a-aboutUs").onmouseout = function () {
    document.getElementById("p-aboutUs").style.borderBottom = "2px solid #efefef";
}

document.getElementById("a-service").onmouseover = function () {
    document.getElementById("p-service").style.borderBottom = "2px solid #00cccc";
}
document.getElementById("a-service").onmouseout = function () {
    document.getElementById("p-service").style.borderBottom = "2px solid #efefef";
}

document.getElementById("a-pages").onmouseover = function () {
    document.getElementById("p-pages").style.borderBottom = "2px solid #00cccc";
}
document.getElementById("a-pages").onmouseout = function () {
    document.getElementById("p-pages").style.borderBottom = "2px solid #efefef";
}

document.getElementById("a-blog").onmouseover = function () {
    document.getElementById("p-blog").style.borderBottom = "2px solid #00cccc";
}
document.getElementById("a-blog").onmouseout = function () {
    document.getElementById("p-blog").style.borderBottom = "2px solid #efefef";
}
document.getElementById("a-contactUs").onmouseover = function () {
    document.getElementById("p-contactUs").style.borderBottom = "2px solid #00cccc";
}
document.getElementById("a-contactUs").onmouseout = function () {
    document.getElementById("p-contactUs").style.borderBottom = "2px solid #efefef";
}

/*Link para menu roda-pagina*/
var page1 = document.getElementById("page1");
if (page1 != null) {
    page1.onload = function () {
        var seletor = document.getElementById("seletor-page1");
        seletor.style.backgroundColor = "#00cccc";
        seletor.style.color = "white";
        seletor.style.border = "0.5px solid #00cccc";
    }
}
var page2 = document.getElementById("page2");
if (page2 != null) {
    page2.onload = function () {
        var seletor = document.getElementById("seletor-page2");
        seletor.style.backgroundColor = "#00cccc";
        seletor.style.color = "white";
        seletor.style.border = "0.5px solid #00cccc";
    }
}
var page3 = document.getElementById("page3");
if (page3 != null) {
    page3.onload = function () {
        var seletor = document.getElementById("seletor-page3");
        seletor.style.backgroundColor = "#00cccc";
        seletor.style.color = "white";
        seletor.style.border = "0.5px solid #00cccc";
    }
}
var page4 = document.getElementById("page4");
if (page4 != null) {
    page4.onload = function () {
        var seletor = document.getElementById("seletor-page4");
        seletor.style.backgroundColor = "#00cccc";
        seletor.style.color = "white";
        seletor.style.border = "0.5px solid #00cccc";

    }
}
var page5 = document.getElementById("page5");
if (page5 != null) {
    page5.onload = function () {
        var seletor = document.getElementById("seletor-page5");
        seletor.style.backgroundColor = "#00cccc";
        seletor.style.color = "white";
        seletor.style.border = "0.5px solid #00cccc";

    }
}
var page6 = document.getElementById("page6");
if (page6 != null) {
    page6.onload = function () {
        var seletor = document.getElementById("seletor-page6");
        seletor.style.backgroundColor = "#00cccc";
        seletor.style.color = "white";
        seletor.style.border = "0.5px solid #00cccc";

    }
}

/**/
var linkPrevius = document.getElementById("link-previus-blog");
var linkNext = document.getElementById("link-next-blog");

linkPrevius.onmouseover = function () {
    document.getElementById("setinha-previus-blog").style.filter = "grayscale(0%)";
    document.getElementById("p-share-previus").style.color = "#00cccc";

}
linkPrevius.onmouseout = function () {
    document.getElementById("setinha-previus-blog").style.filter = "grayscale(100%)";
    document.getElementById("p-share-previus").style.color = "#999999";
}
linkNext.onmouseover = function () {
    document.getElementById("setinha-next-blog").style.filter = "grayscale(0%)";
    document.getElementById("p-share-next").style.color = "#00cccc";

}
linkNext.onmouseout = function () {
    document.getElementById("setinha-next-blog").style.filter = "grayscale(100%)";
    document.getElementById("p-share-next").style.color = "#999999";
}