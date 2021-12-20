// Assignment Code
let generatePasswordBtn = document.querySelector("#generatePasswordBtn");
let lowersCheckbox = document.querySelector("input[name=lowers]");
let uppersCheckbox = document.querySelector("input[name=uppers]");
let numbersCheckbox = document.querySelector("input[name=numbers]");
let specialsCheckbox = document.querySelector("input[name=specials]");
let lengthVar = document.getElementById("length");
let password = "Your randomly generated password will appear here.";

// let password = generatePassword();
function setPasswordText() {
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

setPasswordText();
// Write password to the #password input
function writePassword() {
  //Writing the function that generates the password.
  // function generatePassword() {
  //The user provides password criteria via declared variables, confirms, and a prompt.
  //The confirms and the prompt will define the password's characteristics.

  // let lowerCasePrompt = confirm("Would you like lower case letters in your password?");
  // let upperCasePrompt = confirm("Would you like upper case letters in your password?");
  // let numbersPrompt = confirm("Would you like numbers in your password?");
  // let specialsPrompt = confirm("Do you want special characters in your password?")

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
  let specialsPool = " !\"#$%&',)*+-./;:<=>?@[\\]^-`{|}~";
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

  //If statement to make sure at least one of the prompts/character types was selected.
  if (
    document.getElementById("lowers").checked === false &&
    document.getElementById("uppers").checked === false &&
    document.getElementById("numbers").checked === false &&
    document.getElementById("specials").checked === false
  ) {
    alert(
      "You MUST choose at least one of the following password criteria: lowercase, uppercase, numbers, or special characters."
    );
    return;
  }
  console.log(lengthVar.value);
  if (lengthVar.value < 8) {
    alert("You must enter a numeric digit between 8 and 128.");
    return;
  }
  if (lengthVar.value > 128) {
    alert("You must enter a numeric digit between 8 and 128.");
    return;
  } else {
    alert("Your password will be " + lengthVar.value + " characters long.");
  }

  // //Password length user prompt.
  // let lengthVariable = prompt(
  //   "How long do you want your password to be? You MUST enter a numeric digit between 8 and 128."
  // );
  // //If statement to confirm a numberic digit between 8 and 128 was entered by user.
  // if (lengthVariable < 8) {
  //   alert(
  //     "You MUST enter a numeric digit between 8 and 128, please hit Generate Password button and start again."
  //   );
  //   passwordString =
  //     "Hit the Generate Password button and please be sure to enter a numeric digit between 8 and 128 for your password length.";
  //   return passwordString;
  // }
  // if (lengthVariable > 128) {
  //   alert(
  //     "You MUST enter a numeric digit between 8 and 128, please please hit Generate Password button and start again."
  //   );
  //   passwordString =
  //     "Hit the Generate Password button and please be sure to enter a numeric digit between 8 and 128 for your password length.";
  //   return passwordString;
  // } else {
  //   alert("Your password will be " + lengthVariable + " characters long.");
  // }
  //If statements build the criteriaArray and pull one index position each from every criteria selected.
  //Alerts confirm the types of characters the user selected.

  if (document.getElementById("lowers").checked === true) {
    alert("Your password will include at least one lower case letter.");
    criteriaArray = criteriaArray += lowerCasePoolSplit;
    //Tried to invoke criteriaInvoked++ iterater here, but elected for long form to avoid strange results.
    criteriaInvoked = criteriaInvoked + 1;
    console.log("this is criteria", criteriaInvoked);
    let lowerCaseRandomizer = Math.floor(Math.random() * lowerCasePool.length);
    lowerCaseSelection = lowerCasePool[lowerCaseRandomizer];
    passwordString = passwordString += lowerCaseSelection;
    console.log(passwordString);
  }
  if (document.getElementById("uppers").checked === true) {
    alert("Your password will include at least one upper case letter.");
    criteriaArray = criteriaArray += upperCasePoolSplit;
    //Tried to invoke criteriaInvoked++ iterater here, but elected for long form to avoid strange results.
    criteriaInvoked = criteriaInvoked + 1;
    let upperCaseRandomizer = Math.floor(Math.random() * upperCasePool.length);
    upperCaseSelection = upperCasePool[upperCaseRandomizer];
    passwordString = passwordString += upperCaseSelection;
    console.log(passwordString);
  }
  if (document.getElementById("numbers").checked === true) {
    alert("Your password will include at least one number.");
    criteriaArray = criteriaArray += numbersPoolSplit;
    //Tried to invoke criteriaInvoked++ iterater here, but elected for long form to avoid strange results.
    criteriaInvoked = criteriaInvoked + 1;
    let numbersRandomizer = Math.floor(Math.random() * numbersPool.length);
    numbersSelection = numbersPool[numbersRandomizer];
    console.log("This be numbers selection.", numbersSelection);
    passwordString = passwordString += numbersSelection;
    console.log(passwordString);
  }

  if (document.getElementById("specials").checked === true) {
    alert("Your password will include at least one special character.");
    criteriaArray = criteriaArray += specialsPoolSplit;
    //Tried to invoke criteriaInvoked++ iterater here, but elected for long form to avoid strange results.
    criteriaInvoked = criteriaInvoked + 1;
    let specialsRandomizer = Math.floor(Math.random() * specialsPool.length);
    specialsSelection = specialsPool[specialsRandomizer];
    passwordString = passwordString += specialsSelection;
    console.log(passwordString);
  }
  console.log("This is line 146 criteria", criteriaInvoked);
  forLoopCounter = lengthVar.value - criteriaInvoked;
  console.log("this is for loop counter", forLoopCounter);
  //For loop fills in rest of password drawing from combined pull of selected criteria.
  console.log("BEFORE FOR LOOP!!");
  for (i = 0; forLoopCounter > i; forLoopCounter--) {
    let criteriaArrayRandomizer = Math.floor(
      Math.random() * criteriaArray.length
    );
    criteriaArraySelection = criteriaArray[criteriaArrayRandomizer];
    passwordString = passwordString += criteriaArraySelection;
    console.log(passwordString);
  }
  console.log(passwordString);
  password = passwordString;
  console.log("This is the password", password);
  setPasswordText();
  return;
}

//   let password = writePassword();
//   let passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// Add event listener to generate button
generatePasswordBtn.addEventListener("click", writePassword);

lowersCheckbox.addEventListener("change", function lowersChange(checkbox) {
  //If it is checked.
  if (document.getElementById("lowers").checked) {
    alert("Your password will include lowercase letters!");
  }
  //If it has been unchecked.
  else {
    alert("You've removed lowercase letters from your password!");
  }
});

uppersCheckbox.addEventListener("change", function uppersChange(checkbox) {
  //If it is checked.
  if (document.getElementById("uppers").checked) {
    alert("Your password will include uppercase letters!");
  }
  //If it has been unchecked.
  else {
    alert("You've removed uppercase letters from your password!");
  }
});

numbersCheckbox.addEventListener("change", function numbersChange(checkbox) {
  //If it is checked.
  if (document.getElementById("numbers").checked) {
    alert("Your password will include numbers!");
  }
  //If it has been unchecked.
  else {
    alert("You've removed numbers from your password!");
  }
});

specialsCheckbox.addEventListener("change", function specialsChange(checkbox) {
  //If it is checked.
  if (document.getElementById("specials").checked) {
    alert("Your password will include special characters!");
  }
  //If it has been unchecked.
  else {
    alert("You've removed special characters from your password!");
  }
});
