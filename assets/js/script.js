var generatePassword = function () {
  window.alert("Welcome to Secure Password Generator!\n\nPlease have the following criteria available:\n\Length of password (between 8 and 128 characters)\n\u2022Select if lowercase, uppercase, numeric, and/or special characters are needed.");

// /* USER STORY
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
//  */

// // Variables
// var passwordLength = ""
// var includeLowercase = "";
// var includeUppercase = "";
// var includeSpecialCharacters = "";


//   var getPasswordLength = function() {

//     var passwordLength = "";
    while (passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLenth > 128) {
      //Prompt password character length
      window.prompt("How many characters would you like your password to be? \n\u2022Password Length must be at between 8 characters and 128 characters long");
      
//       console.log("Password length is " + passwordLength + " characters long");
//       return passwordLength
//     }
//   }

//   getCharacterConditions();

//   var getCharacterConditions = function() {

    // Loop data validation, user must select at least one condition (lowercase, uppercase, or special characters)
    while (includeLowercase, includeUppercase, includeSpecialCharacters) {
    //Lowercase (y/n)
      includeLowercase = window.confirm("Do you want to include lowercase characters?");
      if (includeLowercase) {
        console.log(includeLowercase)
      }
      includeUppercase = window.confirm("Do you want to include uppercase characters?");
      if (includeUppercase) {
        console.log(includeUppercase);
      }
      includeSpecialCharacters = window.confirm("Do you want to include special characters?");
      if (includeSpecialCharacters) {
        console.log(includeSpecialCharacters);
      }
    }

    return includeLowercase;
  }

  getPasswordLength();
  getCharacterConditions();
}

//   const passwordDisplay = getElementById('passwordDisplay')

//   function generatePassword (characterLength, includeUppercase, includeNumbers, includeSymbols) {
//     let charCodes = LOWERCASE_CHAR_CODES
//     if (includeUppercase) charCode = charCodes.concat
//       (UPPERCASE_CHAR_CODES)
//     if (includeSymbols) charCodes = charCodes.concat (SYMBOL_CHAR_CODES)
//     if (includeNumbers) charCodes = charCodes.concat (NUMBER_CHAR_CODES)

//     const passwordCharacters = []
//     for (let i = 0; i < characterAmount; i++) {
//       passwordDisplay.characterCode = charCodes[Math.floor(Math.random() * characterLength)]
//     }
//   }

// }


passwordDisplay.innerText = password

// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);