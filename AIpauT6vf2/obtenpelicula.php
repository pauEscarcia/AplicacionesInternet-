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
	$idpel=$_POST['idpelicula'];

	$sql=mysql_query("SELECT * FROM pelicula WHERE idpelicula=$idpel",$conn);

	$row = mysql_fetch_array($sql);

	//valores de la consulta
	$tit=$row['titulo'];
	$fest=$row['fechaestreno'];
	$dur=$row['duracion'];
	$urlp=$row['urlpelicula'];
	$urli=$row['urlimagen'];
  
  $sql_resg=mysql_query("SELECT nombregenero from generospelicula gp join genero g on (gp.idgenero = g.idgenero) where gp.idpelicula = $idpel");
  while($rowg = mysql_fetch_array($sql_resg))
  {
	   $genero[]=$rowg['nombregenero'];
     
  }
  $sql_resc=mysql_query("SELECT nombrecompania FROM companiaspelicula cp join compania c ON ( cp.idcompania = c.idcompania ) WHERE cp.idpelicula = $idpel");
  while($rowg=mysql_fetch_array($sql_resc))
  {
	  $compania[]=$rowg['nombrecompania'];
  }
  $sql_resp=mysql_query("SELECT * FROM reparto WHERE idpelicula=$idpel");
  while($rowg=mysql_fetch_array($sql_resp))
   {
      $nprod[]=$rowg['papel'];
      
   }

?>
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>   
	<script src="scripts/validar2.js" type="text/javascript"></script>  
  <script src="scripts/ajax-utils2.js" type="text/javascript"></script>  
	</head>
<body>
	<fieldset>
			<legend> Datos de la pelicula: </legend>
			<label>Titulo: </label>
			<input type="text" id="titulo" name="titulo" size="60" maxlength="50" value="<?php echo $tit; ?>"/><br/> 
			
			<label>Fecha de Estreno: </label>
			<label class="formato">formato aaaa-mm-dd: </label>
			<input type="text" id="fechaestreno" name="fechaestreno" size="10" maxlength="10"  value="<?php echo $fest; ?>"/> &nbsp;
			
			<label>Duraci&oacute;n: </label>
			<input type="text" id="duracion" name="duracion" size="60" maxlength="60"  value="<?php echo $dur; ?>" /><br/> 		
			
      <label>url pelicula: </label>
			<input type="urlpelicula" id="duracion" name="urlpelicula" size="60" maxlength="60"  value="<?php echo $urlp; ?>" /><br/> 
			
			<label> URL Imagen de pelicula: </label>
			<input type="text" id="urlimagen" name="urlimagen" size="60"  value="<?php echo $urli; ?>" />
      
      <input type="button" value="Ver" id="ver" name="ver" onclick="validar();"/>
			<div id="divimagen"></div>
			
      
      <label>Genero de pelicula: </label>
      
			<textarea id="genero" name="genero" rows="6" cols="40" >
        <?php 
        if(isset($genero)){foreach($genero as $valor1)echo $valor1."\n";}
        ?>
       </textarea>
		
		   <label>Compa&ntilde;ias productoras : </label>
			<textarea id="compania" name="compania" rows="6" cols="40" >
        <?php if(isset($compania)){foreach($compania as $valor1)echo $valor1."\n";}?>
      </textarea>
       	<br/>      
      <label>Reparto: </label>
      <textarea id="prod" name="prod" rows="6" cols="40" >
        <?php if(isset($nprod)){foreach($nprod as $valor2)echo $valor2."\n";}?>
      </textarea>
		
    
			<br/> <br/>
			<input type="button" value="Buscar otra pelicula" id="buscarpelicula" onclick="nuevo();"/>
		
		</fieldset>
		
</body>
</html>
