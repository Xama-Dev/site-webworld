/*Estiliza os links do menu nav*/

document.getElementById("a-home").onmouseover = function () {
    document.getElementById("p-home").style.borderBottom = "2px solid #00cccc";
}
document.getElementById("a-home").onmouseout = function () {
    document.getElementById("p-home").style.borderBottom = "2px solid #efefef";
}

document.getElementById("a-aboutUs").onmouseover = function () {
    document.getElementById("p-aboutUs").style.borderBottom = "2px solid #00cccc";
}
document.getElementById("a-aboutUs").onmouseout = function () {
    document.getElementById("p-aboutUs").style.borderBottom = "2px solid #efefef";
}

document.getElementById("a-service").onmouseover = function () {
    document.getElementById("p-service").style.borderBottom = "2px solid #00cccc";
}
document.getElementById("a-service").onmouseout = function () {
    document.getElementById("p-service").style.borderBottom = "2px solid #efefef";
}

document.getElementById("a-pages").onmouseover = function () {
    document.getElementById("p-pages").style.borderBottom = "2px solid #00cccc";
}
document.getElementById("a-pages").onmouseout = function () {
    document.getElementById("p-pages").style.borderBottom = "2px solid #efefef";
}

document.getElementById("a-blog").onmouseover = function () {
    document.getElementById("p-blog").style.borderBottom = "2px solid #00cccc";
}
document.getElementById("a-blog").onmouseout = function () {
    document.getElementById("p-blog").style.borderBottom = "2px solid #efefef";
}
document.getElementById("a-contactUs").onmouseover = function () {
    document.getElementById("p-contactUs").style.borderBottom = "2px solid #00cccc";
}
document.getElementById("a-contactUs").onmouseout = function () {
    document.getElementById("p-contactUs").style.borderBottom = "2px solid #efefef";
}

/*troca fundo box servicços*/

document.getElementById("link1-linha1").onmouseover = function () {
    document.getElementById("link1-linha1").style.backgroundColor = "#00cccc";
    document.getElementById("link1-linha1").style.border = "0.5px solid #00cccc";
    document.getElementById("icone-servico1").style.filter = "grayscale(100%) brightness(200%)";
    document.getElementById("h3-servico1").style.color = "white";
    document.getElementById("p-servico1").style.color = "white";

    document.styleSheets[0].addRule('#link1-linha1:after', 'content: "url(../img/indicadorAzul-servicos-direita.png)"');
}
document.getElementById("link1-linha1").onmouseout = function () {
    document.getElementById("link1-linha1").style.backgroundColor = "white";
    document.getElementById("link1-linha1").style.border = "0.5px solid #cccccc";
    document.getElementById("icone-servico1").style.filter = "grayscale(0%) brightness(100%)";
    document.getElementById("h3-servico1").style.color = "#666666"
    document.getElementById("p-servico1").style.color = "#666666"
}