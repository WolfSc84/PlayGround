alert("Si funciona.");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lines = 30;
var l = 0;

console.log(lienzo);
console.log(texto);
console.log(boton);
console.log();

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){
  lines = parseInt(texto.value);
  var espacio = parseInt(d.width)/(lines*2);
  alert(espacio);

  while(l<lines){
    dibujarLinea("#FAF",150,300-espacio*l,150+l*espacio,0);
    dibujarLinea("#FAF",150,300-espacio*l,150-l*espacio,0);
    dibujarLinea("#AFF",150,espacio*l,150+l*espacio,300);
    dibujarLinea("#AFF",150,espacio*l,150-l*espacio,300);
    l++;
  }
  dibujarLinea("#AFA",149,0,149,300);
  dibujarLinea("#AFA",151,0,151,300);
  dibujarLinea("#AFA",0,0,300,0);
  dibujarLinea("#AFA",0,1,300,1);
  dibujarLinea("#AFA",149,0,149,300);
  dibujarLinea("#AFA",151,0,151,300);
  dibujarLinea("#AFA",0,299,300,299);
  dibujarLinea("#AFA",0,300,300,300);
}
