const linksMenuNavigation = document.querySelectorAll('.menu > li > a')
const liMenuCollection = document.querySelectorAll('.menu > li')
const menuDropDown = document.querySelectorAll('.menu-drop-down')

linksMenuNavigation.forEach((link, index) => {
    if (link.id === 'link-pages') {
        link.onmouseover = () => {
            link.classList.add('link-active')
            liMenuCollection[index].classList.add('li-active')
            menuDropDown[0].classList.add('menu-drop-down-active')
        }

        link.onmouseout = () => {
            link.classList.remove('link-active')
            liMenuCollection[index].classList.remove('li-active')
            menuDropDown[0].classList.remove('menu-drop-down-active')
        }

        menuDropDown[0].onmouseover = () => {            
            link.classList.add('link-active')
            liMenuCollection[index].classList.add('li-active')
            menuDropDown[0].classList.add('menu-drop-down-active')
        }

        menuDropDown[0].onmouseout = () => {
            link.classList.remove('link-active')
            liMenuCollection[index].classList.remove('li-active')
            menuDropDown[0].classList.remove('menu-drop-down-active')
        }

    } else {
        link.onmouseover = () => {
            link.classList.add('link-active')
            liMenuCollection[index].classList.add('li-active')
        }

        link.onmouseout = () => {
            link.classList.remove('link-active')
            liMenuCollection[index].classList.remove('li-active')
        }
    }
})