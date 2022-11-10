function isValid() {
  var errorMessages = "";
  var validfirst = firstName(document.getElementById("FirstName").value)
    if (!validfirst)
      errorMessages+="<p>The first name is required and cannot be greater than 20 characters</p>";
      document.getElementById("errorMessages").innerHTML = errorMessages;
	//If any of the fields were not valid, errorMessage will not be ""
	return errorMessages.length === 0;
        /*firstName() &&
       LastName() &&
       Email()
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;*/
}
FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;
    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";
    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };
    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;
    //5) return status of each field
    return (validFirstname);
}
function LastName(){
//1) Create variable
var validlastName=false;
//2) read value from HTML
var Lastname = document.getElementById("LastName").value;
var errorMessages = "";
//3) Do validation
if (Lastname==="null" || Lastname==="" || Lastname.length > 50 ) {
        errorMessages += "<p>The Last name is required and cannot be greater than 50 characters</p>";
        console.log("last name invalid — length")
        } else if (Lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validlastName = true;
                console.log("last name valid")
        };
//4) Send error message to HMTL
document.getElementById("fname").innerHTML = errorMessages;
//5) return status of each field
return (validFirstname && validlastName);
}
function Email(){
  console.log("Email")
//1) creat var.
var validUsername=false;
  //2) read html value
var userEmail = document.getElementById("Email").value;
var errorMessages = "";
//3 validations
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    errorMessages += "<p>Email not vaild</p>";
} else
    return true;
//4 error
  document.getElementById("fname").innerHTML = errorMessages;
  }
function Phone(){
 //1) creat var.
  var validPhone=false;
  //2)
var phone = document.getElementById("phone").value;
var errorMessages = "";
  //3
if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="")
errorMessages += "<p>Phone not vaild</p>";
else
  return true;
  //4
  document.getElementById("fname").innerHTML = errorMessages;
//You can also do pattern matching by using the match() method from the string object
var numbers=/^[0-9]+$/;
if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers))
errorMessages += "<p>Phone not vaild</p>";
else
  return true
//...
  }
function Username(){
//1) Create variable
var validUsername=false;
//2) read value from HTML
var username = document.getElementById("Username").value;
var errorMessages = "";
//3) Do validation
if (username==="null" || username==="" || username.length > 12 ) {
        errorMessages += "<p>not vaild Username</p>";
        console.log("last name invalid — length")
        } else {
                validlastName = true;
                console.log("username valid")
        };
//4) Send error message to HMTL
document.getElementById("fname").innerHTML = errorMessages;
}
function Password(){
//1) Create variable
var validpassword=false;
//2) read value from HTML
var password = document.getElementById("Username").value;
var errorMessages = "";
//3) Do validation
if (password==="null" || password==="" || password.length > 7 ) {
        errorMessages += "<p>not vaild Username</p>";
        console.log("last name invalid — length")
        } else {
                validlastName = true;
                console.log("username valid")
        };
//4) Send error message to HMTL
document.getElementById("fname").innerHTML = errorMessages;
}
function Address(){
//1) Create variable
var validaddress=false;
//2) read value from HTML
var address = document.getElementById("Address").value;
var errorMessages = "";
//3) Do validation
if (address==="null" || address==="") {
        errorMessages += "<p>required address</p>";
         } else {
                validaddress = true;
                console.log("username valid")
        };
//4) Send error message to HMTL
document.getElementById("fname").innerHTML = errorMessages;
}
function City(){
//1) Create variable
var validcity=false;
//2) read value from HTML
var city = document.getElementById("City").value;
var errorMessages = "";
//3) Do validation
if (address==="null" || address==="") {
        errorMessages += "<p>required city</p>";
          } else {
                validcity = true;
                console.log("city valid")
        };
//4) Send error message to HMTL
document.getElementById("fname").innerHTML = errorMessages;
}
function State(){
//1) Create variable
var validstate=false;
//2) read value from HTML
var state = document.getElementById("City").value;
var errorMessages = "";
//3) Do validation
if (state==="null" || state==="") {
        errorMessages += "<p>required state</p>";
          } else {
                validstate = true;
                console.log("State valid")
        };
//4) Send error message to HMTL
document.getElementById("fname").innerHTML = errorMessages;
}
function Zip(){
//1) Create variable
var validzip=false;
//2) read value from HTML
var zip = document.getElementById("City").value;
var errorMessages = "";
//3) Do validation
if (zip==="null" || zip===""|| password.length > 5) {
        errorMessages += "<p>required Zip</p>";
          } else {
                validzip = true;
                console.log("zip valid")
        };
//4) Send error message to HMTL
document.getElementById("fname").innerHTML = errorMessages;
}
function Country(){
var country = document.getElementById("country").value;
if (country === "USA"){
// validate Zipcode according to the rules
  } else {
}
//Zipcode is OK. For example: validZipcode = true;
    }
