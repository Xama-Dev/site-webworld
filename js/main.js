/*
$('').slick();
  */

$('.secao-slider').slick({
  dots: true, //legenda do slider que informa a quantidade de itens e a seleção atual
  infinite: true,
  speed: 300,
  slidesToShow: 1, //quantidade de slider mostrados por vez
  adaptiveHeight: false,
  autoplay: true
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


/*Função para troca de subseção na seção 3*/
function trocaSubsecaoImac() {
  document.getElementById("subsecaoImac").style.display = "block";
  document.getElementById("subsecaoLapis").style.display = "none";
  document.getElementById("subsecaoPaisagem").style.display = "none";

  /*document.getElementById("imac-icone").style.content = "url(./img/imac-azul.png)";
  document.getElementById("lapis-icone").style.content = "url(./img/lapis.png)";
  document.getElementById("paisagem-icone").style.content = "url(./img/paisagem.png)";*/

  document.getElementById("conteiner-img-texto-secao2-esquerda").style.marginTop = "120px";
  document.getElementById("conteiner-img-texto-secao2-central").style.marginTop = "";
  document.getElementById("conteiner-img-texto-secao2-direita").style.marginTop = "";

  document.getElementById("indicador-da-seção").style.marginRight = "665px";
}
document.getElementById("imac-icone").addEventListener("click", trocaSubsecaoImac);

function trocaSubsecaoLapis() {
  document.getElementById("subsecaoLapis").style.display = "block";
  document.getElementById("subsecaoImac").style.display = "none";
  document.getElementById("subsecaoPaisagem").style.display = "none";

  /*document.getElementById("lapis-icone").style.content = "url(./img/lapis-azul.png)";
  document.getElementById("paisagem-icone").style.content = "url(./img/paisagem.png)";
  document.getElementById("imac-icone").style.content = "url(./img/imac.png)";*/

  document.getElementById("conteiner-img-texto-secao2-central").style.marginTop = "120px";
  document.getElementById("conteiner-img-texto-secao2-direita").style.marginTop = "";
  document.getElementById("conteiner-img-texto-secao2-esquerda").style.marginTop = "";

  document.getElementById("indicador-da-seção").style.marginRight = "";
}
document.getElementById("lapis-icone").addEventListener("click", trocaSubsecaoLapis);

function trocaSubsecaoPaisagem() {
  document.getElementById("subsecaoPaisagem").style.display = "block";
  document.getElementById("subsecaoImac").style.display = "none";
  document.getElementById("subsecaoLapis").style.display = "none";

  /*document.getElementById("paisagem-icone").style.content = "url(./img/paisagem-azul.png)";
  document.getElementById("imac-icone").style.content = "url(./img/imac.png)";
  document.getElementById("lapis-icone").style.content = "url(./img/lapis.png)";*/

  document.getElementById("conteiner-img-texto-secao2-direita").style.marginTop = "120px"
  document.getElementById("conteiner-img-texto-secao2-esquerda").style.marginTop = "";
  document.getElementById("conteiner-img-texto-secao2-central").style.marginTop = "";

  document.getElementById("indicador-da-seção").style.marginRight = "-665px";
}
document.getElementById("paisagem-icone").addEventListener("click", trocaSubsecaoPaisagem);

function setMarginTop() {
  document.getElementById("conteiner-img-texto-secao2-central").style.marginTop = "120px";
}
window.addEventListener("load", setMarginTop);