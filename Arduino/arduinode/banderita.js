var j=require("johnny-five");
var circuito=new j.Board();
var bombillo, motorcito, celda;
var turno=0;

circuito.on("ready",prender);

function prender(){
  bombillo = new j.Led(13);
  bombillo.on();

  motorcito = j.Servo(9);
  motorcito.to(90)

  var configuracion = {pin:"A0", freq: 50}
  celda = new j.Sensor(configuracion);

  ondear()
}

function ondear(){

  console.log("Luz: "+celda.value);
  if (celda.value > 800){
    if(turno==1){
      turno=0;
      motorcito.to(70);
    }else{
      turno=1;
      motorcito.to(110);
    }
  }else{
    motorcito.to(150);
  }
  setTimeOut(ondear,1000);

}
