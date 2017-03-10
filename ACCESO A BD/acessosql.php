<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
<title>Acceso a Bases de Datos MySQL</title>
</head>
<body>
<?php
include 'config.php';
$conn = mysql_connect($hostdb, $usuariodb, $clavedb);
if (!$conn) {
    die('No me pude conectar: ' . mysql_error());
}
if (!mysql_select_db($nombredb))
    die("No pude seleccionar la base de datos ".$nombredb);
$result = mysql_query("show tables");
if (!$result) {
    die("La consulta para mostrar la lista de tablas fallo");
}
$numregistros = mysql_num_rows($result);
echo "<h1>Acceso a bases de datos MySQL</h1>"; 	
echo "<h2>Selecciona una tabla:<h2>"; 
echo "<form action=\"muestratabla.php\" method=\"post\">";
echo "<select name=\"tabla\" size=\"1\">";
for($i=0; $i<$numregistros; $i++) {
	$nombretabla=mysql_fetch_row($result);
	echo "<option value=\"{$nombretabla[0]}\" >{$nombretabla[0]}</option>";
}
echo "</select>";
echo "<div><input type=\"submit\" value=\"Enviar\"></div>";
echo "</form>";
	
mysql_free_result($result);
mysql_close($conn);
?>
</body>
</html>