<?php
	
	SESSION_start();
	if(!$_SESSION['usuario']){
		header('Location: login.php');
	}	
?>
<?php


//Configuracion de la conexion a base de datos
include 'config.php';
$conn = mysql_connect($hostdb, $usuariodb, $clavedb);
if (!$conn)     
	die('No me pude conectar: ' . mysql_error());
if (!mysql_select_db($nombredb))    
	die("No pude seleccionar la base de datos ".$nombredb);
			
//consulta todos los empleados
$sql=mysql_query("SELECT * FROM actor",$conn);


//variables POST
$idact=$_POST['idactor'];
$nom=$_POST['nombre'];
$dep=$_POST['fechanacimiento'];
$suel=$_POST['lugarnacimiento'];

$fm=$_POST['fechamuerte'];
$urla=$_POST['urlactor'];
$urlimagenactor=$_POST['urlimagenactor'];


//actualiza los datos del empleados
$sql="UPDATE actor SET nombre='$nom', fechanacimiento='$dep', lugarnacimiento='$suel',fechamuerte='$fm',urlactor='$urla',urlimagenactor='$urlimagenactor' WHERE idactor=$idact";

mysql_query($sql,$conn);


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
</body>
</html>