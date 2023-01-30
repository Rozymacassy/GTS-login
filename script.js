function validateForm() {

      //collect form data in JavaScript variables   
      let name1 = document.getElementById("fname").value;  
      let name2 = document.getElementById("lname").value;
      let user = document.getElementById("uname").value;
      let email = document.getElementById("email").value;
      let pw1 = document.getElementById("pword1").value;  
      let pw2 = document.getElementById("pword2").value; 

          //check empty first name field  
    if(name1 == "") {  
      document.getElementById("empty").innerHTML = "**Fill the first name**"; 
      return false;  
    }  
    
    // check min firstname length

         if(name1.length < 2 ) {  
          document.getElementById("empty").innerHTML = "**First name should not be less than 2**"; 
          return false;  
        } 

            // check max firstname length

            if(name1.length > 20 ) {  
              document.getElementById("empty").innerHTML = "**First name should not be more than 20**"; 
              return false;  
            }

                
    // check min lastname length
     if(name2 == "") {  
      document.getElementById("empty1").innerHTML = "**Fill the last name**"; 
      return false;  
    }   

         if(name2.length < 2 ) {  
          document.getElementById("empty1").innerHTML = "**Last name should not be less than 2**"; 
          return false;  
        } 

            // check max lastname length

            if(name2.length > 20 ) {  
              document.getElementById("empty1").innerHTML = "**Last name should not be more than 20**"; 
              return false;  
            }
                
    // check min username length

    if(user == "") {  
      document.getElementById("user").innerHTML = "**Fill the User name**"; 
      return false;  
    }   


    if(user.length < 6 ) {  
      document.getElementById("user").innerHTML = "**User name should not be less than 6**"; 
      return false;  
    } 

        // check max username length

        if(user.length > 15 ) {  
          document.getElementById("user").innerHTML = "**User name should not be more than 15**"; 
          return false;  
        }

         //check min email length  
    if(email.length < 10 ) {  
      document.getElementById("empty2").innerHTML = "**Email should not be less than 10**"; 
      return false;  
    }  

    
         //check max email length  
         if(email.length > 30 ) {  
          document.getElementById("empty2").innerHTML = "**Email should not be more than 30**"; 
          return false;  
        } 
    

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
        if(pw1.length > 20) {  
          document.getElementById("mssg1").innerHTML = "**Password length must not exceed 20 characters";  
          return false;  
        }  

            
        if(pw1 != pw2) {  
          document.getElementById("mssg2").innerHTML = "**Passwords are not same";  
          return false;  
        } else {  
        
          document.write("form has been submitted successfully");  
        }  
  }