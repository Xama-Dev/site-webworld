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

const btnSubsectionImac = document.getElementById("btn-subsection-imac");
const btnSubsectionPencil = document.getElementById("btn-subsection-pencil");
const btnSubsectionLandscape = document.getElementById("btn-subsection-landscape");

const subsectionImac = document.getElementById("subsection-imac");
const subsectionPencil = document.getElementById("subsection-pencil");
const subsectionLandscape = document.getElementById("subsection-landscape");

const containerImgTextBtnImac = document.getElementById("cotainer-img-text-btn-imac");
const containerImgTextBtnPencil = document.getElementById("cotainer-img-text-btn-pencil");
const containerImgTextBtnLandscape = document.getElementById("cotainer-img-text-btn-landscape");

const pointerSubsectionImac = document.getElementById("pointer-subsection-imac");
const pointerSubsectionPencil = document.getElementById("pointer-subsection-pencil");
const pointerSubsectionLandsacape = document.getElementById("pointer-subsection-landscape");


/*Função para troca de cor da imagem no onmouseover das subseções*/
btnSubsectionImac.onmouseover = function () {
  if (!btnSubsectionImac.classList.contains('btn-subsection-active')) {
    btnSubsectionImac.classList.add('btn-subsection-on-mouse-over')
  }

}
btnSubsectionImac.onmouseout = function () {
  if (!btnSubsectionImac.classList.contains('btn-subsection-active') || btnSubsectionImac.classList.contains('btn-subsection-on-mouse-over')) {
    btnSubsectionImac.classList.remove('btn-subsection-on-mouse-over')
  }
}

btnSubsectionPencil.onmouseover = function () {
  if (!btnSubsectionPencil.classList.contains('btn-subsection-active')) {
    btnSubsectionPencil.classList.add('btn-subsection-on-mouse-over')
  }

}
btnSubsectionPencil.onmouseout = function () {
  if (!btnSubsectionPencil.classList.contains('btn-subsection-active') || btnSubsectionPencil.classList.contains('btn-subsection-on-mouse-over')) {
    btnSubsectionPencil.classList.remove('btn-subsection-on-mouse-over')
  }
}

btnSubsectionLandscape.onmouseover = function () {
  if (!btnSubsectionLandscape.classList.contains('btn-subsection-active')) {
    btnSubsectionLandscape.classList.add('btn-subsection-on-mouse-over')
  }

}
btnSubsectionLandscape.onmouseout = function () {
  if (!btnSubsectionLandscape.classList.contains('btn-subsection-active') || btnSubsectionLandscape.classList.contains('btn-subsection-on-mouse-over')) {
    btnSubsectionLandscape.classList.remove('btn-subsection-on-mouse-over')
  }
}



/*Função para troca de subseção*/
function changeSubsectionImac() {
  btnSubsectionImac.classList.add('btn-subsection-active')
  btnSubsectionImac.classList.remove('btn-subsection-no-active')
  btnSubsectionPencil.classList.remove('btn-subsection-active')
  btnSubsectionPencil.classList.add('btn-subsection-no-active')
  btnSubsectionLandscape.classList.remove('btn-subsection-active') 
  btnSubsectionLandscape.classList.add('btn-subsection-no-active')

  containerImgTextBtnImac.classList.add('container-img-text-active')
  containerImgTextBtnPencil.classList.remove('container-img-text-active')
  containerImgTextBtnLandscape.classList.remove('container-img-text-active')
  
  pointerSubsectionImac.classList.add('pointer-subsection-active')
  pointerSubsectionPencil.classList.remove('pointer-subsection-active')
  pointerSubsectionLandsacape.classList.remove('pointer-subsection-active')

  subsectionImac.classList.add('subsection-display-block')
  subsectionPencil.classList.remove('subsection-display-block')
  subsectionLandscape.classList.remove('subsection-display-block')

}
btnSubsectionImac.addEventListener("click", changeSubsectionImac);

function changeSubsectionPencil() {
  btnSubsectionPencil.classList.add('btn-subsection-active')
  btnSubsectionPencil.classList.remove('btn-subsection-no-active')
  btnSubsectionImac.classList.remove('btn-subsection-active')
  btnSubsectionImac.classList.add('btn-subsection-no-active')   
  btnSubsectionLandscape.classList.remove('btn-subsection-active')
  btnSubsectionLandscape.classList.add('btn-subsection-no-active')

  containerImgTextBtnPencil.classList.add('container-img-text-active')
  containerImgTextBtnImac.classList.remove('container-img-text-active')
  containerImgTextBtnLandscape.classList.remove('container-img-text-active')
  
  pointerSubsectionPencil.classList.add('pointer-subsection-active')
  pointerSubsectionImac.classList.remove('pointer-subsection-active')
  pointerSubsectionLandsacape.classList.remove('pointer-subsection-active')

  subsectionPencil.classList.add('subsection-display-block')
  subsectionImac.classList.remove('subsection-display-block')
  subsectionLandscape.classList.remove('subsection-display-block')

}
btnSubsectionPencil.addEventListener("click", changeSubsectionPencil);

function changeSubsectionLandscape() {
  btnSubsectionLandscape.classList.add('btn-subsection-active')
  btnSubsectionLandscape.classList.remove('btn-subsection-no-active')
  btnSubsectionImac.classList.remove('btn-subsection-active')
  btnSubsectionImac.classList.add('btn-subsection-no-active')   
  btnSubsectionPencil.classList.remove('btn-subsection-active')
  btnSubsectionPencil.classList.add('btn-subsection-no-active')

  containerImgTextBtnLandscape.classList.add('container-img-text-active')
  containerImgTextBtnImac.classList.remove('container-img-text-active')
  containerImgTextBtnPencil.classList.remove('container-img-text-active')
  
  pointerSubsectionLandsacape.classList.add('pointer-subsection-active')
  pointerSubsectionImac.classList.remove('pointer-subsection-active')
  pointerSubsectionPencil.classList.remove('pointer-subsection-active')

  subsectionLandscape.classList.add('subsection-display-block')
  subsectionImac.classList.remove('subsection-display-block')
  subsectionPencil.classList.remove('subsection-display-block')
  
}
btnSubsectionLandscape.addEventListener("click", changeSubsectionLandscape);