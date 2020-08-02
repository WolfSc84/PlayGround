var express = require('express');
var aplication = express();

aplication.get("/",inicio);
aplication.get("/cursos",cursos);
/*application.get("/", function (req, res) {
  res.send('Hello World');
})*/

function inicio(request,response){
  response.send("Este es el <strong>home</strong>");
}

function cursos(request,response){
  response.send("Estos son los <strong>cursos</strong>");
}

aplication.listen(8989);
