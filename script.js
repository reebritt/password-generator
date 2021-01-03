// Assignment Code
var generateBtn = document.querySelector("#generate");

// define characters , numbers, symbols to use in password generator 
var char ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num ='0123456789';
var sym = ' "!#$%&()*+,-./:;<=>?@[\]^_`{|}~';

// Write password to the #password input
function writePassword() {
   var password = generatePassword()
   var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//console.log(writePassword);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//console.log(Math.floor(Math.random() * 26) +97);