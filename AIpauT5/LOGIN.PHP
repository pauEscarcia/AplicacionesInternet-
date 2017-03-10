<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
	<title>Login</title>
	<script src="scripts/MD5.js" type="text/javascript"></script> 
	<link rel="stylesheet" href="css/reglas.css" type="text/css"/> 
	
</head>
<body>
	<h1>Registro</h1>
	 <form name="formalogin" method="post" action="verificalogin.php" class="contacto" >
		<b> login del usuario </b> <br/>
		<label for="usuario"> Usuario: </label>
		<input type="text" id="usuario" name="usuario"/> <br/>
		<label for="clave"> Clave: </label>
		<input type="password" id="clave" name="clave"/> <br/> <br/>
		<input type="submit" value="login" onclick="encriptapassword('clave')";/>
	</form>
</body>
</html>