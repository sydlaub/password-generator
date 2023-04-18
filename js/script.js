// Assignment Code
var generateBtn = document.querySelector("#generate");

// GIVEN I need a new, secure password
// !WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// ?WHEN prompted for the length of the password
// ?THEN I choose a length of at least 8 characters and no more than 128 characters
// ?WHEN asked for character types to include in the password
// ?THEN I confirm whether or not to include lowercase, uppercase, numeric, and / or special characters
// ?WHEN I answer each prompt
// ?THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


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

var masterArray = [];

// !Need a variable to store the password as it's being built!
// Need a variable for the mega-array of characters
// !Need to ask the user how long the password should be
// !prompt ()
// !^ this needs to be stored in a variable
// Confirm whether to use uppercase letters, lowercase letters, numbers, and/or special characters
// Need to check whether the user selected a valid password length 
// need to check whether user selected at least one character type 
// If not, prompt them again OR alert that the input wasn't valid and start over (If we use multiple functions it should be easy to prompt again, if not we use the return function)
//Need to make sure that at least one character is chosen from each character type
// when the user selects a character type, generate a random character from that character set and concatenate it to the unfinished password
// generate a random character: Math.floor(Math.random() * array.length) gives a RANDOM INDEX, NOT A RANDOM CHARACTER ITSELF
//Can use .charAt()
// OR array[Math.floor(Math.random() * array.length)]
// once we have the actual character, concatenate it to the variable thats storing our unfinished password
//push that character set to the meg-array
//once we have our mega-array:
// for loop:
// generate a random character: Math.floor(Math.random() * array.length) gives a RANDOM INDEX, NOT A RANDOM CHARACTER ITSELF
//Can use .charAt()
// OR array[Math.floor(Math.random() * array.length)]
// once we have the actual character, concatenate it to the variable thats storing our unfinished password
// start at i = unfinishedpassword.length
// go as long as i < passwordLength 
// return unfinishedPassword






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

  //create for loop to randomly pick characters from the master array and push them to the newPassword
  for(let i = 0; i < passwordCriteria.passLength; i++) {
    randomChar = masterArray[Math.floor(Math.random() * masterArray.length)]
    // after some code to randomly get a character from masterArray, add to newPassword
    newPassword += randomChar
  }

  return newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);