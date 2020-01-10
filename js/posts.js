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

/*LINKS de movimentação dos posts*/
var linkPrevius = document.getElementById("link-previus-blog");
var linkNext = document.getElementById("link-next-blog");

var littleArrowPreviusBlog = document.getElementById("little-arrow-previus-blog");
var littleArrowNextBlog = document.getElementById("little-arrow-next-blog");

var pSharePrevius = document.getElementById("p-share-previus");
var pShareNext = document.getElementById("p-share-next");

linkPrevius.onmouseover = function () {
    littleArrowPreviusBlog.style.filter = "grayscale(0%)";
    pSharePrevius.style.color = "#00cccc";

}
linkPrevius.onmouseout = function () {
    littleArrowPreviusBlog.style.filter = "grayscale(100%)";
    pSharePrevius.style.color = "#999999";
}
linkNext.onmouseover = function () {
    littleArrowNextBlog.style.filter = "grayscale(0%)";
    pShareNext.style.color = "#00cccc";

}
linkNext.onmouseout = function () {
    littleArrowNextBlog.style.filter = "grayscale(100%)";
    pShareNext.style.color = "#999999";
}