
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
