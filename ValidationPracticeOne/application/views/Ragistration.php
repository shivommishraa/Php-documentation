<!DOCTYPE html>
<html>
<head>
	<title>Registration Validation Form</title>
	
	<link rel = "stylesheet" type = "text/css" 
         href = "<?php echo base_url(); ?>css/style.css"> 

          <script type = 'text/javascript' src = "<?php echo base_url(); 
         ?>js/jscript.js"></script> 
</head>
<body>
	
<FORM method="post" action="">
	<center>
		<!------------Using Validation with Server Side in Codeignter----------->
	<!--	<table>
			<?php echo Validation_errors();  ?>
			<caption>Registration Form</caption>
			<tbody>
				<tr>
					<td><label for="name">Name</label></td>
					<td><input type="text" name="name" value="<?php echo set_value('name'); ?>"></td>
				</tr>
				<tr>
					<td><label for="fname">F'Name</label></td>
					<td><input type="text" name="fname"></td>
				</tr>
				<tr>
					<td><label for="mname">M'Name</label></td>
					<td><input type="text" name="mname"></td>
				</tr>
				<tr>
					<td><label for="email">Email</label></td>
					<td><input type="text" name="email"></td>
				</tr>
				<tr>
					<td><label for="password">Password</label></td>
					<td><input type="text" name="password"></td>
				</tr>
				<tr>
					<td><label for="Confirmpassword">Confirm Password</label></td>
					<td><input type="text" name="confirmpassword"></td>
				</tr>
				<tr>
					<td><label for="address">Address</label></td>
					<td><textarea name="address"></textarea></td>
				</tr>
				<tr>
					<td><label for="image">Image</label></td>
					<td><input type="file" name="image"></td>
				</tr>
				
				
				<tr>

					<td><input type="submit" name="submit"></td>
				</tr>
			</tbody>

			<!----------------------Using Validation with Java Script------------------->

		</table> 
		<table>
			<?php echo Validation_errors();  ?>
			<caption>Registration Form</caption>
			<tbody>
				<tr>
					<td><label for="name">Name</label></td>
					<td><input type="text" name="name" id="name" value=""></td>
					<td><span id="n"></span></td>
				</tr>
				<tr>
					<td><label for="fname">F'Name</label></td>
					<td><input type="text"id="fname" name="fname"></td>
						<td><span id="f"></span></td>
				</tr>
				<tr>
					<td><label for="mname">M'Name</label></td>
					<td><input type="text" id="mname" name="mname"></td>
						<td><span id="m"></span></td>
				</tr>
				<tr>
					<td><label for="email">Email</label></td>
					<td><input type="text" id="email" name="email"></td>
						<td><span id="e"></span></td>
				</tr>
				<tr>
					<td><label for="password">Password</label></td>
					<td><input type="text" id="password" name="password"></td>
					<td><span id="p"></span></td>
				</tr>
				<tr>
					<td><label for="Confirmpassword">Confirm Password</label></td>
					<td><input type="text" id="confirmpassword" name="confirmpassword"></td>
					<td><span id="cp"></span></td>
				</tr>
				<tr>
					<td><label for="address">Address</label></td>
					<td><textarea id="address" name="address"></textarea></td>
					<td><span id="a"></span></td>
				</tr>
				<tr>
					<td><label for="image">Image</label></td>
					<td><input id="image" type="file" name="image"></td>
					<td><span id="i"></span></td>
				</tr>
				
				
				<tr>
					<td><input type="button" value="Submit" onclick="javascript:test()" name="submit"></td>
				</tr>
			</tbody>
		</table>
	</center>
</FORM>
</body>
</html>