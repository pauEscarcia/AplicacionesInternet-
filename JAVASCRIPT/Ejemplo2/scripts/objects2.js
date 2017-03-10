function Circulo(radio) {
  this.radio = radio;
  
  Circulo.prototype.getArea = 
    function() {
      return(Math.PI * this. radio * this.radio);
    };
}

var c = new Circulo(10);
c.getArea();         