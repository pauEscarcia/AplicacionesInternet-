<?php
	SESSION_start();
	if(!$_SESSION['usuario']){
		header('Location: login.php');
	}
	
?>

<?php ob_start(); ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
	<title>Forma de captura</title>
	<link rel="stylesheet" href="css/reglas.css" type="text/css"/> 
	<script src="scripts/javascript.js" type="text/javascript"></script>  
	<script src="scripts/validar.js" type="text/javascript"></script>  
</head>
<body>
	<h1>Men&uacute;</h1>
	<ul id="menu">
	<li><a href="#">Inicio</a>
		<ul>
			<li><a href="actor.php">Actores</a></li>
			<li><a href="Pelicula.php">Peliculas</a></li>
		</ul>
</li>
<li><a href="logout.php">Terminar sesi&oacute;n</a></li>
</ul>
<img src="imagenes/videos.jpg" alt="Pau" height="400" width="500" /> <br/>


	
		
</body>
</html>