const links = document.querySelectorAll('.a-menu')
const liMenuCollection = document.querySelectorAll('.li-menu')
const menuDropDown = document.getElementById('submenu-pages')


links.forEach((link, index) => {
    if (link.id === 'a-pages') {
        link.onmouseover = () => {
            link.classList.add('link-active')
            liMenuCollection[index].classList.add('li-active')
            menuDropDown.classList.add('submenu-pages-active')
        }

        link.onmouseout = () => {
            link.classList.remove('link-active')
            liMenuCollection[index].classList.remove('li-active')
            menuDropDown.classList.remove('submenu-pages-active')
        }

        menuDropDown.onmouseover = () => {            
            link.classList.add('link-active')
            liMenuCollection[index].classList.add('li-active')
            menuDropDown.classList.add('submenu-pages-active')
        }

        menuDropDown.onmouseout = () => {
            link.classList.remove('link-active')
            liMenuCollection[index].classList.remove('li-active')
            menuDropDown.classList.remove('submenu-pages-active')
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