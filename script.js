// Assignment Code
var generateBtn = document.querySelector("#generate");

// define characters , numbers, symbols to use in password generator 
var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = ' "!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var passwordLength;

//setup length for password and do proper checks for length check of 8-128
function generatePassword() {
  passwordLength = prompt("To start your password selection, Choose between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Choose between 8 and 128 characters");
    generatePassword();
  }

  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    password = password + char.charAt(Math.floor(Math.random() * char.length));

  };
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

