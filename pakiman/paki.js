var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokachon"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var cauchin = new Pakiman("Cauchin",100,30);
var pokacho = new Pakiman("Pokachon",80,50);
var tocinauro = new Pakiman("Tocinauro",80,50);
console.log(cauchin,pokacho,tocinauro);

var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);

console.log(coleccion);
for(var p in coleccion){
  console.log(coleccion[p]);
}

for(var p of coleccion){
  console.log(p);
  p.mostrar();
}
