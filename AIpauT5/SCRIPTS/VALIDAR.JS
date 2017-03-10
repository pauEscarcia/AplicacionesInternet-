function validame(){
	
	alert("poruqe");
}


 function validar() {
	var miCampoTexto = document.getElementById("titulo").value;
	var miCampoTexto1 = document.getElementById("director").value;
	var miCampoTexto2 = document.getElementById("produccion").value;

	 var cad = "^(19|19)\\d\\d$";
	 var cad1 = "^(20|20)\[0-1]\[0-2]$";
	 var regexp = new RegExp(cad);
	 var regexp1 = new RegExp(cad1);
	 var escribir2= document.getElementById("produ");
	
	var elementos_formulario = miform.elements;
	var valida=0;
	var miformulario= document.getElementById("miform");

	document.getElementById("title").style.color="#f00";
	document.getElementById("directo").style.color="#f00"; 
	document.getElementById("clas").style.color="#f00";   
	escribir2.style.color="#f00"; 

	if(miCampoTexto.length == 0 || /^\s+$/.test(miCampoTexto)){
			document.getElementById("title").innerHTML="No tecleaste tu titulo";
			
	}
	else{
		document.getElementById("title").innerHTML=" ";
		valida++;
		
	}
	if(miCampoTexto1.length == 0 || /^\s+$/.test(miCampoTexto1)){
			document.getElementById("directo").innerHTML="No tecleaste el director";
			
	}
	else{
		document.getElementById("directo").innerHTML=" ";
		valida++;
	}

	  for(i=0; i<elementos_formulario.length; i++){
        	if(elementos_formulario[i].tagName == "INPUT") {
			if(elementos_formulario[i].type == "radio"){
            			if ( elementos_formulario[i].checked) {
					document.getElementById("clas").innerHTML="";
					valida++;
				}
			}
		} else{ document.getElementById("clas").innerHTML="No seleccionaste una clasificacion";}
	}
	
	
	if ( regexp.test(miCampoTexto2) || regexp1.test(miCampoTexto2) ) {
			//correcto 
			escribir2.innerHTML="";
			valida++;
	} else {
		escribir2.innerHTML="A&ntilde;o incorrecto";};
	
	
	if (valida==4){ miformulario.submit(); }	
	
}
