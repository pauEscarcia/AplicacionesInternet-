<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
<title>Vista de Tabla de Bases de Datos MySQL</title>
</head>
<body>
<?php
include 'config.php';
$tabla = $_POST["tabla"];
$conn = mysql_connect($hostdb, $usuariodb, $clavedb);
if (!$conn)     
	die('No me pude conectar: ' . mysql_error());
if (!mysql_select_db($nombredb))    
	die("No pude seleccionar la base de datos ".$nombredb);	
$result = mysql_query("SELECT * FROM $tabla");
if (!$result)  die("La consulta para mostrar los campos de la tabla fallo!" . mysql_error());
$numcampos = mysql_num_fields($result);
echo "<h1>Vista de Tabla de Bases de Datos MySQL</h1>";
echo "<h2>Campos de la tabla: {$tabla}</h2>";
echo '<table border="1"><tr>';
// Mostramos encabezados de la tabla
for($i=0; $i<$numcampos; $i++) {	
	$campo = mysql_fetch_field($result);	
	echo "<th>{$campo->name}</th>";
}
echo "</tr>\n";
while($registro = mysql_fetch_row($result)) {	
	echo "<tr>";	
	// $registro es un arreglo... usamos foreach( .. ) para poner cada elemento
	// de $registro en la variable $celda
	foreach($registro as $celda)		
		echo "<td>$celda</td>";	
	echo "</tr>\n";
}
echo "</table>\n";
mysql_free_result($result);
mysql_close($conn);
?>
</body>
</html>