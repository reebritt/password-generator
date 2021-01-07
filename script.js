// Assignment Code
var generateBtn = document.querySelector("#generate");

// define characters , numbers, symbols to use in password generator 
var charLower = 'abcdefghijklmnopqrstuvwxyz';
var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = ' "!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var passwordLength;

//setup length for password and do proper checks for length check of 8-128
function generatePassword() {
  passwordLength = prompt("To start your password selection, Choose between 8 and 128 characters");
  // writing psuedo code in prep for changing to logic
  // num = prompt("Would you like your password to include numbers");
  // sym = prompt("Would you like your password to include symbols");
  // char = prompt("Would you like your password to include characters");

  // if num && sym then var finalPasword = num + sym
  // if sym && char then var finalPassword = sym + char
  // if num && char then var finalPassword = num + char

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Choose between 8 and 128 characters");
    
  generatePassword();
     // else if {num = confirm("Would you like your password to include numbers");
    //         sym = confirm("Would you like your password to include symbols");
    //         char = confirm("Would your like your password to include characters");
  }

  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    password = password + charLower.charAt(Math.floor(Math.random() * charLower.length));

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

