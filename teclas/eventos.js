
document.addEventListener("keydown",dibujart);
document.addEventListener("mousemove",movimiento);
document.addEventListener("click",dibujarm);

var teclas = {
  UP : 38,
  LEFT : 37,
  RIGHT : 39,
  DOWN : 40,
};
var x = 400;
var y = 150;
var xm;
var ym;
var colorcito = "blue";

console.log(teclas);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
dibujararea(papel);

function dibujararea(lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = "red";
  lienzo.lineWidth = 5;
  lienzo.moveTo(0,0);
  lienzo.lineTo(0,300);
  lienzo.stroke();
  lienzo.moveTo(0,300);
  lienzo.lineTo(800,300);
  lienzo.stroke();
  lienzo.moveTo(800,300);
  lienzo.lineTo(800,0);
  lienzo.stroke();
  lienzo.moveTo(800,0);
  lienzo.lineTo(0,0);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujart(eventot){
  var movimiento = 2;
  console.log("Tecla oprimida!");
  console.log(eventot.keyCode);
  console.log(eventot);
  switch(eventot.keyCode){
    case teclas.UP:
      console.log("Vamos pa arriba!");
      dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
      y = y-movimiento;
      break;
    case teclas.DOWN:
      console.log("Vamos pa abajo!");
      dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
      y = y+movimiento;
      break;
    case teclas.RIGHT:
      console.log("Vamos pa la izquierda!");
      dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
      x = x+movimiento;
      break;
    case teclas.LEFT:
      console.log("Vamos pa la derecha!");
      dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
      x = x-movimiento;
      break;
  }
}

function movimiento(move){
  console.log(move);
  xmf = move.clientX;
  ymf = move.clientY;
}

function dibujarm(eventodm){
  console.log(eventodm);
    dibujarLinea(colorcito,x,y,xmf,ymf,papel);
    x = xmf;
    y = ymf;
}
