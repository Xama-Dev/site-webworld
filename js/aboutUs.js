/*colori pictures no onmouseover secao 3 box de depoimentos*/
var picture1Off = true;
var picture2Off = true;
var picture3Off = false;
var picture4Off = true;
var picture5Off = true;

var picture1 = document.getElementById("picture1");
var picture2 = document.getElementById("picture2");
var picture3 = document.getElementById("picture3");
var picture4 = document.getElementById("picture4");
var picture5 = document.getElementById("picture5");




picture1.onmouseover = function () {
    picture1.style.cursor = "pointer";
    if (picture1Off) {
        picture1.style.filter = "none";
    }
}
picture1.onmouseout = function () {
    if (picture1Off) {
        picture1.style.filter = "grayscale(100%)";
    }
}
picture2.onmouseover = function () {
    picture2.style.cursor = "pointer";
    if (picture2Off) {
        picture2.style.filter = "none";
    }
}
picture2.onmouseout = function () {
    if (picture2Off) {
        picture2.style.filter = "grayscale(100%)";
    }
}

picture3.onmouseover = function () {
    picture3.style.cursor = "pointer";
    if (picture3Off) {
        picture3.style.filter = "none";
    }
}
picture3.onmouseout = function () {
    if (picture3Off) {
        picture3.style.filter = "grayscale(100%)";
    }

}
picture4.onmouseover = function () {
    picture4.style.cursor = "pointer";
    if (picture4Off) {
        picture4.style.filter = "none";
    }
}
picture4.onmouseout = function () {
    if (picture4Off) {
        picture4.style.filter = "grayscale(100%)";
    }
}
picture5.onmouseover = function () {
    picture5.style.cursor = "pointer";
    if (picture5Off) {
        picture5.style.filter = "none";
    }
}
picture5.onmouseout = function () {
    if (picture5Off) {
        picture5.style.filter = "grayscale(100%)";
    }
}



/*Troca box de depoimento secao 3*/
var boxTestimonial1 = document.getElementById("box-testimonial1");
var boxTestimonial2 = document.getElementById("box-testimonial2");
var boxTestimonial3 = document.getElementById("box-testimonial3");
var boxTestimonial4 = document.getElementById("box-testimonial4");
var boxTestimonial5 = document.getElementById("box-testimonial5");

picture1.onclick = function () {
    picture1Off = false;
    picture2Off = true;
    picture3Off = true;
    picture4Off = true;
    picture5Off = true;

    boxTestimonial1.style.display = "block";
    boxTestimonial2.style.display = "none";
    boxTestimonial3.style.display = "none";
    boxTestimonial4.style.display = "none";
    boxTestimonial5.style.display = "none";

    picture1.style.filter = "none";
    picture2.style.filter = "grayscale(100%)";
    picture3.style.filter = "grayscale(100%)";
    picture4.style.filter = "grayscale(100%)";
    picture5.style.filter = "grayscale(100%)";

    document.getElementById("pictures-section3").style.marginLeft = "25%";
}

picture2.onclick = function () {
    picture1Off = true;
    picture2Off = false;
    picture3Off = true;
    picture4Off = true;
    picture5Off = true;

    boxTestimonial1.style.display = "none";
    boxTestimonial2.style.display = "block";
    boxTestimonial3.style.display = "none";
    boxTestimonial4.style.display = "none";
    boxTestimonial5.style.display = "none";

    picture1.style.filter = "grayscale(100%)";
    picture2.style.filter = "none";
    picture3.style.filter = "grayscale(100%)";
    picture4.style.filter = "grayscale(100%)";
    picture5.style.filter = "grayscale(100%)";

    document.getElementById("pictures-section3").style.marginLeft = "37%";
}

picture3.onclick = function () {
    picture1Off = true;
    picture2Off = true;
    picture3Off = false;
    picture4Off = true;
    picture5Off = true;

    boxTestimonial1.style.display = "none";
    boxTestimonial2.style.display = "none";
    boxTestimonial3.style.display = "block";
    boxTestimonial4.style.display = "none";
    boxTestimonial5.style.display = "none";

    picture1.style.filter = "grayscale(100%)";
    picture2.style.filter = "grayscale(100%)";
    picture3.style.filter = "none";
    picture4.style.filter = "grayscale(100%)";
    picture5.style.filter = "grayscale(100%)";
    document.getElementById("pictures-section3").style.marginLeft = "49%";
}

picture4.onclick = function () {
    picture1Off = true;
    picture2Off = true;
    picture3Off = true;
    picture4Off = false;
    picture5Off = true;

    boxTestimonial1.style.display = "none";
    boxTestimonial2.style.display = "none";
    boxTestimonial3.style.display = "none";
    boxTestimonial4.style.display = "block";
    boxTestimonial5.style.display = "none";

    picture1.style.filter = "grayscale(100%)";
    picture2.style.filter = "grayscale(100%)";
    picture3.style.filter = "grayscale(100%)";
    picture4.style.filter = "none";
    picture5.style.filter = "grayscale(100%)";

    document.getElementById("pictures-section3").style.marginLeft = "60%";
}

picture5.onclick = function () {
    picture1Off = true;
    picture2Off = true;
    picture3Off = true;
    picture4Off = true;
    picture5Off = false;

    boxTestimonial1.style.display = "none";
    boxTestimonial2.style.display = "none";
    boxTestimonial3.style.display = "none";
    boxTestimonial4.style.display = "none";
    boxTestimonial5.style.display = "block";

    picture1.style.filter = "grayscale(100%)";
    picture2.style.filter = "grayscale(100%)";
    picture3.style.filter = "grayscale(100%)";
    picture4.style.filter = "grayscale(100%)";
    picture5.style.filter = "none";

    document.getElementById("pictures-section3").style.marginLeft = "72%";
}