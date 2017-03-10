
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
  var idactor= getValorEscaped("name");
  var datos="idactor="+idactor;
  
    request.send(datos);
  
}

function ajaxResult3(address) {
  var request = getRequestObject();
  	var objeto= document.getElementById("nombre");//Nombre	
	var valor= objeto.value;
	var objeto1= document.getElementById("lugarnacimiento");//año 
	var valor1= objeto1.value;
	var cont = 0;
	var tipo1= document.getElementById("fobtenActor");
	var idactor= document.getElementById("name").value;
 
  	var nom=document.getElementById("nombre").value;
  	var dep=document.getElementById("fechanacimiento").value;
  	var suel=document.getElementById("lugarnacimiento").value;
    
    
  
	//Nombre del actor
  document.getElementById("nom").style.color="#FF8000";
	if (valor.length==0){ //no ha escrito nada

		
			document.getElementById("nom").innerHTML="No Escribiste el Nombre";
	}
	else{
		document.getElementById("nom").innerHTML=" ";
		cont++;
		
	}
	// fecha de nacimiento
	var campo= document.getElementById("fechanacimiento")
	var objt =campo.value;
  document.getElementById("an").style.color="#FF8000";
		//año/mes/dia
		if (/^\d{2,4}\-\d{1,2}\-\d{1,2}$/.test( objt )){
		
			document.getElementById("an").innerHTML=" ";
      cont++;
		}

		else{
			document.getElementById("an").innerHTML="Fecha no valida :(";

		}
	//lugar de nacimiento
  document.getElementById("nacimiento").style.color="#FF8000";
	if (valor1.length==0){ //no ha escrito nada

		
			document.getElementById("nacimiento").innerHTML="No escribiste el lugar de nacimiento :(";
	}
	else{
		document.getElementById("nacimiento").innerHTML=" ";
    cont++;
		
	}
	//muerte
	var muerte= document.getElementById("fechamuerte")
	var senosfue =muerte.value;
  document.getElementById("murio").style.color="#FF8000";
		//año/mes/dia
		if (/(19|20)\d\d[- -.](0[1-9]|1[012])[- -.](0[1-9]|[12][0-9]|3[01])/.test( senosfue ) ||senosfue.length==0 ){
		
			document.getElementById("murio").innerHTML=" ";
      cont++;
		}

		else{
			document.getElementById("murio").innerHTML="Los datos ingresados estan mal :(";

		}
	// url del actor
	var campo1= document.getElementById("urlactor")
	var objeto =campo1.value;
  document.getElementById("urls").style.color="#FF8000";
		if (/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)( [a-zA-Z0-9\-\.\?\,\'\/\\\+&%\$#_]*)?$/.test( objeto )){
		
			document.getElementById("urls").innerHTML=" ";
      cont++;
		}

		else{
			document.getElementById("urls").innerHTML="El URL esta mal favor de verificar  :(";

		}
	//url de las imagenes de actor
	var campo2= document.getElementById("urlimagenactor")
	var objetoi =campo2.value;
  document.getElementById("urlim").style.color="#FF8000";
		if ( /http(s)?:\/\/(.*?)(\.)?(.*?)?\/(.*?)+\.(gif|jpeg|jpg|png)/.test( objetoi )){
		
			document.getElementById("urlim").innerHTML=" ";
      cont++;
		}

		else{
			document.getElementById("urlim").innerHTML="El URL esta mal favor de verificar  :(";

		}
  if(cont==6){
   alert("Actualizado (:");
  var request = getRequestObject();
  request.onreadystatechange = 
    function() { 
     		//showResponseText2(request, resultRegion);
    };
  request.open("POST", address, true);
  request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  var idactor= document.getElementById("name").value;
 
  var nom=document.getElementById("nombre").value;
  var dep=document.getElementById("fechanacimiento").value;
  var suel=document.getElementById("lugarnacimiento").value;
  
  var fm=document.getElementById("fechamuerte").value;
  var urla=document.getElementById("urlactor").value;
  var urlimagenactor=document.getElementById("urlimagenactor").value;
  
  var actualizar=document.getElementById("actualizar").value;

  //request.send("idactor="+idactor+"&nombre="+nom+"&fechanacimiento="+dep+"&lugarnacimiento="+suel+"&actualizar="+actualizar);
  request.send("idactor="+idactor+"&nombre="+nom+"&fechanacimiento="+dep+"&lugarnacimiento="+suel+"&actualizar="+actualizar+"&fechamuerte="+fm+"&urlactor="+urla+"&urlimagenactor="+urlimagenactor);
}
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