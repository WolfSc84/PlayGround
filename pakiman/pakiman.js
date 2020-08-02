class Pakiman{
  constructor(n,v,a){
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.image = new Image();
    this.image.src = imagenes [this.nombre];
  }
  hablar(){
    alert(this.nombre);
  }//mostrar
  mostrar(){
    document.write("<p>");
    document.body.appendChild(this.image);
    document.write("<strong>"+this.nombre+"</strong><br />");
    document.write("Vida: "+this.vida);
    document.write("<br />Ataque: "+this.ataque+"<hr />");
    document.write("</p>");
  }//mostrar en pantalla
}
