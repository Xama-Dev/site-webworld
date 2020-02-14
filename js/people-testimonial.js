const peoplePictures = document.querySelectorAll('.people-pictures img')
const pointersTestimonial = document.querySelectorAll('.pointers-testimonial p')
const boxsTestimonial = document.querySelectorAll('.box-testimonial')
const peopleTestimonialCollection = []

const peopleTestimonialPrototype = {
    picture: {},
    pointer: {},
    boxTestimonial: {},
    active: function () {
        this.picture.classList.add ('picture-active')
        this.pointer.classList.add('pointer-active')
        this.boxTestimonial.classList.add('box-testimonial-active')
    },
    disable: function () {
        this.picture.classList.remove ('picture-active')
        this.pointer.classList.remove('pointer-active')
        this.boxTestimonial.classList.remove('box-testimonial-active')        
    }
}

const peopleTestimonial1 = Object.create(peopleTestimonialPrototype)
peopleTestimonial1.picture = peoplePictures[0]
peopleTestimonial1.pointer = pointersTestimonial[0]
peopleTestimonial1.boxTestimonial = boxsTestimonial[0]

const peopleTestimonial2 = Object.create(peopleTestimonialPrototype)
peopleTestimonial2.picture = peoplePictures[1]
peopleTestimonial2.pointer = pointersTestimonial[1]
peopleTestimonial2.boxTestimonial = boxsTestimonial[1]

const peopleTestimonial3 = Object.create(peopleTestimonialPrototype)
peopleTestimonial3.picture = peoplePictures[2]
peopleTestimonial3.pointer = pointersTestimonial[2]
peopleTestimonial3.boxTestimonial = boxsTestimonial[2]

const peopleTestimonial4 = Object.create(peopleTestimonialPrototype)
peopleTestimonial4.picture = peoplePictures[3]
peopleTestimonial4.pointer = pointersTestimonial[3]
peopleTestimonial4.boxTestimonial = boxsTestimonial[3]

const peopleTestimonial5 = Object.create(peopleTestimonialPrototype)
peopleTestimonial5.picture = peoplePictures[4]
peopleTestimonial5.pointer = pointersTestimonial[4]
peopleTestimonial5.boxTestimonial = boxsTestimonial[4]

peopleTestimonialCollection.push(
    peopleTestimonial1,
    peopleTestimonial2,
    peopleTestimonial3,
    peopleTestimonial4,
    peopleTestimonial5
)

function changeTestimonial (peopleTestimonial) {   
    const peopleTestimonialActive = peopleTestimonialCollection.filter(function (peopleTestimonial) {
        return peopleTestimonial.boxTestimonial.classList.contains('box-testimonial-active')
    })
    
    peopleTestimonial.active()
    peopleTestimonialActive[0].disable()
}

peopleTestimonialCollection.forEach((peopleTestimonial) => {    
    peopleTestimonial.picture.addEventListener('click', () => {
        changeTestimonial(peopleTestimonial)
    })
})




