<?php
	if(!$_POST['usuario']||!$_POST['clave']){
		header("Location: login.php");
	}
?>

<?php ob_start(); ?>
		
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
	<link rel="stylesheet" href="css/reglas.css" type="text/css"/> 
	<title>Verifica Login</title>
	
</head>
<body>
	
	<?php
		include 'config.php';
		$conn = mysql_connect($hostdb, $usuariodb, $clavedb);
		if (!$conn)     
			die('No me pude conectar: ' . mysql_error());
		if (!mysql_select_db($nombredb))    
			die("No pude seleccionar la base de datos ".$nombredb);	
		$numusuario=$_POST['usuario'];
		$clave=$_POST['clave'];
		//quitando diagonales inv.
		$numusuario=stripslashes($numusuario);
		$clave=stripslashes($clave);
		//quita significado a los caracteres que tengan sig. en mysql
		$numusuario=mysql_real_escape_string($numusuario);
		$clave=mysql_real_escape_string($clave);
		
		$sql= "SELECT * FROM usuarios WHERE cuenta='$numusuario'and clave='$clave'";
		$result = mysql_query($sql); //null si no se ejecuta la sentencia 
		if (!$result)  
			die("La consulta fallo!" . mysql_error());

		if (mysql_num_rows($result)==1){
			//creando la variable de sesion
			session_start();
			$_SESSION['usuario']= $numusuario ;
			header("Location: menu.php");
		}
		else {
			echo "<h1> usuario o clave incorrecta </h1>";
			echo '<a href ="login.php"> Intentelo nuevamente </a>';
		}
	 ob_end_flush();
	 
	?>
	  
	
	
</body>
</html>
