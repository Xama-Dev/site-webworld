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

const actualPage = document.getElementsByTagName('body')

if (actualPage[0].id === 'blog-home') {
    $(document).ready(function () {
        $('.carousel-menu').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            infinite: false,
            initialSlide: 0
        });
    });

} else if (actualPage[0].id === 'blog-page2' ) {
    $(document).ready(function () {
        $('.carousel-menu').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            infinite: false,
            initialSlide: 0
        });
    });

} else if (actualPage[0].id === 'blog-page3') {
    $(document).ready(function () {
        $('.carousel-menu').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            infinite: false,
            initialSlide: 0
        });
    });

}else if (actualPage[0].id === 'blog-page4') {
    $(document).ready(function () {
        $('.carousel-menu').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            infinite: false,
            initialSlide: 1 /* tonra o botão selecionado visivel*/
        });
    });

} else if (actualPage[0].id === 'blog-page5') {
    $(document).ready(function () {
        $('.carousel-menu').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            infinite: false,
            initialSlide: 2 /* tonra o botão selecionado visivel*/
        });
    });

} else if (actualPage[0].id === 'blog-page6') {
    $(document).ready(function () {
        $('.carousel-menu').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            infinite: false,
            initialSlide: 3 /* tonra o botão selecionado visivel*/
        });
    });

}

