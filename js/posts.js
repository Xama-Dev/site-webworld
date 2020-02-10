$(document).ready(function () {
    $('.container-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        speed: 200,
        arrows: true,
        pauseOnFocus: false,
        pauseOnDotsHover: true
    });
});

const linkChangePostCollection = []

const linkPrevius = {
    link: document.getElementById("link-previus-blog"),
    arrowIcon: document.getElementById("little-arrow-previus-blog"),
    label: document.getElementById("p-share-previus"),
    active: function () {
        this.arrowIcon.classList.add('little-arrow-active')
        this.label.classList.add('label-active')
    },
    disable: function () {
        this.arrowIcon.classList.remove('little-arrow-active')
        this.label.classList.remove('label-active')
    }
}

const linkNext = {
    link: document.getElementById("link-next-blog"),
    arrowIcon: document.getElementById("little-arrow-next-blog"),
    label: document.getElementById("p-share-next"),
    active: function () {
        this.arrowIcon.classList.add('little-arrow-active')
        this.label.classList.add('label-active')
    },
    disable: function () {
        this.arrowIcon.classList.remove('little-arrow-active')
        this.label.classList.remove('label-active')
    }
}

linkChangePostCollection.push(
    linkPrevius,
    linkNext
)

linkChangePostCollection.forEach((linkChange) => {
    linkChange.link.onmouseover = () => {
        linkChange.active()
    }

    linkChange.link.onmouseout = () => {
        linkChange.disable()
    }

})