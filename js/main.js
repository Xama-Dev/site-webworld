$('.section-slider').slick({
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


/*Função para troca de imagem no onmouseover subseção na seção 3*/
var btnImacLigado = 0;
var btnLapisLigado = 1;
var btnPaisagemLigado = 0;

document.getElementById("btn-subsection-imac").onmouseover = function () {
  document.getElementById("btn-subsection-imac").style.cursor = "pointer";
  if (btnImacLigado == 0) {
    document.getElementById("btn-subsection-imac").style.backgroundImage = "url(./img/imac-azul.png)";
  }

}
document.getElementById("btn-subsection-imac").onmouseout = function () {
  if (btnImacLigado == 0) {
    document.getElementById("btn-subsection-imac").style.backgroundImage = "url(./img/imac.png)";
  }
}

document.getElementById("btn-subsection-pencil").onmouseover = function () {
  document.getElementById("btn-subsection-pencil").style.cursor = "pointer";
  if (btnLapisLigado == 0) {
    document.getElementById("btn-subsection-pencil").style.backgroundImage = "url(./img/lapis-azul.png)";
  }
}
document.getElementById("btn-subsection-pencil").onmouseout = function () {
  if (btnLapisLigado == 0) {
    document.getElementById("btn-subsection-pencil").style.backgroundImage = "url(./img/lapis.png)";
  }
}

document.getElementById("btn-subsection-landscape").onmouseover = function () {
  document.getElementById("btn-subsection-landscape").style.cursor = "pointer";
  if (btnPaisagemLigado == 0) {
    document.getElementById("btn-subsection-landscape").style.backgroundImage = "url(./img/paisagem-azul.png)";
  }
}
document.getElementById("btn-subsection-landscape").onmouseout = function () {
  if (btnPaisagemLigado == 0) {
    document.getElementById("btn-subsection-landscape").style.backgroundImage = "url(./img/paisagem.png)";
  }
}

/*Função para troca de subseção na seção 3*/
function changeSubsectionImac() {
  document.getElementById("subsection-imac").style.display = "block";
  document.getElementById("subsection-pencil").style.display = "none";
  document.getElementById("subsection-landscape").style.display = "none";

  document.getElementById("btn-subsection-imac").style.backgroundImage = "url(./img/imac-azul.png)";
  document.getElementById("btn-subsection-pencil").style.backgroundImage = "url(./img/lapis.png)";
  document.getElementById("btn-subsection-landscape").style.backgroundImage = "url(./img/paisagem.png)";

  document.getElementById("cotainer-img-text-section1-esquerda").style.marginTop = "11%";
  document.getElementById("cotainer-img-text-section1-central").style.marginTop = "0%";
  document.getElementById("cotainer-img-text-section1-direita").style.marginTop = "0%";

  document.getElementById("pointer-subsection-left").style.opacity = "1";
  document.getElementById("pointer-subsection-central").style.opacity = "0";
  document.getElementById("pointer-subsection-right").style.opacity = "0";

  if (btnImacLigado == 0) {
    btnImacLigado = 1;
    btnLapisLigado = 0;
    btnPaisagemLigado = 0;
  }
}
document.getElementById("btn-subsection-imac").addEventListener("click", changeSubsectionImac);

function changeSubsectionPencil() {
  document.getElementById("subsection-pencil").style.display = "block";
  document.getElementById("subsection-imac").style.display = "none";
  document.getElementById("subsection-landscape").style.display = "none";

  document.getElementById("btn-subsection-pencil").style.backgroundImage = "url(./img/lapis-azul.png)";
  document.getElementById("btn-subsection-landscape").style.backgroundImage = "url(./img/paisagem.png)";
  document.getElementById("btn-subsection-imac").style.backgroundImage = "url(./img/imac.png)";

  document.getElementById("cotainer-img-text-section1-central").style.marginTop = "11%";
  document.getElementById("cotainer-img-text-section1-direita").style.marginTop = "0%";
  document.getElementById("cotainer-img-text-section1-esquerda").style.marginTop = "0%";

  document.getElementById("pointer-subsection-left").style.opacity = "0";
  document.getElementById("pointer-subsection-central").style.opacity = "1";
  document.getElementById("pointer-subsection-right").style.opacity = "0";

  if (btnLapisLigado == 0) {
    btnLapisLigado = 1;
    btnImacLigado = 0;
    btnPaisagemLigado = 0;
  }
}
document.getElementById("btn-subsection-pencil").addEventListener("click", changeSubsectionPencil);

function changeSubsectionLandscape() {
  document.getElementById("subsection-landscape").style.display = "block";
  document.getElementById("subsection-imac").style.display = "none";
  document.getElementById("subsection-pencil").style.display = "none";

  document.getElementById("btn-subsection-landscape").style.backgroundImage = "url(./img/paisagem-azul.png)";
  document.getElementById("btn-subsection-imac").style.backgroundImage = "url(./img/imac.png)";
  document.getElementById("btn-subsection-pencil").style.backgroundImage = "url(./img/lapis.png)";

  document.getElementById("cotainer-img-text-section1-direita").style.marginTop = "11%"
  document.getElementById("cotainer-img-text-section1-esquerda").style.marginTop = "0%";
  document.getElementById("cotainer-img-text-section1-central").style.marginTop = "0%";

  document.getElementById("pointer-subsection-left").style.opacity = "0";
  document.getElementById("pointer-subsection-central").style.opacity = "0";
  document.getElementById("pointer-subsection-right").style.opacity = "1";

  if (btnPaisagemLigado == 0) {
    btnPaisagemLigado = 1;
    btnLapisLigado = 0;
    btnImacLigado = 0;
  }
}
document.getElementById("btn-subsection-landscape").addEventListener("click", changeSubsectionLandscape);