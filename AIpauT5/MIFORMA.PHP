//<?php
//	SESSION_start();
//	if(!$_SESSION['usuario']){
//		header('Location: login.php');
//	}
	
//?>

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
	<h1>Forma de captura</h1>
	 <form name="formalogin" id="miform" method="post" class="contacto" action="registrapelicula.php">
		<label for="titulo"> *Titulo: </label>    <input type="text" id="titulo" name="titulo" onkeyup="hazmayuscula(this);"  size="50" maxlength="20"/> <br/>
		<p id="title" class="valida"></p>
		
		<label for="director"> *Director: </label><input type="text" id="director" name="director" onkeyup="hazmayuscula(this);"  size="50" maxlength="20"/> <br/> 
		<p id="directo" class="valida"></p>
		
		<label for="produccion"> *A&ntilde;o de producci&oacute;n (1900-2012): </label><input type="text" id="produccion" name="produccion"  size="4"  maxlength="4"/><br/>
		
		<p id="produ" class="valida"></p>
		
		<label for="genero"> Genero: </label> <br/> 
		<?php 
			include 'config.php';
			$conn = mysql_connect($hostdb, $usuariodb, $clavedb);
			if (!$conn)     
				die('No me pude conectar: ' . mysql_error());
			if (!mysql_select_db($nombredb))    
				die("No pude seleccionar la base de datos ".$nombredb);	
			$sql= "SELECT * FROM generos";
			$result = mysql_query($sql); 
			if (!$result)  
				die("La consulta fallo!" . mysql_error());
			$numregistros= mysql_num_rows($result);
			
			echo "<select name=\"pau\">\n";
   			//echo "<option value=\"\"> Seleccione un Item </option>\n";
 
			for($i=0; $i<$numregistros;$i++){
			$registro=mysql_fetch_row($result);
			
			echo '<option value="'.$registro[0].'">'.$registro[1].'</option>  ';
			//echo '<select name="cars"> <option value="1">pau </option> </select>';
			}
			echo '</select> <br/> <br/> ';
			ob_end_flush();
			mysql_free_result($result);
			mysql_close($conn);
		?>

		<label for="clasifica"> *Clasificaci&oacute;n: </label> <br/> 
		<?php 
			include 'config.php';
			$conn = mysql_connect($hostdb, $usuariodb, $clavedb);
			if (!$conn)     
				die('No me pude conectar: ' . mysql_error());
			if (!mysql_select_db($nombredb))    
				die("No pude seleccionar la base de datos ".$nombredb);	
			$sql= "SELECT * FROM clasificaciones";
			$result = mysql_query($sql); 
			if (!$result)  
				die("La consulta fallo!" . mysql_error());
			$numregistros= mysql_num_rows($result);
			for($i=0; $i<$numregistros;$i++){
			$registro=mysql_fetch_row($result);
			echo '<input type="radio" id=".$registro[0]."name="clasificacion" value="'.$registro[0].'">'.$registro[1].'<br/>';
			}
			ob_end_flush();
			mysql_free_result($result);
			echo'<div id="clas" class="valida"></div>';
			echo '<input type="reset" value="Borrar" onclick="pregunta()"/>';
			echo'<input type="button" value="Enviar" id="enviar" onclick="validar()"/> <br/>';
			echo '<a href="logout.php"> Terminar sesi&oacute;n </a> <br/>';
	
		?>
		
	
		
		
		
	</form>
</body>
</html>