var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown",cargarCerdo);
var cantidad;
var xS;
var yS;
var xi = 300;
var yi = 420;
var x;
var y;

var teclas = {
  UP : 38,
  LEFT : 37,
  RIGHT : 39,
  DOWN : 40,
}
var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
}
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}
var pollo = {
  url: "pollo.png",
  cargaOK: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

function aleatorio(min,maxi){
  var resultado;
  resultado = Math.floor((maxi-min+1)*Math.random())+min;
  return resultado;
}

function dibujar(){
  if(fondo.cargaOK == true){
    papel.drawImage(fondo.imagen,0,0);
  }
  if(vaca.cargaOK == true && fondo.cargaOK == true){
    cantidad = aleatorio(1,36);
    for(var i=0; i<cantidad; i++){
      x = aleatorio(0,420);
      y = aleatorio(0,420);
      papel.drawImage(vaca.imagen,x,y);
    }
  }
  if(cerdo.cargaOK == true && fondo.cargaOK == true && vaca.cargaOK == true){
    papel.drawImage(cerdo.imagen,xi,yi);
  }
}

function dibujarSpig(){
  if(fondo.cargaOK == true){
    papel.drawImage(fondo.imagen,0,0);
  }
  if(vaca.cargaOK == true && fondo.cargaOK == true){
    cantidad = aleatorio(1,36);
    for(var i=0; i<cantidad; i++){
      x = aleatorio(0,420);
      y = aleatorio(0,420);
      papel.drawImage(vaca.imagen,x,y);
    }
  }
  if(cerdo.cargaOK == true && fondo.cargaOK == true && vaca.cargaOK == true){
    papel.drawImage(cerdo.imagen,xi,yi);
  }
}

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca(){
  vaca.cargaOK = true;
  cerdo.cargaOK = true;
  dibujar();
}

function cargarCerdo(poderes){
  supercerdo(poderes);
  cerdo.cargaOK = true;
  dibujarSpig();
}

function supercerdo(poderes){
  switch(poderes.keyCode){
    case teclas.UP:
      console.log("Vamos pa arriba!");
      yS = yi-10;
      yi = yS;
      break;
    case teclas.DOWN:
      console.log("Vamos pa abajo!");
      yS = yi+10;
      yi = yS;
      break;
    case teclas.RIGHT:
      console.log("Vamos pa la izquierda!");
      xS = xi+10;
      xi = xS;
      break;
    case teclas.LEFT:
      console.log("Vamos pa la derecha!");
      xS = xi-10;
      xi = xS;
      break;
  }
}
