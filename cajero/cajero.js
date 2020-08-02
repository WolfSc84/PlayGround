
class Billete{
  constructor(v,c){
    this.valor = v;
    this.cantidad = c;
  }
}

function entregardinero(){
  var t = document.getElementById("cantidad_dinero");
  dinero = parseInt(t.value);
  for(var bi of caja){
    if (dinero>0){
      div = Math.floor(dinero/bi.valor);
      console.log(div);
      if(div>bi.cantidad){
        papeles = bi.cantidad;
      }else{
        papeles = div;
      }
      entregado.push(new Billete(bi.valor,papeles));
      dinero -= (bi.valor*papeles);
    }
  }
  if(dinero>0){
    resultado.innerHTML = "No puedo darte esa cantidad!";
  }else{
    for (var e of entregado){
      if(e.cantidad>0){
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
  console.log(entregado);
}

var caja = [];
var entregado = [];
caja.push(new Billete(100,6));
caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(10,2));
caja.push(new Billete(5,5));
caja.push(new Billete(2,15));

var div = 0;
var papeles = 0;
var dinero;

var b = document.getElementById("botoncito");
b.addEventListener("click",entregardinero);
var resultado = document.getElementById("resultado");
