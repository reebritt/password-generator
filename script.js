// Assignment Code

// define characters , numbers, symbols to use in password generator 
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sym = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// ps = writePassword();
// document.getElementById("password").placeholder =ps;


//setup length for password and do proper checks for length check of 8-128
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("To start your password selection, Choose between 8 and 128 characters"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Choose between 8 and 128 characters");
  } else {
    var numPrompt = confirm("Would you like your password to include numbers?");
    var symPrompt = confirm("Would you like your password to include symbols?");
    var charPromptUpper = confirm("Would you like to include uppercase characters?");
    var charPromptLower = confirm("Would you like to include lowercase characters?");
  }
  var passwordOptions = {
    pwdLength: passwordLength,
    pwdNum: numPrompt,
    pwdSym: symPrompt,
    pwdUpperCase: charPromptUpper,
    pwdLowerCase: charPromptLower
  }
  return passwordOptions
}

//function randomEl(array) {
//  var randomIndex = Math.floor(Math.random() * array.length);
//  var randomElement = array[randomIndex]
//  return randomElement
//  //console.log(randomElement)
//}
function generatePassword() {
 // var randomPassword = []
  var newPassword = []
  var passwordOptions = getPasswordOptions()
  if (passwordOptions.pwdLowerCase) {
    newPassword=newPassword.concat(charLower)
  }
  if (passwordOptions.pwdUpperCase) {
    newPassword=newPassword.concat(charUpper)
  }

  if (passwordOptions.pwdSym) {
    newPassword=newPassword.concat(sym)
  }

  if (passwordOptions.pwdNum) {
    newPassword=newPassword.concat(num)
  };
 
  //newPassword =newPassword.toString();
  for (var i = 0; i < passwordOptions.pwdLength; i++) {
   //var randomPassword=newPassword[Math.floor(Math.random()* newPassword.length)]
  console.log("test")
   // var newPassword=randomEl(newPassword)
  //  randomPassword.push(newPassword)
  }
  
  console.log(passwordOptions.pwdLength)

  return randomPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)
  passwordText.value = password;


}