 // A form validation syntax in JavaScript

 const button = document.querySelector(".submit")
 const password = document.querySelector(".password")
 const email = document.querySelector(".email")
 const password2 = document.querySelector(".password2")

 button.addEventListener("click", function(e) {
 	e.preventDefault();

 	//Validation 1
 	if (password.value.length > 10) {
 		alert("Password length is more than 10 characters!");
 	}

 	//Validation 2
 	const matchEmail = /^\w+([\.-]?\w+)*@\w+[\.-]?\w+)*(\. \w{2,3})+$/;
 	if (email.value.match(matchEmail)) {
 		console.log("Good!");
 	} else {
 		alert ("Invalid Email!!");
 	} 
 
                   //Validation 2 details:
  /*----------------------------------------------------*/
  
 
 	 

/*1.inside your script tags

function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;

}
in your textfield:

<input type="text" onblur="validateEmail(this);" /> */
     

  
  
/*2.First off - I'd recommend the email validator RegEx from Hexillion: http://hexillion.com/samples/

It's pretty comprehensive - :

^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$
I think you want a function in your JavaScript like:

function validateEmail(sEmail) {
  var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

  if(!sEmail.match(reEmail)) {
    alert("Invalid email address");
    return false;
  }

  return true;

}
In the HTML input you need to trigger the event with an onblur - the easy way to do this is to simply add something like:

<input type="text" name="email" onblur="validateEmail(this.value);" />
Of course that's lacking some sanity checks and won't do domain verification (that has to be done server side) - but it should give you a pretty solid JS email format verifier.

Note: I tend to use the match() string method rather than the test() RegExp method but it shouldn't make any difference.*/



 	//Validation 3
 	if (password.value == password2.value) {
 		console.log("Good!");
 	} else {
 		alert ("Passwords do not match!!");
 	} 
 } );


 	

