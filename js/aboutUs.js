/*colori pictures no onmouseover secao 3*/
var picture1Desligado = true;
var picture2Desligado = true;
var picture3Desligado = false;
var picture4Desligado = true;
var picture5Desligado = true;

document.getElementById("picture1").onmouseover = function () {
    document.getElementById("picture1").style.cursor = "pointer";
    if (picture1Desligado) {
        document.getElementById("picture1").style.filter = "none";
    }
}
document.getElementById("picture1").onmouseout = function () {
    if (picture1Desligado) {
        document.getElementById("picture1").style.filter = "grayscale(100%)";
    }
}
document.getElementById("picture2").onmouseover = function () {
    document.getElementById("picture2").style.cursor = "pointer";
    if (picture2Desligado) {
        document.getElementById("picture2").style.filter = "none";
    }
}
document.getElementById("picture2").onmouseout = function () {
    if (picture2Desligado) {
        document.getElementById("picture2").style.filter = "grayscale(100%)";
    }
}

document.getElementById("picture3").onmouseover = function () {
    document.getElementById("picture3").style.cursor = "pointer";
    if (picture3Desligado) {
        document.getElementById("picture3").style.filter = "none";
    }
}
document.getElementById("picture3").onmouseout = function () {
    if (picture3Desligado) {
        document.getElementById("picture3").style.filter = "grayscale(100%)";
    }

}
document.getElementById("picture4").onmouseover = function () {
    document.getElementById("picture4").style.cursor = "pointer";
    if (picture4Desligado) {
        document.getElementById("picture4").style.filter = "none";
    }
}
document.getElementById("picture4").onmouseout = function () {
    if (picture4Desligado) {
        document.getElementById("picture4").style.filter = "grayscale(100%)";
    }
}
document.getElementById("picture5").onmouseover = function () {
    document.getElementById("picture5").style.cursor = "pointer";
    if (picture5Desligado) {
        document.getElementById("picture5").style.filter = "none";
    }
}
document.getElementById("picture5").onmouseout = function () {
    if (picture5Desligado) {
        document.getElementById("picture5").style.filter = "grayscale(100%)";
    }
}



/*Troca box de depoimento secao 3*/
document.getElementById("picture1").onclick = function () {
    picture1Desligado = false;
    picture2Desligado = true;
    picture3Desligado = true;
    picture4Desligado = true;
    picture5Desligado = true;

    document.getElementById("box-testimonial1").style.display = "block";
    document.getElementById("box-testimonial2").style.display = "none";
    document.getElementById("box-testimonial3").style.display = "none";
    document.getElementById("box-testimonial4").style.display = "none";
    document.getElementById("box-testimonial5").style.display = "none";

    document.getElementById("picture1").style.filter = "none";
    document.getElementById("picture2").style.filter = "grayscale(100%)";
    document.getElementById("picture3").style.filter = "grayscale(100%)";
    document.getElementById("picture4").style.filter = "grayscale(100%)";
    document.getElementById("picture5").style.filter = "grayscale(100%)";

    document.getElementById("pictures-section3").style.marginLeft = "25%";
}

document.getElementById("picture2").onclick = function () {
    picture1Desligado = true;
    picture2Desligado = false;
    picture3Desligado = true;
    picture4Desligado = true;
    picture5Desligado = true;

    document.getElementById("box-testimonial1").style.display = "none";
    document.getElementById("box-testimonial2").style.display = "block";
    document.getElementById("box-testimonial3").style.display = "none";
    document.getElementById("box-testimonial4").style.display = "none";
    document.getElementById("box-testimonial5").style.display = "none";

    document.getElementById("picture1").style.filter = "grayscale(100%)";
    document.getElementById("picture2").style.filter = "none";
    document.getElementById("picture3").style.filter = "grayscale(100%)";
    document.getElementById("picture4").style.filter = "grayscale(100%)";
    document.getElementById("picture5").style.filter = "grayscale(100%)";

    document.getElementById("pictures-section3").style.marginLeft = "37%";
}

document.getElementById("picture3").onclick = function () {
    picture1Desligado = true;
    picture2Desligado = true;
    picture3Desligado = false;
    picture4Desligado = true;
    picture5Desligado = true;

    document.getElementById("box-testimonial1").style.display = "none";
    document.getElementById("box-testimonial2").style.display = "none";
    document.getElementById("box-testimonial3").style.display = "block";
    document.getElementById("box-testimonial4").style.display = "none";
    document.getElementById("box-testimonial5").style.display = "none";

    document.getElementById("picture1").style.filter = "grayscale(100%)";
    document.getElementById("picture2").style.filter = "grayscale(100%)";
    document.getElementById("picture3").style.filter = "none";
    document.getElementById("picture4").style.filter = "grayscale(100%)";
    document.getElementById("picture5").style.filter = "grayscale(100%)";
    document.getElementById("pictures-section3").style.marginLeft = "49%";
}

document.getElementById("picture4").onclick = function () {
    picture1Desligado = true;
    picture2Desligado = true;
    picture3Desligado = true;
    picture4Desligado = false;
    picture5Desligado = true;

    document.getElementById("box-testimonial1").style.display = "none";
    document.getElementById("box-testimonial2").style.display = "none";
    document.getElementById("box-testimonial3").style.display = "none";
    document.getElementById("box-testimonial4").style.display = "block";
    document.getElementById("box-testimonial5").style.display = "none";

    document.getElementById("picture1").style.filter = "grayscale(100%)";
    document.getElementById("picture2").style.filter = "grayscale(100%)";
    document.getElementById("picture3").style.filter = "grayscale(100%)";
    document.getElementById("picture4").style.filter = "none";
    document.getElementById("picture5").style.filter = "grayscale(100%)";

    document.getElementById("pictures-section3").style.marginLeft = "60%";
}

document.getElementById("picture5").onclick = function () {
    picture1Desligado = true;
    picture2Desligado = true;
    picture3Desligado = true;
    picture4Desligado = true;
    picture5Desligado = false;

    document.getElementById("box-testimonial1").style.display = "none";
    document.getElementById("box-testimonial2").style.display = "none";
    document.getElementById("box-testimonial3").style.display = "none";
    document.getElementById("box-testimonial4").style.display = "none";
    document.getElementById("box-testimonial5").style.display = "block";

    document.getElementById("picture1").style.filter = "grayscale(100%)";
    document.getElementById("picture2").style.filter = "grayscale(100%)";
    document.getElementById("picture3").style.filter = "grayscale(100%)";
    document.getElementById("picture4").style.filter = "grayscale(100%)";
    document.getElementById("picture5").style.filter = "none";

    document.getElementById("pictures-section3").style.marginLeft = "72%";
}