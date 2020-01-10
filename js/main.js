$('.section-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay: true,
  arrows: true,
  pauseOnDotsHover: true,
  pauseOnFocus: false
});



var btnImacOn = 0;
var btnPencilOn = 1;
var btnLandscapeOn = 0;

var btnSubsectionImac = document.getElementById("btn-subsection-imac");
var btnSubsectionPencil = document.getElementById("btn-subsection-pencil");
var btnSubsectionLandscape = document.getElementById("btn-subsection-landscape");

var subsectionImac = document.getElementById("subsection-imac");
var subsectionPencil = document.getElementById("subsection-pencil");
var subsectionLandscape = document.getElementById("subsection-landscape");

var containerImgTextBtnImac = document.getElementById("cotainer-img-text-btn-imac");
var containerImgTextBtnPencil = document.getElementById("cotainer-img-text-btn-pencil");
var containerImgTextBtnLandscape = document.getElementById("cotainer-img-text-btn-landscape");

var pointerSubsectionImac = document.getElementById("pointer-subsection-imac");
var pointerSubsectionPencil = document.getElementById("pointer-subsection-pencil");
var pointerSubsectionLandsacape = document.getElementById("pointer-subsection-landscape");

/*Função para troca de cor da imagem no onmouseover*/
btnSubsectionImac.onmouseover = function () {
  btnSubsectionImac.style.cursor = "pointer";
  if (btnImacOn == 0) {
    btnSubsectionImac.style.filter = "grayscale(0%) brightness(100%)";
  }

}
btnSubsectionImac.onmouseout = function () {
  if (btnImacOn == 0) {
    btnSubsectionImac.style.filter = "grayscale(100%) brightness(120%)";
  }
}

btnSubsectionPencil.onmouseover = function () {
  btnSubsectionPencil.style.cursor = "pointer";
  if (btnPencilOn == 0) {
    btnSubsectionPencil.style.filter = "grayscale(0%) brightness(100%)";
  }
}
btnSubsectionPencil.onmouseout = function () {
  if (btnPencilOn == 0) {
    btnSubsectionPencil.style.filter = "grayscale(100%) brightness(120%)";
  }
}

btnSubsectionLandscape.onmouseover = function () {
  btnSubsectionLandscape.style.cursor = "pointer";
  if (btnLandscapeOn == 0) {
    btnSubsectionLandscape.style.filter = "grayscale(0%) brightness(100%)";
  }
}
btnSubsectionLandscape.onmouseout = function () {
  if (btnLandscapeOn == 0) {
    btnSubsectionLandscape.style.filter = "grayscale(100%) brightness(120%)";
  }
}

/*Função para troca de subseção*/
function changeSubsectionImac() {
  subsectionImac.style.display = "block";
  subsectionPencil.style.display = "none";
  subsectionLandscape.style.display = "none";

  btnSubsectionImac.style.filter = "grayscale(0%) brightness(100%)";
  btnSubsectionPencil.style.filter = "grayscale(100%) brightness(120%)";
  btnSubsectionLandscape.style.filter = "grayscale(100%) brightness(120%)";

  containerImgTextBtnImac.style.marginTop = "11%";
  containerImgTextBtnPencil.style.marginTop = "0%";
  containerImgTextBtnLandscape.style.marginTop = "0%";

  pointerSubsectionImac.style.opacity = "1";
  pointerSubsectionPencil.style.opacity = "0";
  pointerSubsectionLandsacape.style.opacity = "0";

  if (btnImacOn == 0) {
    btnImacOn = 1;
    btnPencilOn = 0;
    btnLandscapeOn = 0;
  }
}
btnSubsectionImac.addEventListener("click", changeSubsectionImac);

function changeSubsectionPencil() {
  subsectionPencil.style.display = "block";
  subsectionImac.style.display = "none";
  subsectionLandscape.style.display = "none";

  btnSubsectionPencil.style.filter = "grayscale(0%) brightness(100%)";
  btnSubsectionLandscape.style.filter = "grayscale(100%) brightness(120%)";
  btnSubsectionImac.style.filter = "grayscale(100%) brightness(120%)";

  containerImgTextBtnPencil.style.marginTop = "11%";
  containerImgTextBtnLandscape.style.marginTop = "0%";
  containerImgTextBtnImac.style.marginTop = "0%";

  pointerSubsectionImac.style.opacity = "0";
  pointerSubsectionPencil.style.opacity = "1";
  pointerSubsectionLandsacape.style.opacity = "0";

  if (btnPencilOn == 0) {
    btnPencilOn = 1;
    btnImacOn = 0;
    btnLandscapeOn = 0;
  }
}
btnSubsectionPencil.addEventListener("click", changeSubsectionPencil);

function changeSubsectionLandscape() {
  subsectionLandscape.style.display = "block";
  subsectionImac.style.display = "none";
  subsectionPencil.style.display = "none";

  btnSubsectionLandscape.style.filter = "grayscale(0%) brightness(100%)";
  btnSubsectionImac.style.filter = "grayscale(100%) brightness(120%)";
  btnSubsectionPencil.style.filter = "grayscale(100%) brightness(120%)";

  containerImgTextBtnLandscape.style.marginTop = "11%"
  containerImgTextBtnImac.style.marginTop = "0%";
  containerImgTextBtnPencil.style.marginTop = "0%";

  pointerSubsectionImac.style.opacity = "0";
  pointerSubsectionPencil.style.opacity = "0";
  pointerSubsectionLandsacape.style.opacity = "1";

  if (btnLandscapeOn == 0) {
    btnLandscapeOn = 1;
    btnPencilOn = 0;
    btnImacOn = 0;
  }
}
btnSubsectionLandscape.addEventListener("click", changeSubsectionLandscape);