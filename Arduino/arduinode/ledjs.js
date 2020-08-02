var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready",prender);

funcion prender (){
  var led = new jf.Led(13);
  led.blink(500);
}
