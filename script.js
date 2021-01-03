// Assignment Code
var generateBtn = document.querySelector("#generate");

// define characters , numbers, symbols to use in password generator 
var char ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num ='0123456789';
var sym = ' "!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var passwordlength;


//if (enter >=8 \\ enter <=128)
prompt(To start your password selection, Choose between 8 and 128 characters);
prompt(lowercase, uppercase, numeric, and/or special characters);

for(var i = 0; i < passwordLength; i++) {
  password += characters.charAt(Math.floor(Math.random() * characters.length));

}

// Write password to the #password input
function writePassword() {
   var password = generatePassword()
   var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//console.log(Math.floor(Math.random() * 26) +97);