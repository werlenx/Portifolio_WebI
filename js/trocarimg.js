var imgAtual = "../img/img/image2.png"
var imgAnterior = "../img/img/img2.gif"

function trocarImg (){
    document.getElementById("img").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
}