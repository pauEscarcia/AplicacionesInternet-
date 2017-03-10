
<?php
	
	SESSION_start();
	if(!$_SESSION['usuario']){
		header('Location: login.php');
	}	
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	
	<link rel="stylesheet" href="css/reglas.css" type="text/css"/> 
	<script src="scripts/ajax-utils.js" type="text/javascript"></script>  
	<script src="scripts/validar.js" type="text/javascript"></script> 
	<title>Registro de peliculas</title>
	
</head> 
<body>
	<h1>Modificar Actores</h1>
	  <form name="formalogin" id="miform" method="POST" class="contacto" action="">
		<label>Nombre del actor: </label>
		<input type="text" id="busqueda" name="busqueda" size="50" maxlength="50"/> 
		<input type="button" value="buscar" id="buscar" onclick='ajaxResult("buscaactores.php?","busq");'/>
  		</br>
		</br>
		<div id="busq"></div>
		<div id="busq2"></div>
	</br>
	<a href="http://jigsaw.w3.org/css-validator/check/referer">
    	<img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="¡CSS Válido!" />
</a>
</p>
	</form>
		
	

</body>
</html>