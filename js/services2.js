const linksGridServices = document.querySelectorAll('.box-link') 
const iconsGridServices = document.querySelectorAll('.icon-service')
const headersGridServices = document.querySelectorAll('.box-link h1')
const paragraphsGridServices = document.querySelectorAll('.box-link p')
const pointersGridServices = document.querySelectorAll('.pointer-right, .pointer-left, .pointer-down')
const boxsLink = []

const boxLinkPrototype = {
    link: {},
    icon: {},
    header: {},
    paragraph: {},
    pointer: {},
    activate: function () {
        this.link.classList.add('link-container-active')
        this.icon.classList.add('icon-box-link-active')
        this.header.classList.add('header-box-link-active')
        this.paragraph.classList.add('paragraph-box-link-active')
        this.pointer.classList.add('pointer-box-link-active')
    },
    disable: function () {
        this.link.classList.remove('link-container-active')
        this.icon.classList.remove('icon-box-link-active')
        this.header.classList.remove('header-box-link-active')
        this.paragraph.classList.remove('paragraph-box-link-active')
        this.pointer.classList.remove('pointer-box-link-active')

    }    
}

const boxLink1 = Object.create(boxLinkPrototype)
boxLink1.link = linksGridServices[0]
boxLink1.icon = iconsGridServices[0]
boxLink1.header = headersGridServices[0]
boxLink1.paragraph = paragraphsGridServices[0]
boxLink1.pointer = pointersGridServices[0]

const boxLink2 = Object.create(boxLinkPrototype)
boxLink2.link = linksGridServices[1]
boxLink2.icon = iconsGridServices[1]
boxLink2.header = headersGridServices[1]
boxLink2.paragraph = paragraphsGridServices[1]
boxLink2.pointer = pointersGridServices[1]

const boxLink3 = Object.create(boxLinkPrototype)
boxLink3.link = linksGridServices[2]
boxLink3.icon = iconsGridServices[2]
boxLink3.header = headersGridServices[2]
boxLink3.paragraph = paragraphsGridServices[2]
boxLink3.pointer = pointersGridServices[2]

const boxLink4 = Object.create(boxLinkPrototype)
boxLink4.link = linksGridServices[3]
boxLink4.icon = iconsGridServices[3]
boxLink4.header = headersGridServices[3]
boxLink4.paragraph = paragraphsGridServices[3]
boxLink4.pointer = pointersGridServices[3]

const boxLink5 = Object.create(boxLinkPrototype)
boxLink5.link = linksGridServices[4]
boxLink5.icon = iconsGridServices[4]
boxLink5.header = headersGridServices[4]
boxLink5.paragraph = paragraphsGridServices[4]
boxLink5.pointer = pointersGridServices[4]

const boxLink6 = Object.create(boxLinkPrototype)
boxLink6.link = linksGridServices[5]
boxLink6.icon = iconsGridServices[5]
boxLink6.header = headersGridServices[5]
boxLink6.paragraph = paragraphsGridServices[5]
boxLink6.pointer = pointersGridServices[5]

boxsLink.push(
    boxLink1,
    boxLink2,
    boxLink3,
    boxLink4,
    boxLink5,
    boxLink6
)

boxsLink.forEach((boxLink) => {
    boxLink.link.onmouseover = () => {
        boxLink.activate()
    }

    boxLink.link.onmouseout = () => {
        boxLink.disable()
    }
})