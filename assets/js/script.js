// Assignment Code
var user;
var userNum;
var userSym;
var userUpper;
var userLower;
var userChoice;
var generateBtn = document.querySelector("#generateBtn"); 

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var toUpper = function (u) {
  return u.toUpperCase(); // for uppercase conversion
};

convertUpper = alphabet.map(toUpper);

generateBtn.addEventListener("click", function() {
  pass = getPassword();
  document.getElementById("password").placeholder = pass;
});

function getPassword() {
    user = parseInt(prompt("How long would you like your password to be? (8-128 characters)"));
    if (!user) {
      return;
    }
    else if (user < 8 || user > 128) {
      alert("Please choose a length between 8 and 128 characters.");
    } 
    else {
        userNum = confirm("Will your password contain numbers?");
        userSym = confirm("Will your password contain symbols?");
        userUpper = confirm("Will your password contain Uppercase characters?");
        userLower = confirm("Will your password contain Lowercase characters?");
    };

    if (!userNum && !userSym && !userLower && !userUpper) {  //If cancel is selected 4 times.
      userChoice = alert("Your password must include at least 1 criteria.");
    
    } 
    else if (userNum && userSym && userLower && userUpper) { //If OK is selected 4 times.
        userChoice = numbers.concat(symbols, convertUpper, alphabet);
    };
    // If the user chooses 1 option.
    if (userNum) {
      userChoice = numbers;
    } 
    else if (userSym) {
      userChoice = symbols;
    } 
    else if (userLower) {
      userChoice = alphabet;
    } 
    else if (userUpper) {
      userChoice = space.concat(convertUpper)
    };
      // If the user chooses 2 options.
    if (userSym && userNum) {
      userChoice = symbols.concat(numbers);

    } 
    else if (userSym && userLower) {
      userChoice = symbols.concat(alphabet);

    } 
    else if (userSym && userUpper) {
      userChoice = symbols.concat(convertUpper);

    } 
    else if (userLower && userNum) {
      userChoice = alphabet.concat(numbers);

    } 
    else if (userLower && userUpper) {
      userChoice = alphabet.concat(convertUpper);

    } 
    else if (userNum && userUpper) {
      userChoice = numbers.concat(convertUpper);
    }
    // If the user chooses 3 options.
    if (userSym && userNum && userUpper) {
      userChoice = symbols.concat(numbers, convertUpper);

    } 
    else if (userSym && userNum && userLower) {
      userChoice = symbols.concat(numbers, alphabet);

    } 
    else if (userSym && userLower && userUpper) {
      userChoice = symbols.concat(alphabet, convertUpper);

    } 
    else if (userLower && userNum && userUpper) {
      userChoice = numbers.concat(convertUpper, alphabet);
    };
    var password = [];

    for (var i = 0; i < user; i++) {
      var pick = userChoice[Math.floor(Math.random() * userChoice.length)];
      password.push(pick);
    }
    console.log(pass)
    var pass = password.join("");
    UserInput(pass);
    return pass;
  }

function UserInput(pass) {
  document.getElementById("password").textContent =  pass;
}