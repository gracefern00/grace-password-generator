// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return: password;
}

// Character Arrays (4)
var specials = "!@#$%&*-+".split("")
var numbers = "1234567890" .split("")
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// User Prompt questions: which characters to use?
var isSpecials = confirm("Do you want a special character?")
var isNumbers = confirm("Do you want numbers?")
var isLowercase = confirm("Do you want lowercase letters?")
var isUppercase = confirm("Do you want uppercase letters?")

//conditions

if (isSpecials) {
var randomCharacter = Math.floor(Math.random()*9)
  finalPass.push(specials[randomCharacter])
}

if (isNumbers) {
var randomCharacter = Math.floor(Math.random()*10)
  finalPass.push(numbers[randomCharacter])
}

if (isLowercase) {
var randomCharacter = Math.floor(Math.random()*26)
  finalPass.push(lowercase[randomCharacter])
}

if (isUppercase) {
var randomCharacter = Math.floor(Math.random()*26)
  finalPass.push(uppercase[randomCharacter])
}

for (var i = 0; i < length; i++) {
  var random = Math.floor(Math.random() * Math.floor(allCharacters.length));
  password+= allCharacters[random];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
