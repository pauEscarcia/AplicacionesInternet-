function ver() {
	var url= document.getElementById("urlimagenactor").value;
	var divFirma= document.getElementById('divimagen');
	divFirma.innerHTML = "<img src='url'/>";
}

function validar() {
	var url= document.getElementById("urlimagen").value;
	
	var texto= " <img src= ' " +url + " ' width='300' height='280'/>";
	alert("mostrando imgen (;");
	//document.getElementById('divfirma').src = "mt07.jpg";
	var divFirma= document.getElementById('divimagen');
	divFirma.innerHTML = texto;
	
}

function nuevo(){
	
	document.getElementById("busq").innerHTML=" ";
	document.getElementById("busq2").innerHTML=" ";
	 document.getElementById("miform").reset();
}

function veremos() {
	var texto="Actualizado (:";
	alert(texto);
}

function validaActor(){
	var objeto= document.getElementById("nombre");//Nombre	
	var valor= objeto.value;
	var objeto1= document.getElementById("lugarnacimiento");//año 
	var valor1= objeto1.value;
	var ban = 0;
	var tipo1= document.getElementById("fobtenActor");
	var idactor= document.getElementById("name").value;
 
  	var nom=document.getElementById("nombre").value;
  	var dep=document.getElementById("fechanacimiento").value;
  	var suel=document.getElementById("lugarnacimiento").value;
  
	//Nombre del actor
	if (valor.length==0){ //no ha escrito nada

		
			document.getElementById("nom").innerHTML="No Escribiste el Nombre";
	}
	else{
		document.getElementById("nom").innerHTML=" ";
		ban++;
		
	}
	// fecha de nacimiento
	var campo= document.getElementById("fechanacimiento")
	var objt =campo.value;
		//año/mes/dia
		if (/^\d{2,4}\-\d{1,2}\-\d{1,2}$/.test( objt )){
		
			document.getElementById("an").innerHTML=" ";
		}

		else{
			document.getElementById("an").innerHTML="Fecha no valida :(";

		}
	//lugar de nacimiento
	if (valor1.length==0){ //no ha escrito nada

		
			document.getElementById("nacimiento").innerHTML="No escribiste el lugar de nacimiento :(";
	}
	else{
		document.getElementById("nacimiento").innerHTML=" ";
		
	}
	//muerte
	var muerte= document.getElementById("fechamuerte")
	var senosfue =muerte.value;
		//año/mes/dia
		if (/(19|20)\d\d[- -.](0[1-9]|1[012])[- -.](0[1-9]|[12][0-9]|3[01])/.test( senosfue ) ||senosfue.length==0 ){
		
			document.getElementById("murio").innerHTML=" ";
		}

		else{
			document.getElementById("murio").innerHTML="Los datos ingresados estan mal :(";

		}
	


	// url del actor
	var campo1= document.getElementById("urlactor")
	var objeto =campo1.value;
		if (/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)( [a-zA-Z0-9\-\.\?\,\'\/\\\+&%\$#_]*)?$/.test( objeto )){
		
			document.getElementById("urls").innerHTML=" ";
		}

		else{
			document.getElementById("urls").innerHTML="El URL esta mal favor de verificar  :(";

		}
	//url de las imagenes de actor
	var campo2= document.getElementById("urlimagenactor")
	var objetoi =campo2.value;
		if ( /http(s)?:\/\/(.*?)(\.)?(.*?)?\/(.*?)+\.(gif|jpeg|jpg|png)/.test( objetoi )){
		
			document.getElementById("urlim").innerHTML=" ";
		}

		else{
			document.getElementById("urlim").innerHTML="El URL esta mal favor de verificar  :(";

		}
		//var texto= " '<img src= ' " +url + " ' width='93' height='80'/>'";
	//	if(ban ==1 ){
		//var gay=" actualizacionactor.php?idactor= "+idactor+"";
		//var gay2=" &nombre= "+nom+"";
		//location.href="actualizacionactor.php?idactor= "+idactor+" +"&nombre"= "+nom+" ";
	//}	

	
}
