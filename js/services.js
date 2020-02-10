const boxLinkCollection = []
const linksMosaicServices = document.querySelectorAll('.link-container')
const icons = document.querySelectorAll('.box-link-icon')
const headers = document.querySelectorAll('.box-link-header')
const paragraphs = document.querySelectorAll('.p-services')
const pointersBlue = document.querySelectorAll('.box-link-pointer-blue')
const pointersWhite = document.querySelectorAll('.box-link-pointer-white')


const boxLinkPrototype = {
    link: {},
    icon: {},
    header: {},
    paragraph: {},
    pointerBlue: {},
    pointerWhite:{},
    active: function () {
        this.link.classList.add('link-container-active')
        this.icon.classList.add('icon-active')
        this.header.classList.add('header-active')
        this.paragraph.classList.add('p-active')
        this.pointerBlue.classList.add('pointer-active')
        this.pointerWhite.classList.add('pointer-no-active')

    },
    diseble: function () {
        this.link.classList.remove('link-container-active')
        this.icon.classList.remove('icon-active')
        this.header.classList.remove('header-active')
        this.paragraph.classList.remove('p-active')
        this.pointerBlue.classList.remove('pointer-active')
        this.pointerWhite.classList.remove('pointer-no-active')

    }
}

const boxLink1 = Object.create(boxLinkPrototype)
boxLink1.link = linksMosaicServices[0]
boxLink1.icon = icons[0]
boxLink1.paragraph = paragraphs[0]
boxLink1.header = headers[0]
boxLink1.pointerBlue = pointersBlue[0]
boxLink1.pointerWhite = pointersWhite[0]

const boxLink2 = Object.create(boxLinkPrototype)
boxLink2.link = linksMosaicServices[1]
boxLink2.icon = icons[1]
boxLink2.header = headers[1]
boxLink2.paragraph = paragraphs[1]
boxLink2.pointerBlue = pointersBlue[1]
boxLink2.pointerWhite = pointersWhite[1]

const boxLink3 = Object.create(boxLinkPrototype)
boxLink3.link = linksMosaicServices[2]
boxLink3.icon = icons[2]
boxLink3.header = headers[2]
boxLink3.paragraph = paragraphs[2]
boxLink3.pointerBlue = pointersBlue[2]
boxLink3.pointerWhite = pointersWhite[2]

const boxLink4 = Object.create(boxLinkPrototype)
boxLink4.link = linksMosaicServices[3]
boxLink4.icon = icons[3]
boxLink4.header = headers[3]
boxLink4.paragraph = paragraphs[3]
boxLink4.pointerBlue = pointersBlue[3]
boxLink4.pointerWhite = pointersWhite[3]

const boxLink5 = Object.create(boxLinkPrototype)
boxLink5.link = linksMosaicServices[4]
boxLink5.icon = icons[4]
boxLink5.header = headers[4]
boxLink5.paragraph = paragraphs[4]
boxLink5.pointerBlue = pointersBlue[4]
boxLink5.pointerWhite = pointersWhite[4]

const boxLink6 = Object.create(boxLinkPrototype)
boxLink6.link = linksMosaicServices[5]
boxLink6.icon = icons[5]
boxLink6.header = headers[5]
boxLink6.paragraph = paragraphs[5]
boxLink6.pointerBlue = pointersBlue[5]
boxLink6.pointerWhite = pointersWhite[5]

boxLinkCollection.push(
    boxLink1,
    boxLink2,
    boxLink3,
    boxLink4,
    boxLink5,
    boxLink6
)

boxLinkCollection.forEach((boxLink) => {
    boxLink.link.onmouseover = () => {
        boxLink.active()
    }

    boxLink.link.onmouseout = () => {
        boxLink.diseble()
    }

})