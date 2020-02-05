const pictures = document.querySelectorAll('.pictures-section3')
const boxTestimonials = document.querySelectorAll('.box-testimonial')
let pointerEmployee = document.getElementById('pictures-section3')
const boxTestimonialColection = []


const boxTestimonialPrototype = {
    picture: {},
    boxTestimonial: {},
    positionPointerEmployee: null,
    active: function () {
        this.picture.classList.remove('picture-no-active')
        this.picture.classList.add('picture-active')

        this.boxTestimonial.classList.remove('box-testimonial-no-active')

    },
    desable: function () {
        this.picture.classList.add('picture-no-active')
        this.picture.classList.remove('picture-active')

        this.boxTestimonial.classList.add('box-testimonial-no-active')
    }
}

const boxTestimonial1 = Object.create(boxTestimonialPrototype)
boxTestimonial1.picture = pictures[0]
boxTestimonial1.boxTestimonial = boxTestimonials[0]
boxTestimonial1.pointerEmployee = '25%'

const boxTestimonial2 = Object.create(boxTestimonialPrototype)
boxTestimonial2.picture = pictures[1]
boxTestimonial2.boxTestimonial = boxTestimonials[1]
boxTestimonial2.pointerEmployee = '37%'

const boxTestimonial3 = Object.create(boxTestimonialPrototype)
boxTestimonial3.picture = pictures[2]
boxTestimonial3.boxTestimonial = boxTestimonials[2]
boxTestimonial3.pointerEmployee = '49%'

const boxTestimonial4 = Object.create(boxTestimonialPrototype)
boxTestimonial4.picture = pictures[3]
boxTestimonial4.boxTestimonial = boxTestimonials[3]
boxTestimonial4.pointerEmployee = '60%'

const boxTestimonial5 = Object.create(boxTestimonialPrototype)
boxTestimonial5.picture = pictures[4]
boxTestimonial5.boxTestimonial = boxTestimonials[4]
boxTestimonial5.pointerEmployee = '72%'


function changeBoxTestimonial (picture) {
    if (picture.id === 'picture1'){
        boxTestimonial1.active()
        boxTestimonial2.desable()
        boxTestimonial3.desable()
        boxTestimonial4.desable()
        boxTestimonial5.desable() 
        document.getElementById('pictures-section3').style.marginLeft = boxTestimonial1.pointerEmployee;

    }else if (picture.id === 'picture2'){
        boxTestimonial1.desable()
        boxTestimonial2.active()
        boxTestimonial3.desable()
        boxTestimonial4.desable()
        boxTestimonial5.desable()
        document.getElementById('pictures-section3').style.marginLeft = boxTestimonial2.pointerEmployee;

    }else if (picture.id === 'picture3'){
        boxTestimonial1.desable()
        boxTestimonial2.desable()
        boxTestimonial3.active()
        boxTestimonial4.desable()
        boxTestimonial5.desable()
        document.getElementById('pictures-section3').style.marginLeft = boxTestimonial3.pointerEmployee;

    }else if (picture.id === 'picture4'){
        boxTestimonial1.desable()
        boxTestimonial2.desable()
        boxTestimonial3.desable()
        boxTestimonial4.active()
        boxTestimonial5.desable()
        document.getElementById('pictures-section3').style.marginLeft = boxTestimonial4.pointerEmployee;
        
    }else if (picture.id === 'picture5'){
        boxTestimonial1.desable()
        boxTestimonial2.desable()
        boxTestimonial3.desable()
        boxTestimonial4.desable()
        boxTestimonial5.active()
        document.getElementById('pictures-section3').style.marginLeft = boxTestimonial5.pointerEmployee;
        
    }
}

pictures.forEach((picture) =>{
    picture.onmouseover = function () {
        picture.classList.remove('picture-no-active')
    }
    picture.onmouseout = function () {
        picture.classList.add('picture-no-active')
    }

    picture.addEventListener('click', function(){
        changeBoxTestimonial(picture)
    })

})
