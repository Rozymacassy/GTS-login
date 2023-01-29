function validateForm() {

      //collect form data in JavaScript variables   
      let name1 = document.getElementById("fname").value;  
      let name2 = document.getElementById("lname").value;
      let email = document.getElementById("email").value;
      let pw1 = document.getElementById("pword1").value;  
      let pw2 = document.getElementById("pword2").value; 

          //check empty first name field  
    if(name1 == "") {  
      document.getElementById("empty").innerHTML = "**Fill the first name**"; 
      return false;  
    }   

    // if(name2 == "") {  
    //   document.getElementById("empty").innerHTML = "**Fill the last name**"; 
    //   return false;  
    // }   
    

        //check empty password field  
        if(pw1 == "") {  
          document.getElementById("mssg1").innerHTML = "**Fill the password please!";  
          return false;  
        }  
        
        //check empty confirm password field  
        if(pw2 == "") {  
          document.getElementById("mssg2").innerHTML = "**Enter the password please!";  
          return false;  
        }   
         
        //minimum password length validation  
        if(pw1.length < 8) {  
          document.getElementById("mssg1").innerHTML = "**Password length must be atleast 8 characters";  
          return false;  
        }  
      
        //maximum length of password validation  
        if(pw1.length > 15) {  
          document.getElementById("mssg1").innerHTML = "**Password length must not exceed 15 characters";  
          return false;  
        }  

            
        if(pw1 != pw2) {  
          document.getElementById("mssg2").innerHTML = "**Passwords are not same";  
          return false;  
        } else {  
        
          document.write("form has been submitted successfully");  
        }  
  }