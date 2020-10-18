// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Writing the function that generates the password.
  function generatePassword() {
    //The user provides password criteria via declared variables, confirms, and a prompt. 
    //The confirms and the prompt will define the password's characteristics.
    let lowerCasePrompt = confirm("Would you like lower case letters in your password?");
    let upperCasePrompt = confirm("Would you like upper case letters in your password?");
    let numbersPrompt = confirm("Would you like numbers in your password?");
    let specialsPrompt = confirm("Do you want special characters in your password?")
    let lengthVariable = prompt("How long do you want your password to be? You MUST enter a numeric digit between 8 and 128.")
    //Creating the array pools for if statements and for loops to draw from.
    let lowerCasePool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upperCasePool = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let numbersPool = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let specialsPool = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "-", "`", "{", "|", "}", "~"];
    //Declaring a variable to build an array of selected criteria.  
    let criteriaArray = "";
    //Declaring the selection variables to be used in if statements and the for loop.
    let lowerCaseSelection = "";
    let upperCaseSelection = "";
    let numbersSelection = "";
    let specialsSelection = "";
    //Declaring a variable to count how many criteria the user selects.
    let criteriaInvoked = 0;
    //Declaraing a variable to hold lengthVariable minus criteriaInvoked.
    let forLoopCounter = 0;
    //Declaring variable to build the password string.
    let passwordString = "";
    //If statements build the criteriaArray and pull one index position each from every criteria selected.
    confirm("Your password will be " + lengthVariable + " characters long.")

       if(lowerCasePrompt === true) {
      alert("Your password will include at least one lower case letter.");
      criteriaArray = criteriaArray += lowerCasePool;
      criteriaInvoked = criteriaInvoked + 1;
      let lowerCaseRandomizer = Math.floor(Math.random() * lowerCasePool.length);
      lowerCaseSelection = lowerCasePool[lowerCaseRandomizer];
      passwordString = passwordString += lowerCaseSelection;
      console.log(passwordString);
    }

    if(upperCasePrompt === true) {
      alert("Your password will include at least one upper case letter.");
      criteriaArray = criteriaArray += upperCasePool;
      criteriaInvoked = criteriaInvoked + 1;
      let upperCaseRandomizer = Math.floor(Math.random() * upperCasePool.length);
      upperCaseSelection = upperCasePool[upperCaseRandomizer];
      passwordString = passwordString += upperCaseSelection;
      console.log(passwordString);
    }

    if(numbersPrompt === true) {
      alert("Your password will include at least one number.");
      criteriaArray = criteriaArray += numbersPool;
      criteriaInvoked = criteriaInvoked + 1;
      let numbersRandomizer = Math.floor(Math.random() * numbersPool.length);
      numbersSelection = numbersPool[numbersRandomizer];
      passwordString = passwordString += numbersSelection;
      console.log(passwordString);   
    }

    if(specialsPrompt === true) {
      alert("Your password will include at least one special character.");
      criteriaArray = criteriaArray += specialsPool;
      criteriaInvoked = criteriaInvoked + 1;
      let specialsRandomizer = Math.floor(Math.random() * specialsPool.length);
      specialsSelection = specialsPool[specialsRandomizer];
      passwordString = passwordString += specialsSelection;
      console.log(passwordString);   
    }
    console.log(criteriaInvoked);
    forLoopCounter = lengthVariable - criteriaInvoked;
    console.log(forLoopCounter);
    //For loop fills in rest of password drawing from combined pull of selected criteria.
    for (i = 0; forLoopCounter > i; forLoopCounter--) {
      let criteriaArrayRandomizer = Math.floor(Math.random() * 10);
      criteriaArraySelection = criteriaArray[criteriaArrayRandomizer];
      passwordString = passwordString += criteriaArraySelection;
      console.log(passwordString);
      }
    return passwordString;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
