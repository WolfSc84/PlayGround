var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cantidad;

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

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);

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
  if(cerdo.cargaOK == true && fondo.cargaOK == true){
    cantidad = aleatorio(1,36);
    for(var i=0; i<cantidad; i++){
      x = aleatorio(0,420);
      y = aleatorio(0,420);
      papel.drawImage(cerdo.imagen,x,y);
    }
  }
  if(pollo.cargaOK == true && fondo.cargaOK == true){
    cantidad = aleatorio(1,36);
    for(var i=0; i<cantidad; i++){
      x = aleatorio(0,420);
      y = aleatorio(0,420);
      papel.drawImage(pollo.imagen,x,y);
    }
  }
}

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca(){
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollo(){
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdo(){
  cerdo.cargaOK = true;
  dibujar();
}
