

function objetoAjax(){
	var xmlhttp=false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
		   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
  		}
	}

	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

function enviarDatosEmpleado(){
	//donde se mostrará lo resultados
	divResultado = document.getElementById('resultado');
	divFormulario = document.getElementById('formulario');
	//valores de los inputs
	id=document.frmempleado.idactor.value;
	nom=document.frmempleado.nombre.value;
	dep=document.frmempleado.fechanacimiento.value;
	suel=document.frmempleado.lugarnacimiento.value;
	
	//instanciamos el objetoAjax
	ajax=objetoAjax();
	//usando del medoto POST
	//archivo que realizará la operacion
	//actualizacion.php
	ajax.open("POST", "actualizacion.php",true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			//mostrar los nuevos registros en esta capa
			divResultado.innerHTML = ajax.responseText
			//mostrar un mensaje de actualizacion correcta
			divFormulario.innerHTML = "<p style=\"border:1px solid red; width:400px;\">La actualizaci&oacute;n se realiz&oacute; correctamente</p>";
		}
	}
	//muy importante este encabezado ya que hacemos uso de un formulario
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//enviando los valores
	ajax.send("idactor="+id+"&nombre="+nom+"&fechanacimiento="+dep+"&lugarnacimiento="+suel)
}

//PENDIENTE PENDIENTE REVUISAR!!!
function enviarDatosEmpleado(){
	//donde se mostrará lo resultados
	//divResultado2 = document.getElementById('resultado');
	divFormulario2 = document.getElementById('formulario');
	//valores de los inputs
	id=document.frmempleado.idactor.value;
	nom=document.frmempleado.nombre.value;
	dep=document.frmempleado.fechanacimiento.value;
	suel=document.frmempleado.lugarnacimiento.value;
	
	//instanciamos el objetoAjax
	ajax=objetoAjax();
	//usando del medoto POST
	//archivo que realizará la operacion
	//actualizacion.php
	ajax.open("POST", "actualizacion.php",true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			//mostrar los nuevos registros en esta capa
			divResultado.innerHTML = ajax.responseText
			//mostrar un mensaje de actualizacion correcta
			divFormulario.innerHTML = "<p style=\"border:1px solid red; width:400px;\">La actualizaci&oacute;n se realiz&oacute; correctamente</p>";
		}
	}
	//muy importante este encabezado ya que hacemos uso de un formulario
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//enviando los valores
	ajax.send("idactor="+id+"&nombre="+nom+"&fechanacimiento="+dep+"&lugarnacimiento="+suel)
}


function pedirDatos(idactor){
	//donde se mostrará el formulario con los datos
	divFormulario = document.getElementById('formulario');
	
	//instanciamos el objetoAjax
	ajax=objetoAjax();
	//uso del medotod GET
	ajax.open("POST", "consulta_por_id.php");
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			//mostrar resultados en esta capa
			divFormulario.innerHTML = ajax.responseText
			//mostrar el formulario
			divFormulario.style.display="block";
		}
	}
	//como hacemos uso del metodo GET
	//colocamos null
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//enviando los valores
	ajax.send("idact="+idactor)
}



funtion pedirDatos2(){
	//donde se mostrara el formulario con el combo y el boton 
	divFormulario2= document.getElementById('formulario2');
	
	//instanciamos el objetoAjax
	ajax=objetoAjax();
	//uso del medotod 
	ajax.open("POST", "buscaactores.php");
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			divFormulario2.innerHTML = ajax.responseText
			//mostrar el formulario
			divFormulario2.style.display="block";
		}
	}
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//enviando los valores
	ajax.send("null")
}

