/*
$('').slick();
  */

$('.secao-slider').slick({
  dots: true, //legenda do slider que informa a quantidade de itens e a seleção atual
  infinite: true,
  speed: 300,
  slidesToShow: 1, //quantidade de slider mostrados por vez
  adaptiveHeight: false,
  autoplay: true,
  arrows: true,
  pauseOnDotsHover: true,
  pauseOnFocus: false
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

/*Função para troca de imagem no onmouseover subseção na seção 3*/
var btnImacLigado = 0;
var btnLapisLigado = 1;
var btnPaisagemLigado = 0;

document.getElementById("btn-secao-imac").onmouseover = function () {
  document.getElementById("btn-secao-imac").style.cursor = "pointer";
  if (btnImacLigado == 0) {
    document.getElementById("btn-secao-imac").style.backgroundImage = "url(./img/imac-azul.png)";
  }

}
document.getElementById("btn-secao-imac").onmouseout = function () {
  if (btnImacLigado == 0) {
    document.getElementById("btn-secao-imac").style.backgroundImage = "url(./img/imac.png)";
  }
}

document.getElementById("btn-secao-lapis").onmouseover = function () {
  document.getElementById("btn-secao-lapis").style.cursor = "pointer";
  if (btnLapisLigado == 0) {
    document.getElementById("btn-secao-lapis").style.backgroundImage = "url(./img/lapis-azul.png)";
  }
}
document.getElementById("btn-secao-lapis").onmouseout = function () {
  if (btnLapisLigado == 0) {
    document.getElementById("btn-secao-lapis").style.backgroundImage = "url(./img/lapis.png)";
  }
}

document.getElementById("btn-secao-paisagem").onmouseover = function () {
  document.getElementById("btn-secao-paisagem").style.cursor = "pointer";
  if (btnPaisagemLigado == 0) {
    document.getElementById("btn-secao-paisagem").style.backgroundImage = "url(./img/paisagem-azul.png)";
  }
}
document.getElementById("btn-secao-paisagem").onmouseout = function () {
  if (btnPaisagemLigado == 0) {
    document.getElementById("btn-secao-paisagem").style.backgroundImage = "url(./img/paisagem.png)";
  }
}

/*Função para troca de subseção na seção 3*/
function trocaSubsecaoImac() {
  document.getElementById("subsecaoImac").style.display = "block";
  document.getElementById("subsecaoLapis").style.display = "none";
  document.getElementById("subsecaoPaisagem").style.display = "none";

  document.getElementById("btn-secao-imac").style.backgroundImage = "url(./img/imac-azul.png)";
  document.getElementById("btn-secao-lapis").style.backgroundImage = "url(./img/lapis.png)";
  document.getElementById("btn-secao-paisagem").style.backgroundImage = "url(./img/paisagem.png)";

  document.getElementById("conteiner-img-texto-secao1-esquerda").style.marginTop = "11%";
  document.getElementById("conteiner-img-texto-secao1-central").style.marginTop = "0%";
  document.getElementById("conteiner-img-texto-secao1-direita").style.marginTop = "0%";

  document.getElementById("indicador-da-secao-esquerda").style.opacity = "1";
  document.getElementById("indicador-da-secao-central").style.opacity = "0";
  document.getElementById("indicador-da-secao-direita").style.opacity = "0";

  if (btnImacLigado == 0) {
    btnImacLigado = 1;
    btnLapisLigado = 0;
    btnPaisagemLigado = 0;
  }
}
document.getElementById("btn-secao-imac").addEventListener("click", trocaSubsecaoImac);

function trocaSubsecaoLapis() {
  document.getElementById("subsecaoLapis").style.display = "block";
  document.getElementById("subsecaoImac").style.display = "none";
  document.getElementById("subsecaoPaisagem").style.display = "none";

  document.getElementById("btn-secao-lapis").style.backgroundImage = "url(./img/lapis-azul.png)";
  document.getElementById("btn-secao-paisagem").style.backgroundImage = "url(./img/paisagem.png)";
  document.getElementById("btn-secao-imac").style.backgroundImage = "url(./img/imac.png)";

  document.getElementById("conteiner-img-texto-secao1-central").style.marginTop = "11%";
  document.getElementById("conteiner-img-texto-secao1-direita").style.marginTop = "0%";
  document.getElementById("conteiner-img-texto-secao1-esquerda").style.marginTop = "0%";

  document.getElementById("indicador-da-secao-esquerda").style.opacity = "0";
  document.getElementById("indicador-da-secao-central").style.opacity = "1";
  document.getElementById("indicador-da-secao-direita").style.opacity = "0";

  if (btnLapisLigado == 0) {
    btnLapisLigado = 1;
    btnImacLigado = 0;
    btnPaisagemLigado = 0;
  }
}
document.getElementById("btn-secao-lapis").addEventListener("click", trocaSubsecaoLapis);

function trocaSubsecaoPaisagem() {
  document.getElementById("subsecaoPaisagem").style.display = "block";
  document.getElementById("subsecaoImac").style.display = "none";
  document.getElementById("subsecaoLapis").style.display = "none";

  document.getElementById("btn-secao-paisagem").style.backgroundImage = "url(./img/paisagem-azul.png)";
  document.getElementById("btn-secao-imac").style.backgroundImage = "url(./img/imac.png)";
  document.getElementById("btn-secao-lapis").style.backgroundImage = "url(./img/lapis.png)";

  document.getElementById("conteiner-img-texto-secao1-direita").style.marginTop = "11%"
  document.getElementById("conteiner-img-texto-secao1-esquerda").style.marginTop = "0%";
  document.getElementById("conteiner-img-texto-secao1-central").style.marginTop = "0%";

  document.getElementById("indicador-da-secao-esquerda").style.opacity = "0";
  document.getElementById("indicador-da-secao-central").style.opacity = "0";
  document.getElementById("indicador-da-secao-direita").style.opacity = "1";

  if (btnPaisagemLigado == 0) {
    btnPaisagemLigado = 1;
    btnLapisLigado = 0;
    btnImacLigado = 0;
  }
}
document.getElementById("btn-secao-paisagem").addEventListener("click", trocaSubsecaoPaisagem);