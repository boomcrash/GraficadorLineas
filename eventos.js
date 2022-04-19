var dibujo2=document.getElementById("teclas");
var ancho2=dibujo2.clientWidth;
var alto2=dibujo2.clientHeight;
var lienzo2=dibujo2.getContext("2d");
var movimiento2=5;
var x2=10,y2=10;

function trazar2(color2,xubicacion2,yubicacion2,xmovimiento2,ymovimiento2){
    lienzo2.beginPath();
    lienzo2.strokeStyle=color2;
    lienzo2.lineWidth=3;
    lienzo2.moveTo(xubicacion2,yubicacion2);
    lienzo2.lineTo(xmovimiento2,ymovimiento2);
    lienzo2.stroke();
    lienzo2.closePath();
}

trazar2("black",10,10,12,12);

document.addEventListener("keyup", dibujar2);
var teclas = {
    UP: 87,
    DOWN: 83,
    LEFT: 65,
    RIGHT: 68
}
function dibujar2(evento) {
    switch (evento.keyCode) {
        case teclas.UP:
            trazar2("black",x2,y2,x2,y2-movimiento2);
            y2=y2-movimiento2;
            break;
        case teclas.RIGHT:
            trazar2("black",x2,y2,x2+movimiento2,y2);
            x2=x2+movimiento2;
            break;
        case teclas.DOWN:
            trazar2("black",x2,y2,x2,y2+movimiento2);
            y2=y2+movimiento2;
            break;
        case teclas.LEFT:
            trazar2("black",x2,y2,x2-movimiento2,y2);
            x2=x2-movimiento2;
            break;
    }
}