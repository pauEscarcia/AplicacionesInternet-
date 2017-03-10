
function pregunta(){
	
	var r=confirm("¿Desea borrar?");
	if (r==true){
  		 var x="Tu presionaste OK, borrado!";
		 document.getElementById("miform").reset();
  	}
	else{
		var  x="Tu presionaste no!";	
	}
	document.getElementById("demo").innerHTML=x;
}

function hazmayuscula(campotexto){
	campotexto.value= campotexto.value.toUpperCase();
}

function convierteMayusculas(){
	var inputs=document.getElementByTagName("input");
	for (var i=0; i<inputs.length();i++)
			if (inputs[i].type=="text"){	
				inputs[i].onkeypress= hazmayusculas(inputs[i]);
			}
	

}
//VALIDANDO todo 

 function validar() { 

 	var miCampoTexto = document.getElementById("cuenta").value; 
	var miCampoTexto2 = document.getElementById("email").value; 
	var miarea= document.getElementById("area").value;
	var miradio1=document.getElementById("masc"); 
	var miradio2=document.getElementById("fem");
	var miformulario= document.getElementById("miform");
	var escribir= document.getElementById("mail");
	var escribir2= document.getElementById("feo");
	var valida=0;
	

	
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test( miCampoTexto2 )){
			//correcto
			document.getElementById("email").style.color="#000"; 
			escribir2.innerHTML=" ";  
			valida++;
		
		}else{
			//alert("correo no valido");
			document.getElementById("email").style.color="#f00"; 
			escribir2.innerHTML="correo no valido";    
		}
	
     	
   
	if (miCampoTexto.length == 0 || /^\s+$/.test(miCampoTexto)) {
		 //no tiene nada o solo tiene espacios en blanco
		document.getElementById("name").innerHTML="No tecleaste tu nombre";
	} else{ document.getElementById("name").innerHTML=" "; valida++; }

	if(miCampoTexto2.length == 0 || /^\s+$/.test(miCampoTexto2)){
		escribir.innerHTML="No tecleaste tu Email ";
	} else{ escribir.innerHTML=" "; valida++;}

	if(miarea.length == 0 || /^\s+$/.test(miarea)){
		document.getElementById("areas").innerHTML="No tecleaste ningun comentario";
	} else{document.getElementById("areas").innerHTML=" "; valida++;}

	if(miradio1.checked==false && miradio2.checked==false){
		//no se ha seleccionado nada
		document.getElementById("radio").innerHTML="No seleccionaste tu sexo";
	}else{document.getElementById("radio").innerHTML=""; valida++;}
	
	
	

	if (valida==5)
 	{ miformulario.submit(); }	
}


