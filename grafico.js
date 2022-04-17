
var dibujo=document.getElementById("dibujo");
var ancho=dibujo.clientWidth;
var alto=dibujo.clientHeight;
var lienzo=dibujo.getContext("2d");
var texto=document.getElementById("texto");
var boton=document.getElementById("boton");
boton.addEventListener("click",generarGrafico)
function trazar(color,xubicacion,yubicacion,xmovimiento,ymovimiento){
        lienzo.beginPath();
        lienzo.strokeStyle=color;
        lienzo.moveTo(xubicacion,yubicacion);
        lienzo.lineTo(xmovimiento,ymovimiento);
        lienzo.stroke();
        lienzo.closePath();
}

function generarGrafico(){
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "red";
    var espacio = ancho / lineas; 
    for (l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        trazar(colorcito, 0, yi, xf, alto);

    }
    trazar(colorcito, 1,1,1,alto-1);
    trazar(colorcito, 1,alto-1,alto-1, alto-1);
}