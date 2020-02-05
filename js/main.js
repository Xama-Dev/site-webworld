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


const buttonsSubsection = document.querySelectorAll('button.btn-change-subsection')
const buttonImac = buttonsSubsection[0]
const buttonPencil = buttonsSubsection[1]
const buttonLandscape = buttonsSubsection[2]

const containersImgText = document.querySelectorAll('div.cotainer-img-text-section1')
const containerImgTextBtnImac = containersImgText[0]
const containerImgTextBtnPencil = containersImgText[1]
const containerImgTextBtnLandscape = containersImgText[2]

const pointersSubsection = document.querySelectorAll('img.indicador-de-secao')
const pointerSubsectionImac = pointersSubsection[0]
const pointerSubsectionPencil = pointersSubsection[1]
const pointerSubsectionLandsacape = pointersSubsection[2]

const subsections = document.querySelectorAll('div.subsection-display-none')
const subsectionImac = subsections[0]
const subsectionPencil = subsections[1]
const subsectionLandscape = subsections[2]

function changeSubsection( button){
  let buttonActive = document.querySelector('.btn-subsection-active')
  let containerImgTextActive = document.querySelector('.container-img-text-active')
  let pointerSubsectionActive = document.querySelector('.pointer-subsection-active')
  let subsectionDisplayBlock = document.querySelector('.subsection-display-block') 
  
  buttonActive.classList.remove('btn-subsection-active')
  buttonActive.classList.add('btn-subsection-no-active')
  button.classList.add('btn-subsection-active')
  button.classList.remove('btn-subsection-no-active')  
  
  if ( button.id === 'btn-subsection-imac') {
    containerImgTextActive.classList.remove('container-img-text-active')
    containerImgTextBtnImac.classList.add('container-img-text-active')
    pointerSubsectionActive.classList.remove('pointer-subsection-active')
    pointerSubsectionImac.classList.add('pointer-subsection-active')
    subsectionDisplayBlock.classList.remove('subsection-display-block')
    subsectionImac.classList.add('subsection-display-block')

  } else if (button.id === 'btn-subsection-pencil') {
    containerImgTextActive.classList.remove('container-img-text-active')
    containerImgTextBtnPencil.classList.add('container-img-text-active')
    pointerSubsectionActive.classList.remove('pointer-subsection-active')
    pointerSubsectionPencil.classList.add('pointer-subsection-active')
    subsectionDisplayBlock.classList.remove('subsection-display-block')
    subsectionPencil.classList.add('subsection-display-block')

  } else if (button.id === 'btn-subsection-landscape') {
    containerImgTextActive.classList.remove('container-img-text-active')
    containerImgTextBtnLandscape.classList.add('container-img-text-active')
    pointerSubsectionActive.classList.remove('pointer-subsection-active')
    pointerSubsectionLandsacape.classList.add('pointer-subsection-active')
    subsectionDisplayBlock.classList.remove('subsection-display-block')
    subsectionLandscape.classList.add('subsection-display-block')
  }
}



buttonsSubsection.forEach(button => { 
  button.onmouseover = function () {    
    let activeClass = button.classList.contains('btn-subsection-active')
    let onmouseoverClass = button.classList.contains('btn-subsection-on-mouse-over')
    
    if (!activeClass) {
      button.classList.add('btn-subsection-on-mouse-over')
    }
  } 

  button.onmouseout = function () {  
    let activeClass = button.classList.contains('btn-subsection-active')
    let onmouseoverClass = button.classList.contains('btn-subsection-on-mouse-over') 

    if (!activeClass || onmouseoverClass) {
      button.classList.remove('btn-subsection-on-mouse-over')
    }
  }

  button.addEventListener('click', function(){
    changeSubsection(button)
  })
    
})