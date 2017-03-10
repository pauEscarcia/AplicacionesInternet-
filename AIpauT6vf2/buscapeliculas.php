<?php
	//verificacion de session
	SESSION_start();
	if(!$_SESSION['usuario']){
		header('Location: login.php');
	}
	echo'<fieldset>';
		echo'<legend>Selecciona el actor deseado:</legend>';
	echo'</fielset>';
	//conexion a la db
	include 'config.php';
	$conn = mysql_connect($hostdb, $usuariodb, $clavedb);
	if (!$conn)     
		die('No me pude conectar: ' . mysql_error());
	if (!mysql_select_db($nombredb))    
		die("No pude seleccionar la base de datos ".$nombredb);
			
	//consulta los datos del actor por busqueda de cadena 
	$cadena=$_POST['busqueda'];
	$sql= "SELECT idpelicula,titulo FROM pelicula WHERE titulo LIKE '%$cadena%'";
	$result = mysql_query($sql); 
	if (!$result)  
		die("La consulta fallo!" . mysql_error());
 	//creacion del select
	$numregistros= mysql_num_rows($result);
	echo "<select name=\"name\" id=\"name\">\n";
   	for($i=0; $i<$numregistros;$i++){
		$registro=mysql_fetch_row($result);
		echo '<option value="'.$registro[0].'">'.$registro[1].'</option>  ';
	}
	echo '</select>';
	
	ob_end_flush();
			
	mysql_free_result($result);
	mysql_close($conn);
?>
<input type="button" value="Seleccionar" id="Seleccionar" onclick='ajaxResult2("obtenpelicula.php?","busq2");'/> 
	&nbsp; &nbsp;
	<div id="resultadoseleccionar" class="ajaxResult"></div>	
	</br>	
