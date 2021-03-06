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

const imgButtons = document.querySelectorAll('.img-button')
const boxsDiscription = document.querySelectorAll('.div2-section-article div')
const pointersGridNews = document.querySelectorAll('.div3-section-article img')
const gridsNews = document.querySelectorAll('.grid-news')

const sectionOfNews = {
  imgButton: {},
  boxDiscription: {},
  pointerGridNews: {},
  gridNews: {},
  activate: function () {
    this.imgButton.classList.add('img-button-active')
    this.imgButton.classList.remove('img-button-no-active')

    this.boxDiscription.classList.add('box-discription-grid-news-active')

    this.pointerGridNews.classList.add('pointer-grid-news-active')

    this.gridNews.classList.add('grid-news-active')
  },
  disable: function () {
    this.imgButton.classList.remove('img-button-active')
    this.imgButton.classList.add('img-button-no-active')

    this.boxDiscription.classList.remove('box-discription-grid-news-active')

    this.pointerGridNews.classList.remove('pointer-grid-news-active')

    this.gridNews.classList.remove('grid-news-active')
  }

}

const sectionNewsImac = Object.create(sectionOfNews)
sectionNewsImac.imgButton = imgButtons[0]
sectionNewsImac.boxDiscription = boxsDiscription[0]
sectionNewsImac.pointerGridNews = pointersGridNews[0]
sectionNewsImac.gridNews = gridsNews[0]

const sectionNewsPencil = Object.create(sectionOfNews)
sectionNewsPencil.imgButton = imgButtons[1]
sectionNewsPencil.boxDiscription = boxsDiscription[1]
sectionNewsPencil.pointerGridNews = pointersGridNews[1]
sectionNewsPencil.gridNews = gridsNews[1]

const sectionNewsLandscape = Object.create(sectionOfNews)
sectionNewsLandscape.imgButton = imgButtons[2]
sectionNewsLandscape.boxDiscription = boxsDiscription[2]
sectionNewsLandscape.pointerGridNews = pointersGridNews[2]
sectionNewsLandscape.gridNews = gridsNews[2]

function changegridNews (imgButton){   
  if ( imgButton.id === 'img-button-imac') {
    sectionNewsImac.activate()
    sectionNewsPencil.disable()
    sectionNewsLandscape.disable()

  } else if (imgButton.id === 'img-button-pencil') {
    sectionNewsImac.disable()
    sectionNewsPencil.activate()
    sectionNewsLandscape.disable()    

  } else if (imgButton.id === 'img-button-landscape') {
    sectionNewsImac.disable()
    sectionNewsPencil.disable()
    sectionNewsLandscape.activate()    
  }
}

imgButtons.forEach(imgButton => { 
  imgButton.onmouseover = () => {    
    let activeClass = imgButton.classList.contains('img-button-active')
    let onmouseoverClass = imgButton.classList.contains('img-button-onmouseover')
    
    if (!activeClass) {
      imgButton.classList.add('img-button-onmouseover')
    }
  } 

  imgButton.onmouseout = () => {  
    let activeClass = imgButton.classList.contains('img-button-active')
    let onmouseoverClass = imgButton.classList.contains('img-button-onmouseover') 

    if (!activeClass || onmouseoverClass) {
      imgButton.classList.remove('img-button-onmouseover')
    }
  }

  imgButton.addEventListener('click', () => {
    changegridNews(imgButton)
  })
    
})