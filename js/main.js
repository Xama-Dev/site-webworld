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
const containersImgText = document.querySelectorAll('div.cotainer-img-text-section1')
const pointersSubsection = document.querySelectorAll('img.indicador-de-secao')
const subsections = document.querySelectorAll('div.subsection-display-none')

const subsectionPrototype = {
  button: {},
  containerImgText: {},
  pointer: {},
  sectionImgText: {},
  active: function () {
    this.button.classList.add('btn-subsection-active')
    this.button.classList.remove('btn-subsection-no-active')

    this.containerImgText.classList.add('container-img-text-active')

    this.pointer.classList.add('pointer-subsection-active')

    this.sectionImgText.classList.add('subsection-display-block')
  },
  desable: function () {
    this.button.classList.remove('btn-subsection-active')
    this.button.classList.add('btn-subsection-no-active')

    this.containerImgText.classList.remove('container-img-text-active')

    this.pointer.classList.remove('pointer-subsection-active')

    this.sectionImgText.classList.remove('subsection-display-block')
  }

}

const subsectionImac = Object.create(subsectionPrototype)
subsectionImac.button = buttonsSubsection[0]
subsectionImac.containerImgText = containersImgText[0]
subsectionImac.pointer = pointersSubsection[0]
subsectionImac.sectionImgText = subsections[0]

const subsectionPencil = Object.create(subsectionPrototype)
subsectionPencil.button = buttonsSubsection[1]
subsectionPencil.containerImgText = containersImgText[1]
subsectionPencil.pointer = pointersSubsection[1]
subsectionPencil.sectionImgText = subsections[1]

const subsectionLandscape = Object.create(subsectionPrototype)
subsectionLandscape.button = buttonsSubsection[2]
subsectionLandscape.containerImgText = containersImgText[2]
subsectionLandscape.pointer = pointersSubsection[2]
subsectionLandscape.sectionImgText = subsections[2]


function changeSubsection( button){  
  
  if ( button.id === 'btn-subsection-imac') {
    subsectionImac.active()
    subsectionPencil.desable()
    subsectionLandscape.desable()

  } else if (button.id === 'btn-subsection-pencil') {
    subsectionImac.desable()
    subsectionPencil.active()
    subsectionLandscape.desable()    

  } else if (button.id === 'btn-subsection-landscape') {
    subsectionImac.desable()
    subsectionPencil.desable()
    subsectionLandscape.active()    
  }
}



buttonsSubsection.forEach(button => { 
  button.onmouseover = () => {    
    let activeClass = button.classList.contains('btn-subsection-active')
    let onmouseoverClass = button.classList.contains('btn-subsection-on-mouse-over')
    
    if (!activeClass) {
      button.classList.add('btn-subsection-on-mouse-over')
    }
  } 

  button.onmouseout = () => {  
    let activeClass = button.classList.contains('btn-subsection-active')
    let onmouseoverClass = button.classList.contains('btn-subsection-on-mouse-over') 

    if (!activeClass || onmouseoverClass) {
      button.classList.remove('btn-subsection-on-mouse-over')
    }
  }

  button.addEventListener('click', () => {
    changeSubsection(button)
  })
    
})