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

/* MENU NAVEGAÇÃO estilização dos links*/
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