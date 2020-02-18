$(document).ready(function () {
    $('.sliders-container').slick({
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

const actualPage = document.querySelectorAll('.page-actual-selector')[0].innerHTML

if (actualPage === '1' || actualPage === '2' || actualPage === '3') {
    $(document).ready(function () {
        $('.slider-pagination').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,        
            infinite: false,
            initialSlide: 0
        });
    });
} else if (actualPage === '4' || actualPage === '5' || actualPage === '6' ) {
    $(document).ready(function () {
        $('.slider-pagination').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,        
            infinite: false,
            initialSlide: 3
        });
    });
}