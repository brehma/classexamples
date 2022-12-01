function validateForm(){
  var FirstName = document.getElementById("FirstName").value;
  var LastName = document.getElementById("LastName").value;
  var EMail = document.getElementById("EMail").value;
  var Phone = document.getElementById("Phone").value;  
  var Username = document.getElementById("Username").value;
  var Password = document.getElementById("Password").value;
  var Address = document.getElementById("Address").value;
  var City = document.getElementById("City").value;
  var State = document.getElementById("State").value;
  var Country = document.getElementById("Country").value;
  var Zipcode = document.getElementById("Zipcode").value;  
  var errorMessages1 =true;
  var errorMessages2 =true;
  var errorMessages3 =true;
  var errorMessages4 =true;
  var errorMessages5 =true;
  var errorMessages6 =true;
  var errorMessages7 =true;
  var errorMessages8 =true;
  var errorMessages9 =true;
  var errorMessages10 =true;
  var errorMessages11 =true;

  if (FirstName == "" || FirstName==="null") {
    document.getElementById("errorMessages1").innerHTML = "Please enter your first name.";
  } 
  else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(FirstName) === false || FirstName.length > 20 ){
      document.getElementById("errorMessages1").innerHTML = "Please enter a valid first name. Maximum 20 alphabetic characters.";
    } 
    else {
      document.getElementById("errorMessages1").innerHTML = "";
      errorMessages1 = false;
    }
  }
  
  if (LastName == "" || LastName==="null") {
    document.getElementById("errorMessages2").innerHTML = "Please enter your last name.";
  } 
  else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(LastName) === false || LastName.length > 50) {
      document.getElementById("errorMessages2").innerHTML = "Please enter a valid last name. Maximum 50 alphabetic characters. ";
    } 
    else {
      document.getElementById("errorMessages2").innerHTML = "";
      errorMessages2 = false;
    }
  }
  
  if (EMail == "" || EMail==="null") {
    document.getElementById("errorMessages3").innerHTML = "Please enter your Email.";
  } 
  else {
    var atpos = EMail.indexOf("@");
    var dotpos = EMail.lastIndexOf(".");             
    if(atpos< 1 || dotpos<atpos+2 || dotpos+2>=EMail.length) {
      document.getElementById("errorMessages3").innerHTML = "Please enter a valid Email.";
    } 
    else {
      document.getElementById("errorMessages3").innerHTML = "";
      errorMessages3 = false;
    }
  }

  if (Phone == "" || Phone==="null") {
    document.getElementById("errorMessages4").innerHTML = "Please enter your phone number.";
  } 
  else {
    var numbers=/^[0-9]+$/;               
    if(numbers.test(Phone) === false || Phone.length > 15) {
      document.getElementById("errorMessages4").innerHTML = "Please enter a valid phone number. Maximum 15 digits. ";
    } 
    else {
      document.getElementById("errorMessages4").innerHTML = "";
      errorMessages4 = false;
    }
  }

  if (Username == "" || Username==="null") {
    document.getElementById("errorMessages5").innerHTML = "Please enter your username.";
  } 
  else {             
    if(Username.length > 12) {
      document.getElementById("errorMessages5").innerHTML = "The username cannot be greater than 12 characters.";
    }
    else {
      document.getElementById("errorMessages5").innerHTML = "";
      errorMessages5 = false;
    }
  }

  if (Password == "" || Password==="null") {
    document.getElementById("errorMessages6").innerHTML = "Please enter your password.";
  } 
  else {             
    if(Password.length > 7) {
      document.getElementById("errorMessages6").innerHTML = "The password cannot be greater than 7 characters.";
    } 
    else {
      document.getElementById("errorMessages6").innerHTML = "";
      errorMessages6 = false;
    }
  }

  if (Address == "" || Address==="null") {
    document.getElementById("errorMessages7").innerHTML = "Please enter your address.";
  } 
  else {             
    document.getElementById("errorMessages7").innerHTML = "";
    errorMessages7 = false;
  }

  if (City == "" || City==="null") {
    document.getElementById("errorMessages8").innerHTML = "Please enter your city.";
  }
  else {             
    document.getElementById("errorMessages8").innerHTML = "";
    errorMessages8 = false;
  }

  if (State==="000") {
    document.getElementById("errorMessages9").innerHTML = "Please enter your state.";
  } 
  else {             
    document.getElementById("errorMessages9").innerHTML = "";
    errorMessages9 = false;
  }
  
  if (Country==="000") {
    document.getElementById("errorMessages10").innerHTML = "Please enter your country.";
  } 
  else {             
    document.getElementById("errorMessages10").innerHTML = "";
    errorMessages10 = false;
  }
  
  var numbers=/^[0-9]+$/; 
  if ((Country==="USA") && (Zipcode === "null" || Zipcode==="" || Zipcode.length > 5 ||!Zipcode.match(numbers))) {
    document.getElementById("errorMessages11").innerHTML = "Please enter your zip code. The zip code cannot be greater than 5 digits.";
  }
  else {  
    document.getElementById("errorMessages11").innerHTML = "";
    errorMessages11 = false;
  }
  
  if(errorMessages1  == true) {
    return false;
  }
  
  if(errorMessages2 == true) {
    return false;
  }
  
  if(errorMessages3 == true) {
    return false;
  } 
  
  if(errorMessages4 == true) {
    return false;
  } 
  
  if(errorMessages5 == true) {
    return false;
  } 
  
  if(errorMessages6 == true) {
    return false;
  }
  
  if(errorMessages7 == true) {
    return false;
  } 
  if(errorMessages8 == true) {
    return false;
  } 
  
  if(errorMessages9 == true) {
    return false;
  } 
  
  if(errorMessages10 == true) {
    return false;
  } 
  
  if(errorMessages11 == true) {
    return false;
  } 
}
