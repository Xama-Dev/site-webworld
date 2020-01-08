/*colori fotos no onmouseover secao 2*/
var foto1Desligado = true;
var foto2Desligado = true;
var foto3Desligado = false;
var foto4Desligado = true;
var foto5Desligado = true;

document.getElementById("foto1").onmouseover = function () {
    document.getElementById("foto1").style.cursor = "pointer";
    if (foto1Desligado) {
        document.getElementById("foto1").style.filter = "none";
    }
}
document.getElementById("foto1").onmouseout = function () {
    if (foto1Desligado) {
        document.getElementById("foto1").style.filter = "grayscale(100%)";
    }
}
document.getElementById("foto2").onmouseover = function () {
    document.getElementById("foto2").style.cursor = "pointer";
    if (foto2Desligado) {
        document.getElementById("foto2").style.filter = "none";
    }
}
document.getElementById("foto2").onmouseout = function () {
    if (foto2Desligado) {
        document.getElementById("foto2").style.filter = "grayscale(100%)";
    }
}

document.getElementById("foto3").onmouseover = function () {
    document.getElementById("foto3").style.cursor = "pointer";
    if (foto3Desligado) {
        document.getElementById("foto3").style.filter = "none";
    }
}
document.getElementById("foto3").onmouseout = function () {
    if (foto3Desligado) {
        document.getElementById("foto3").style.filter = "grayscale(100%)";
    }

}
document.getElementById("foto4").onmouseover = function () {
    document.getElementById("foto4").style.cursor = "pointer";
    if (foto4Desligado) {
        document.getElementById("foto4").style.filter = "none";
    }
}
document.getElementById("foto4").onmouseout = function () {
    if (foto4Desligado) {
        document.getElementById("foto4").style.filter = "grayscale(100%)";
    }
}
document.getElementById("foto5").onmouseover = function () {
    document.getElementById("foto5").style.cursor = "pointer";
    if (foto5Desligado) {
        document.getElementById("foto5").style.filter = "none";
    }
}
document.getElementById("foto5").onmouseout = function () {
    if (foto5Desligado) {
        document.getElementById("foto5").style.filter = "grayscale(100%)";
    }
}



/*Troca box de depoimento clientes secao 2*/
document.getElementById("foto1").onclick = function () {
    foto1Desligado = false;
    foto2Desligado = true;
    foto3Desligado = true;
    foto4Desligado = true;
    foto5Desligado = true;

    document.getElementById("box-depoimento1").style.display = "block";
    document.getElementById("box-depoimento2").style.display = "none";
    document.getElementById("box-depoimento3").style.display = "none";
    document.getElementById("box-depoimento4").style.display = "none";
    document.getElementById("box-depoimento5").style.display = "none";

    document.getElementById("foto1").style.filter = "none";
    document.getElementById("foto2").style.filter = "grayscale(100%)";
    document.getElementById("foto3").style.filter = "grayscale(100%)";
    document.getElementById("foto4").style.filter = "grayscale(100%)";
    document.getElementById("foto5").style.filter = "grayscale(100%)";

    document.getElementById("indicador-funcionario").style.marginLeft = "25%";
}

document.getElementById("foto2").onclick = function () {
    foto1Desligado = true;
    foto2Desligado = false;
    foto3Desligado = true;
    foto4Desligado = true;
    foto5Desligado = true;

    document.getElementById("box-depoimento1").style.display = "none";
    document.getElementById("box-depoimento2").style.display = "block";
    document.getElementById("box-depoimento3").style.display = "none";
    document.getElementById("box-depoimento4").style.display = "none";
    document.getElementById("box-depoimento5").style.display = "none";

    document.getElementById("foto1").style.filter = "grayscale(100%)";
    document.getElementById("foto2").style.filter = "none";
    document.getElementById("foto3").style.filter = "grayscale(100%)";
    document.getElementById("foto4").style.filter = "grayscale(100%)";
    document.getElementById("foto5").style.filter = "grayscale(100%)";

    document.getElementById("indicador-funcionario").style.marginLeft = "37%";
}

document.getElementById("foto3").onclick = function () {
    foto1Desligado = true;
    foto2Desligado = true;
    foto3Desligado = false;
    foto4Desligado = true;
    foto5Desligado = true;

    document.getElementById("box-depoimento1").style.display = "none";
    document.getElementById("box-depoimento2").style.display = "none";
    document.getElementById("box-depoimento3").style.display = "block";
    document.getElementById("box-depoimento4").style.display = "none";
    document.getElementById("box-depoimento5").style.display = "none";

    document.getElementById("foto1").style.filter = "grayscale(100%)";
    document.getElementById("foto2").style.filter = "grayscale(100%)";
    document.getElementById("foto3").style.filter = "none";
    document.getElementById("foto4").style.filter = "grayscale(100%)";
    document.getElementById("foto5").style.filter = "grayscale(100%)";
    document.getElementById("indicador-funcionario").style.marginLeft = "49%";
}

document.getElementById("foto4").onclick = function () {
    foto1Desligado = true;
    foto2Desligado = true;
    foto3Desligado = true;
    foto4Desligado = false;
    foto5Desligado = true;

    document.getElementById("box-depoimento1").style.display = "none";
    document.getElementById("box-depoimento2").style.display = "none";
    document.getElementById("box-depoimento3").style.display = "none";
    document.getElementById("box-depoimento4").style.display = "block";
    document.getElementById("box-depoimento5").style.display = "none";

    document.getElementById("foto1").style.filter = "grayscale(100%)";
    document.getElementById("foto2").style.filter = "grayscale(100%)";
    document.getElementById("foto3").style.filter = "grayscale(100%)";
    document.getElementById("foto4").style.filter = "none";
    document.getElementById("foto5").style.filter = "grayscale(100%)";

    document.getElementById("indicador-funcionario").style.marginLeft = "60%";
}

document.getElementById("foto5").onclick = function () {
    foto1Desligado = true;
    foto2Desligado = true;
    foto3Desligado = true;
    foto4Desligado = true;
    foto5Desligado = false;

    document.getElementById("box-depoimento1").style.display = "none";
    document.getElementById("box-depoimento2").style.display = "none";
    document.getElementById("box-depoimento3").style.display = "none";
    document.getElementById("box-depoimento4").style.display = "none";
    document.getElementById("box-depoimento5").style.display = "block";

    document.getElementById("foto1").style.filter = "grayscale(100%)";
    document.getElementById("foto2").style.filter = "grayscale(100%)";
    document.getElementById("foto3").style.filter = "grayscale(100%)";
    document.getElementById("foto4").style.filter = "grayscale(100%)";
    document.getElementById("foto5").style.filter = "none";

    document.getElementById("indicador-funcionario").style.marginLeft = "72%";
}