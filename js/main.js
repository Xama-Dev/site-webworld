/*
$('.slider-principal').slick();
  */  

  $('.slider-principal').slick({
    dots: true,//legenda do slider que informa a quantidade de itens e a seleção atual
    infinite: true,
    speed: 300,
    slidesToShow: 1, //quantidade de slider mostrados por vez
    adaptiveHeight: true,
    autoplay: true
  });