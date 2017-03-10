
function getRequestObject() {
  if (window.XMLHttpRequest) {
    return(new XMLHttpRequest());
  } else if (window.ActiveXObject) { 
    return(new ActiveXObject("Microsoft.XMLHTTP"));
  } else {
    // Don't throw Error: this part is for very old browsers,
    // and Error was implemented starting in JavaScript 1.5.
    return(null); 
  }
}


function ajaxText(address,resultRegion) {
  var request = getRequestObject();
  request.onreadystatechange = 
    function() { showResponseText(request,resultRegion); };
  request.open("POST", address, true);
  request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  var busqueda= getValorEscaped("busqueda");
  var datos="busqueda"+busqueda;
  request.send(datos);
}



function htmlInsert(id, htmlData) {
document.getElementById(id).innerHTML = htmlData;
}

function getValorEscaped(id){
	return escape(document.getElementById(id).value);
}

function getValorEscaped2(id){
	return escape(document.getElementById(id).value);
}

//funcion post para pasarle la busqueda por metodo POST
function ajaxResult(address, resultRegion) {
  var request = getRequestObject();
  request.onreadystatechange = 
    function() { 
     		showResponseText(request, resultRegion);
    };
  request.open("POST", address, true);
  request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  var busqueda= getValorEscaped("busqueda");
  var datos="busqueda="+busqueda;
  request.send(datos);
}

//funcion para pasarle el dato del combo 
function ajaxResult2(address, resultRegion) {
  var request = getRequestObject();
  request.onreadystatechange = 
    function() { 
     		showResponseText2(request, resultRegion);
    };
  request.open("POST", address, true);
  request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  var idpelicula= getValorEscaped("name");
  var datos="idpelicula="+idpelicula;
  request.send(datos);
}

function showResponseText(request,resultRegion) {
  if ((request.readyState == 4) &&
      (request.status == 200)) {
    htmlInsert(resultRegion,request.responseText);
    //var text= document.getElementById("busq");
    //text.innerHTML="Hola"; //request;
  }
  
}

function showResponseText2(request,resultRegion) {
  if ((request.readyState == 4) &&
      (request.status == 200)) {
    htmlInsert2(resultRegion,request.responseText);
    //var text= document.getElementById("name");
    //text.innerHTML="Hola"; //request;
  }
  
}

//Insert the html data into the element that has the specified id.

function htmlInsert(id, htmlData) {
  document.getElementById(id).innerHTML = htmlData;
}

function htmlInsert2(id, htmlData) {
  document.getElementById(id).innerHTML = htmlData;
}


// Trick so that the Firebug console.log function will
// be ignored (instead of crashing) in Internet Explorer.
// Also see Firebug Lite and Faux Console if you want 
// logging to actually do something in IE.
// Firebug Lite: http://getfirebug.com/lite.html
// Faux Console: http://icant.co.uk/sandbox/fauxconsole/
 
try { console.log("Loading script"); 
} catch(e) { console = { log: function() {} }; }
