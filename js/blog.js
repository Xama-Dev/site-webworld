$(document).ready(function () {
    $('.container-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        speed: 200,
        arrows: true,
        pauseOnFocus: false,
        pauseOnDotsHover: true
    });
});

/*MENU roda pagina */
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