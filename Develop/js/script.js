// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password object to store password as its being built
var passwordCriteria = {

  //variable for length of password
  passLength: 0,

  //variable to hold lowercase letters
  passwordLettersLowercase: 'abcdefghijklmnopqrstuvwxyz'.split(''),

  //variable to hold uppercase letters
  passwordLettersUppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),

  //variable to hold numbers
  passwordNumbers: '0123456789'.split(''),

  //variable to hold special characters
  passwordCharacters: "~`!@#$%^&*()-_+={}[]|/:;'<>,.?".split('')

}

// variable to store all possible password characters based on user input
// var masterArray = [];

// Write password to the #password input
function writePassword() {
  //this calls on the generatePassword function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//function to generate new password
function generatePassword() {
  //need variable to store the new password
  var newPassword = "";

  var masterArray = [];

  //need variables to store criteria input
  var passwordLength = 0;
  var wantsUppercase;
  var wantsLowercase;
  var wantsNumbers;
  var wantsSpecialChar;

  //prompt user to input password length
  passwordLength = window.prompt("How long would you like your password to be? Please pick a password between 8 and 128 characters.")
  console.log('before parseInt', typeof passwordLength);
  passwordLength = parseInt(passwordLength)
  console.log('after parseInt', typeof passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Not a valid input");
    return;
  }
  
  //store the desired length of the password as the pass length to be used to generate password
  passwordCriteria.passLength = passwordLength;

  //ask user what kind of characters they want in their password 
  wantsUppercase = window.confirm("Do you want uppercase letters in your password?");
  wantsLowercase = window.confirm("Do you want lowercase letters in your password?");
  wantsNumbers = window.confirm("Do you want numbers in your password?");
  wantsSpecialChar = window.confirm("Do you want special characters in your password?");

  // use the user response to create the master array from which the password will be generated
  if (wantsUppercase) {
    masterArray = masterArray.concat(passwordCriteria.passwordLettersUppercase)
  }
  if (wantsLowercase) {
    masterArray = masterArray.concat(passwordCriteria.passwordLettersLowercase)
  }
  if (wantsNumbers) {
    masterArray = masterArray.concat(passwordCriteria.passwordNumbers)
  }
  if (wantsSpecialChar) {
    masterArray = masterArray.concat(passwordCriteria.passwordCharacters)
  }

  //create for loop to randomly pick characters from the master array and push them into the newPassword
  for(let i = 0; i < passwordCriteria.passLength; i++) {
    //write code to randomly get character from masterArray
    randomChar = masterArray[Math.floor(Math.random() * masterArray.length)]
    // add character to newPasswod
    newPassword += randomChar
  }

  return newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);