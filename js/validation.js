function login(){


   /*

   1. check email or passwd values should not be null  

   2. check email id is proper format   @gmail.com 

   3. Dabatabse calling --- check emailid/passwd combinations 


null
undefined
NaN
empty string ("")
0
false

   */
    // when calling, the values you pass are called arguments 
   	var emailId = document.getElementById('email').value
   	var passwd = document.getElementById('pass').value

   	var result1 = checkEmailPasswdNullValues(emailId, passwd)

   	var result2 = checkEmailFormat(emailId)

   	var result3 = checkEmailPasswdInDatabase(emailId, passwd)

     if( result1 == true && result2 == true && result3 == true)
   	 	alert("Hey! Your login is successful")
   	 else 
   	 	alert("Hey! Your login is not successful")

   	}

   	// function addition(x, y){  //x,y parameters 

   	// 	return x + y 
   	// }
   	

    function checkEmailPasswdNullValues(email, passwd){

        if( email.length >= 8 && passwd.length >= 6){
    		return true
        }
    	else {
    		return false; 
    	}
    }

    function checkEmailFormat(email){

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

    }

    function checkEmailPasswdInDatabase(emailId, passwd)
    {

    	/*
            database calling from javascript 
    	*/

    	return false;
    }
