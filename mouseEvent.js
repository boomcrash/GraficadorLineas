var dibujo3=document.getElementById("mouse");
var ancho3=dibujo3.clientWidth;
var alto3=dibujo3.clientHeight;
var lienzo3=dibujo3.getContext("2d");
var movimiento3=5;
var x3,y3;

function trazar3(color3,xubicacion3,yubicacion3,xmovimiento3,ymovimiento3){
    lienzo3.beginPath();
    lienzo3.strokeStyle=color3;
    lienzo3.lineWidth=3;
    lienzo3.moveTo(xubicacion3,yubicacion3);
    lienzo3.lineTo(xmovimiento3,ymovimiento3);
    lienzo3.stroke();
    lienzo3.closePath();
}


document.addEventListener("mousedown", empezar3);
document.addEventListener("mouseup", soltar3);
document.addEventListener("mousemove", pintar3);
var dibujando3=false;

function empezar3(evento) {
    x3=evento.clientX-385;
    y3=evento.clientY-45;
    dibujando3=true;
    console.log(evento)
    if(x<92||y<23){
        alert("fuera de rango");
        dibujando3=false;
    }else if(x>848||y>781){
        alert("fuera de rango");
        dibujando3=false;
    }else{
        trazar3("black",x,y,x+2,y+2);
    }
}

function pintar3(evento){
    if(dibujando3==true){
        trazar3("black",evento.clientX-385,evento.clientY-45,evento.clientX+2-385,evento.clientY+2-45);
    }
}


function soltar3(evento) {
    dibujando3=false;
}