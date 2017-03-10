function getMensaje() {
  var cantidad = Math.round(Math.random() * 100000);
  var mensaje =
    "Ganaste $" + cantidad + "!\n" +
    "Para recoger tus ganancias, envia tu numero de tarjeta de credito\n" +
    "y cuenta de banco a loteria@phisher.com.";
  return(mensaje);
}

function muestraGanancias1() {
  alert(getMensaje());
}

function muestraGanancias2() {
  document.write("<h1><blink>" + getMensaje() +
                 "</blink></h1>");
}