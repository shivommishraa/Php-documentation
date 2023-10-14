function test() { 
 //  alert('test I am Java Script.....'); 
   //Start code for Name validation  
		var name=document.getElementById("name").value;
		var pn=/^[a-z A-Z]{2,22}$/; 
		
		
		if(name=="")
		{
			document.getElementById("n").innerHTML="Fill the Name";
			document.getElementById("n").style.color="red";
			document.getElementById("name").style.border="1px solid red";
		}
		else if(!pn.test(name))
		{
			document.getElementById("n").innerHTML="Invalid Name";
			document.getElementById("n").style.color="red";
			document.getElementById("name").style.border="1px solid red";
		
		}
		else
		{
			document.getElementById("n").innerHTML="";
			document.getElementById("n").style.color="";
			document.getElementById("name").style.border="";
		
		}	//End code for Name validation  

//-----------------------------------------------------------------------------------------
		// Start Code for fname Validation

		var fname=document.getElementById("fname").value;
		
		if(fname=="")
		{
			document.getElementById("f").innerHTML="Fill the F'Name";
			document.getElementById("f").style.color="red";
			document.getElementById("fname").style.border="1px solid red";
		}
		else if(!pn.test(fname))
		{
			document.getElementById("f").innerHTML="Invalid F'Name";
			document.getElementById("f").style.color="red";
			document.getElementById("fname").style.border="1px solid red";
		
		}
		else
		{
			document.getElementById("f").innerHTML="";
			document.getElementById("f").style.color="";
			document.getElementById("fname").style.border="";
		
		}	//End code for fName validation  

	//----------------------------------------------------------------------

	// Start Code for mname Validation

		var mname=document.getElementById("mname").value;
		
		if(mname=="")
		{
			document.getElementById("m").innerHTML="Fill the M'Name";
			document.getElementById("m").style.color="red";
			document.getElementById("mname").style.border="1px solid red";
		}
		else if(!pn.test(mname))
		{
			document.getElementById("m").innerHTML="Invalid M'Name";
			document.getElementById("m").style.color="red";
			document.getElementById("mname").style.border="1px solid red";
		
		}
		else
		{
			document.getElementById("m").innerHTML="";
			document.getElementById("m").style.color="";
			document.getElementById("mname").style.border="";
		
		}	//End code for MName validation  

	//-----------------------------------------------------------------------


	// Start Code for email Validation

		var email=document.getElementById("email").value;
		var epn=/^[a-zA-Z ,.&@0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/;
		
		if(email=="")
		{
			document.getElementById("e").innerHTML="Fill the Email";
			document.getElementById("e").style.color="red";
			document.getElementById("email").style.border="1px solid red";
		}
		else if(!epn.test(email))
		{
			document.getElementById("e").innerHTML="Invalid Email";
			document.getElementById("e").style.color="red";
			document.getElementById("email").style.border="1px solid red";
		
		}
		else
		{
			document.getElementById("e").innerHTML="";
			document.getElementById("e").style.color="";
			document.getElementById("email").style.border="";
		
		}	//End code for Email validation  

	//-----------------------------------------------------------------------
		//Start code for Password validation 
		
		var password=document.getElementById("password").value;
		if(password=="")
		{
		document.getElementById("p").innerHTML="Enter Password";
		document.getElementById("p").style.color="red";
		document.getElementById("password").style.border="1px solid red";
		}
		else
		{
			document.getElementById("p").innerHTML="";
			document.getElementById("p").style.color="";
			document.getElementById("password").style.border="";
		
		}//End code for Password validation
//=======================================================================
//Start code for Password validation 
		
		var confirmpassword=document.getElementById("confirmpassword").value;
		if(confirmpassword=="")
		{
		document.getElementById("cp").innerHTML="Enter Confirm Password";
		document.getElementById("cp").style.color="red";
		document.getElementById("confirmpassword").style.border="1px solid red";
		}
		else if(confirmpassword!=password)
		{
		document.getElementById("cp").innerHTML="Not match password";
		document.getElementById("cp").style.color="red";
		document.getElementById("confirmpassword").style.border="1px solid red";
		}
		else
		{
			document.getElementById("cp").innerHTML="";
			document.getElementById("cp").style.color="";
			document.getElementById("confirmpassword").style.border="";
		
		}//End code for Password validation
//=======================================================================

		//Start code for Address validation 
		
		var address=document.getElementById("address").value;
		if(address=="")
		{
		document.getElementById("a").innerHTML="Enter Password";
		document.getElementById("a").style.color="red";
		document.getElementById("address").style.border="1px solid red";
		}
		else
		{
			document.getElementById("a").innerHTML="";
			document.getElementById("a").style.color="";
			document.getElementById("address").style.border="";
		
		}//End code for address validation
//=======================================================================

//Start code for Image validation 
		
		var image=document.getElementById("image").value;
		if(image=="")
		{
		document.getElementById("i").innerHTML="Choose Image";
		document.getElementById("i").style.color="red";
		document.getElementById("image").style.border="1px solid red";
		}
		else
		{
			document.getElementById("i").innerHTML="";
			document.getElementById("i").style.color="";
			document.getElementById("image").style.border="";
		
		}//End code for Image validation
//=======================================================================

//-------------------- Code All check --------------------------------- 
		
		var image=document.getElementById("image").value;
		if(email!=""&&image!=""&&name!=""&&fname!=""&&mname!=""&&address!=""&&password!=""&&confirmpassword!="")
		{
		// document.getElementById("i").innerHTML="Choose Image";
		// document.getElementById("i").style.color="red";
		// document.getElementById("image").style.border="1px solid red";
		alert('Are you sure your data is right autherwise you cannot edit the data.');
		
		//========================Important============================
		//print(); call for print the all data
		//=============================================================

			document.write("Data has been successfully submitted!!");

		}





}