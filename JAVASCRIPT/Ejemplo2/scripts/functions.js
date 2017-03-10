function square(x) { return(x*x); }

//Or, var square = function(x) { return(x*x); };

var f = square;

// For Firebug:
//   square(5);
//   f(5);

function double(x) { return(x*2); }

var functs = [square, f , double];

var f2 = functs[0];

// f2(7);
// functs[2](7);

var objAleatorio  = { a: 3, b: "Hi", c: square};

// objAleatorio.a;
// objAleatorio.b;
// objAleatorio .c(6);

function third(x) {
  return(x / 3);
}

function triple(x) {
  return(x * 3);
}

function nineTimes(x) {
  return(x * 9);
}

function operate(f) {
  var nums = [1, 2, 3];
  for(var i=0; i<nums.length; i++) {
    var num = nums[i];
    console.log("Operation on %o is %o.", 
                num, f(num));
  }
}

function randomFunct() {
  if(Math.random() > 0.5) {
    return(square);
  } else {
    return(double)
  }
}

var f3 = randomFunct();

//(function(x) {return(x+7);})(10);

function randomFunct2() {
  if(Math.random() > 0.5) {
    return(function(x) { return(x*x); });
  } else {
    return(function(x) { return(x*2); });
  }
}

// For Firebug:
//   operate(third);
//   operate(triple);
//   operate(nineTimes);

function multiplicaPor7() {
  return(function(n) { return(n*7); });
}

// For Firebug:
//   var f = multiplicaPor7();
//   f(7); 

function funcionMultiplicativa(m(m) {
  return(function(n) { return(n*m); });
}

// For Firebug:
//   var test = 10;
//   var f = funcionMultiplicativa(m(test);
//   f(7); 
//   test = 100;
//   f(7);

function hipotenusa(lado1, lado2) {
  return(Math.sqrt(lado1*lado1 + lado2*lado2));
}

function nombreCompleto() {
  return(this.primerNombre + " " + this.apellido);
}

var persona = { primerNombre: "Bruce", apellido: "Wayne" };

// nombreCompleto();
// nombreCompleto.call(persona);

function abx(x) {
  return(this.a + this.b + x);
}

var funnyObj = { a: 1, b: 2 };

// abx(3);
// abx.call(funnyObj, 3);

// Trick so that the Firebug console.log function will
// be ignored (instead of crashing) in Internet Explorer.
// Also see Firebug Lite if you want logging
// to actually do something on IE.
// http://getfirebug.com/firebuglite
 
try { console.log("Cargando script"); 
} catch(e) { console = { log: function() {} }; }