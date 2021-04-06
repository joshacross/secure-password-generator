// Empty string to hold password length
var characterLength = "";

// True/False Values (Include if True);
var includeLowerCase = "";
var includeUpperCase = "";
var includeNumbers = "";
var includeSpecialCharacters = "";

// Empty String to hold constant values
var values = "";

const lowercaseValues = "abcdefghijklmnopqrstuvwxyz";
const uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberValues = "0123456789";
const specialValues = "!@#$%^&*()_+-={}|[];'<>?,./";

var generatePassword = function() {
    values.reset();
    window.alert("Welcome to Secure Password Generator!\n\nPlease have the following criteria available:\n\Length of password (between 8 and 128 characters)\n\u2022Select if lowercase, uppercase, numeric, and/or special characters are needed.");
    // Get password length
    getPasswordLength();
    // Check which constant values to be included
    getValues();

    // Loop a random password by length by including selected values
    for (var i = 0; i < characterLength.length; i++) {
        password = values.charAt(Math.floor(Math.random() * Math.floor(values.lenth - 1)));
};

var getPasswordLength = function() {
    characterLength = window.prompt("How many characters would you like your password to be?");

    if(characterLength < 8 || characterLength > 128 || characterLength === "" || characterLength === null || characterLength === "null") {
        window.alert("You need to provide a valid answer! Please try again");
        return getPasswordLength();
    } else {
        parseInt(characterLength);
        console.log("Password is " + characterLength + " characters long");
    }
};

var getValues = function() {

    includeLowerCase = window.confirm("Do you want lowercase?");
    // if lowercase is true, add lowercaseValues to 
        if (includeLowerCase) {
            values = values + lowercaseValues;
            console.log(values);
        };
    includeUpperCase = window.confirm("Do you want uppercase?");
        if (includeUpperCase) {
            values = values + uppercaseValues;
            console.log(values);
        };

    includeNumbers = window.confirm("Do you want to include numbers?");
    if (includeNumbers) {
        values = values + numberValues;
        console.log(values);
    };
    includeSpecialCharacters = window.confirm("Would you like your password to include special characters?");
        if (includeSpecialCharacters) {
            values = values + specialValues;
            console.log(values);
        };
};


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