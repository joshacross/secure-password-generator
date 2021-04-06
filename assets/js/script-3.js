// var resultEl = "";

// var randomFunc = {
//     lowercase: getRandomLowercase,
//     uppercase: getRandomUppercase,
//     number: getRandomNumber,
//     special: getRandomSpecial
// };


// const lowercaseValues = "abcdefghijklmnopqrstuvwxyz";
// const uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numberValues = "0123456789";
// const specialValues = "!@#$%^&*()_+-={}|[];'<>?,./";

// function values() {

//     function getRandomLowercase () {
//         return lowercaseValues[Math.floor(Math.random() * lowercaseValues.length)];
//     };

//     function getRandomUppercase () {
//         return uppercaseValues[Math.floor(Math.random() * uppercaseValues.length)];
//     };

//     function getRandomNumber () {
//         return numberValues[Math.floor(Math.random() * numberValues.length)];
//     };

//     function getRandomSpecial () {
//         return specialValues[Math.floor(Math.random() * specialValues.length)];
//     };

// };

// var generatePassword = function() {
    // window.alert("Welcome to Secure Password Generator!\n\nPlease have the following criteria available:\n\Length of password (between 8 and 128 characters)\n\u2022Select if lowercase, uppercase, numeric, and/or special characters are needed.");

//     while (passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLenth > 128) {
//         //Prompt password character length
//         window.prompt("How many characters would you like your password to be? \n\u2022Password Length must be at between 8 characters and 128 characters long");

// }

// var generateBtn = document.querySelector("#generate");

// // write password to the #password input

// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;
// };

// // add event listener to generate button
// generateBtn.addEventListener("click", writePassword && resetValues);


// /*
// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// */
var password = "";
var characterLength = "";
var values = [];

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const special = "!@#$%^&*()_+-={}|[];'<>?,./";

function getCharacterLength () {
    // receive character length
    characterLength = window.prompt("How many characters would you like your password to be?");

        if (characterLength < 8 || characterLength > 128 || isNaN(characterLength) === true || characterLength === "" || characterLength === null || characterLength === "null") {
            window.alert("please choose a number between 8 and 128");
            return getCharacterLength();
        } else {
            console.log(characterLength);
        }
};

// if character length is a string - do not run

// character length is a number, run code

function generatePassword() {

    window.alert("Welcome to Secure Password Generator!\n\nPlease have the following criteria available:\n\Length of password (between 8 and 128 characters)\n\u2022Select if lowercase, uppercase, numeric, and/or special characters are needed.");
    
    getCharacterLength();

    lowercaseValues = window.confirm("Would you like your password to include lowercase values?");
    console.log(lowercaseValues);

    uppercaseValues = window.confirm("Would you like to include uppercase values?");
    console.log(uppercaseValues);

    numberValues = window.confirm("Would you like to include numbers?");
    console.log(numberValues);

    specialCharacterValues = window.confirm("Would you like to include special characters?");
    console.log(specialCharacterValues);



};

generatePassword();