<?php
	
	SESSION_start();
	if(!$_SESSION['usuario']){
		header('Location: login.php');
	}	
?>
<?php
	include 'config.php';
	$conn = mysql_connect($hostdb, $usuariodb, $clavedb);
	if (!$conn)     
		die('No me pude conectar: ' . mysql_error());
	if (!mysql_select_db($nombredb))    
		die("No pude seleccionar la base de datos ".$nombredb);		

	//consulta los datos del actor por su id
	$idact=$_POST['idactor'];

	$sql=mysql_query("SELECT * FROM actor WHERE idactor=$idact",$conn);

	$row = mysql_fetch_array($sql);

	//valores de las consultas
	$nom=$row['nombre'];
	$fnac=$row['fechanacimiento'];
	$lnac=$row['lugarnacimiento'];
	$fmue=$row['fechamuerte'];
	$urla=$row['urlactor'];
	$urlia=$row['urlimagenactor'];
?>
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>   
	<script language="JavaScript"> 
			function muestra_img() {
			var yo= document.getElementById('urlimagenactor').value;
			document.getElementById('divimagen').innerHTML=("<img src='yo' width='93' height='80' />"); 
			 
			}
		 </script>
	<script src="scripts/validar.js" type="text/javascript"></script>  

	</head>
<body>
	<fieldset>
			<legend> Datos del Actor: </legend>
			<label>Nombre: </label>
			<input type="text" id="nombre" name="nombre" size="60" maxlength="50" value="<?php echo $nom; ?>"/><br/> 
			<div id="nom"></div>
			
			<label>Fecha de Nacimiento: </label>
			<label class="formato">formato aaaa-mm-dd: </label>
			<input type="text" id="fechanacimiento" name="fechanacimiento" size="10" maxlength="10"  value="<?php echo $fnac; ?>"/> &nbsp;
			<div id="an"></div>		
	
			<label>Lugar de Nacimiento: </label>
			<input type="text" id="lugarnacimiento" name="lugarnacimiento" size="60" maxlength="60"  value="<?php echo $lnac; ?>" /><br/> 		
			<div id="nacimiento"></div>			

		
      
			<!--input type="checkbox" id="fallecio" name="fallecio" /-->
      
    <?php
        if($fmue=="0000-00-00" ||$fmue==""){
           $d="No Murio (: (: (: (: (: (:";
          
        }
      else{
          $d="Murio x.x x.x x.x x.x";
         
      } 
      echo '<label style="COLOR: #000000;">'.$d.' </label>'; 
       //echo'<script type=\"text/javascript\">';
       //echo 'document.getElementById("fallecio").checked="'.$d.'";';
       //echo '</script>';  
     
			 ?>
       
  
			
			<label>Fecha de muerte:</label>
			<label class="formato">formato aaaa-mm-dd: </label>
			<input type="text" id="fechamuerte" name="fechamuerte" size="10" maxlength="10"  value="<?php echo $fmue; ?>" />
			<div id="murio"></div>			
			
			<label> URL del actor: </label>
			<input type="text" id="urlactor" name="urlactor" size="60"  value="<?php echo $urla; ?>" />
			<div id="urls"></div>
			 <br/>
						
			<label> URL Imagen del Actor: </label>
			<input type="text" id="urlimagenactor" name="urlimagenactor" size="60"  value="<?php echo $urlia; ?>" />
			<div id="urlim"></div>
		

			<input type="button" value="Ver" id="ver" name="ver" onclick="validar();"/>
			<div id="divimagen"></div>
			<br/> <br/>		
			<input type="button" value="Buscar otro actor" id="buscaractor" onclick="nuevo();"/>
			

			
			<input type="button" value="Actualizar" id="actualizar" onclick='ajaxResult3("actualizacionactor.php");validaActor();'/>
			
			<!--
			<input type="submit" value="Actualizar" id="actualizar" onclick='  ajaxResult3("actualizacionactor.php");veremos();'/>
			-->
		</fieldset>
		
</body>
</html>