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
    /*Declared Pool and PoolSplit variables on separate lines as separate variable to avoid JavaScript for some reason 
    utilizing commas in final for loop that begins at line 101 when "abcdef".split(""); format was used on one line 
    in one variable.*/ 
    let lowerCasePool = "abcdefghijklmnopqrstuvwxyz";
    let lowerCasePoolSplit = lowerCasePool.split(" ");
    let upperCasePool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let upperCasePoolSplit = upperCasePool.split(" ");
    let numbersPool = "1234567890";
    let numbersPoolSplit = numbersPool.split(" ");
    let specialsPool = "\ !\"#$%&\',)*+-./\;:<=>?@[\\]^-`{|}~";
    let specialsPoolSplit = specialsPool.split(" ");
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
    //If statement to confirm a numberic digit between 8 and 128 was entered by user.
    if(lengthVariable < 8) {
      alert("You MUST enter a numeric digit between 8 and 128, please hit Generate Password button and start again.");
      passwordString = "Hit the Generate Password button and please be sure to enter a numeric digit between 8 and 128 for your password length."
      return passwordString;
      }
    if(lengthVariable > 128) {
      alert("You MUST enter a numeric digit between 8 and 128, please please hit Generate Password button and start again.");
      passwordString = "Hit the Generate Password button and please be sure to enter a numeric digit between 8 and 128 for your password length."
      return passwordString;      
      }
    else {
      alert("Your password will be " + lengthVariable + " characters long.");
    }
      //If statements build the criteriaArray and pull one index position each from every criteria selected.  
    if(lowerCasePrompt === true) {
      alert("Your password will include at least one lower case letter.");
      criteriaArray = criteriaArray += lowerCasePoolSplit;
      //Tried to invoke criteriaInvoked++ iterater here, but elected for long form to avoid strange results.
      criteriaInvoked = criteriaInvoked + 1;
      let lowerCaseRandomizer = Math.floor(Math.random() * lowerCasePool.length);
      lowerCaseSelection = lowerCasePool[lowerCaseRandomizer];
      passwordString = passwordString += lowerCaseSelection;
      console.log(passwordString);
    }

    if(upperCasePrompt === true) {
      alert("Your password will include at least one upper case letter.");
      criteriaArray = criteriaArray += upperCasePoolSplit;
      //Tried to invoke criteriaInvoked++ iterater here, but elected for long form to avoid strange results.
      criteriaInvoked = criteriaInvoked + 1;
      let upperCaseRandomizer = Math.floor(Math.random() * upperCasePool.length);
      upperCaseSelection = upperCasePool[upperCaseRandomizer];
      passwordString = passwordString += upperCaseSelection;
      console.log(passwordString);
    }

    if(numbersPrompt === true) {
      alert("Your password will include at least one number.");
      criteriaArray = criteriaArray += numbersPoolSplit;
      //Tried to invoke criteriaInvoked++ iterater here, but elected for long form to avoid strange results.
      criteriaInvoked = criteriaInvoked + 1;
      let numbersRandomizer = Math.floor(Math.random() * numbersPool.length);
      numbersSelection = numbersPool[numbersRandomizer];
      passwordString = passwordString += numbersSelection;
      console.log(passwordString);   
    }

    if(specialsPrompt === true) {
      alert("Your password will include at least one special character.");
      criteriaArray = criteriaArray += specialsPoolSplit;
      //Tried to invoke criteriaInvoked++ iterater here, but elected for long form to avoid strange results.
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
      let criteriaArrayRandomizer = Math.floor(Math.random() * criteriaArray.length);
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
