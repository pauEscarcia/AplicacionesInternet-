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
//VALIDANDO LAS CAJAS DE TEXTO QUE NO ESTEN VACIAS 

 function validar() { 

 	var miCampoTexto = document.getElementById("cuenta").value; 
	var miCampoTexto2 = document.getElementById("email").value; 
	var miarea= document.getElementById("area").value;
	var miradio1=document.getElementById("masc"); 
	var miradio2=document.getElementById("fem");
	var miformulario= document.getElementById("miform");


	
   if (miCampoTexto.length == 0 || /^\s+$/.test(miCampoTexto) || miCampoTexto2.length == 0 || /^\s+$/.test(miCampoTexto2) || miarea.length == 0 || /^\s+$/.test(miarea) || miradio1.checked==false && miradio2.checked==false)
    {
	if (miCampoTexto.length == 0 || /^\s+$/.test(miCampoTexto)) {
		 //no tiene nada 
		document.getElementById("name").innerHTML="No tecleaste tu nombre";
	} else{ document.getElementById("name").innerHTML=" ";}

	if(miCampoTexto2.length == 0 || /^\s+$/.test(miCampoTexto2)){
		document.getElementById("mail").innerHTML="No tecleaste tu Email ";
	} else{ document.getElementById("mail").innerHTML=" ";}

	if(miarea.length == 0 || /^\s+$/.test(miarea)){
		document.getElementById("areas").innerHTML="No tecleaste ningun comentario";
	} else{document.getElementById("areas").innerHTML=" ";}

	if(miradio1.checked==false && miradio2.checked==false){
	//no se ha seleccionado nada
		document.getElementById("radio").innerHTML="No seleccionaste tu sexo";
	}else{document.getElementById("radio").innerHTML="";}
	
	
     } else 
	{ 
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test( miCampoTexto2 )){
			//correcto
			document.getElementById("mail").innerHTML=" ";
			document.getElementById("email").style.color="#000"; 
		
		}
	
		else{
			document.getElementById("mail").innerHTML="correo no valido ";
			document.getElementById("email").style.color="#f00";     
		}
	
	miformulario.submit();
	}	
}




<input type="button" value="Enviar" onclick="validar();validaremail();"/>

function validaremail() {
	var miCampoTexto2 = document.getElementById("email").value;
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test( miCampoTexto2 )){
		//correcto
		document.getElementById("mail").innerHTML=" ";
		document.getElementById("email").style.color="#000"; 
		
	}
	
	else{
		document.getElementById("mail").innerHTML="correo no valido ";
		document.getElementById("email").style.color="#f00";     
	}
	
}

