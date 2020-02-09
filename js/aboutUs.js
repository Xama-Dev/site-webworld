const pictures = document.querySelectorAll('.pictures-section3')
const boxTestimonials = document.querySelectorAll('.box-testimonial')
const pointerEmployee = document.getElementById('pictures-section3')
const boxTestimonialColection = []


const boxTestimonialPrototype = {
    picture: {},
    boxTestimonial: {},
    positionPointerEmployee: null,
    isActive: function () {
        return this.boxTestimonial.classList.contains('box-testimonial-active')
    },
    activate: function () {
        this.picture.classList.remove('picture-no-active')
        this.picture.classList.add('picture-active')

        this.boxTestimonial.classList.remove('box-testimonial-no-active')
        this.boxTestimonial.classList.add('box-testimonial-active')
    },
    disable: function () {
        this.picture.classList.add('picture-no-active')
        this.picture.classList.remove('picture-active')

        this.boxTestimonial.classList.add('box-testimonial-no-active')
        this.boxTestimonial.classList.remove('box-testimonial-active')
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

boxTestimonialColection.push (
    boxTestimonial1, 
    boxTestimonial2,
    boxTestimonial3,
    boxTestimonial4,
    boxTestimonial5
)


function changeBoxTestimonial (picture) {    
    boxTestimonialColection.forEach( (boxTestimonial) => {
        if (boxTestimonial.isActive() === true) {
            boxTestimonial.disable()
        }        
    })


    if (picture.id === 'picture1'){
        boxTestimonial1.activate()         
        pointerEmployee.style.marginLeft = boxTestimonial1.pointerEmployee;

    }else if (picture.id === 'picture2'){
        boxTestimonial2.activate()        
        pointerEmployee.style.marginLeft = boxTestimonial2.pointerEmployee;

    }else if (picture.id === 'picture3'){
        boxTestimonial3.activate()
        pointerEmployee.style.marginLeft = boxTestimonial3.pointerEmployee;

    }else if (picture.id === 'picture4'){
        boxTestimonial4.activate()
        pointerEmployee.style.marginLeft = boxTestimonial4.pointerEmployee;
        
    }else if (picture.id === 'picture5'){
        boxTestimonial5.activate()
        pointerEmployee.style.marginLeft = boxTestimonial5.pointerEmployee;        
    }
}


boxTestimonialColection.forEach((boxTestimonial) =>{
    boxTestimonial.picture.onmouseover = () => {
        boxTestimonial.picture.classList.remove('picture-no-active')

    }
    boxTestimonial.picture.onmouseout = () => {
        boxTestimonial.picture.classList.add('picture-no-active')
    }

    boxTestimonial.picture.addEventListener('click', () => {
        changeBoxTestimonial(boxTestimonial.picture)
    })
})

