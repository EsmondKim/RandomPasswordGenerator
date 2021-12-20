let generatePasswordBtn = document.querySelector("#generatePasswordBtn");
let lowersCheckbox = document.querySelector("input[name=lowers]");
let uppersCheckbox = document.querySelector("input[name=uppers]");
let numbersCheckbox = document.querySelector("input[name=numbers]");
let specialsCheckbox = document.querySelector("input[name=specials]");
let lengthVar = document.getElementById("length");
let password = "Your randomly generated password will appear here.";

function setPasswordText() {
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

setPasswordText();

function writePassword() {
  let lowerCasePool = "abcdefghijklmnopqrstuvwxyz";
  let lowerCasePoolSplit = lowerCasePool.split(" ");
  let upperCasePool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upperCasePoolSplit = upperCasePool.split(" ");
  let numbersPool = "1234567890";
  let numbersPoolSplit = numbersPool.split(" ");
  let specialsPool = " !\"#$%&',)*+-./;:<=>?@[\\]^-`{|}~";
  let specialsPoolSplit = specialsPool.split(" ");

  let criteriaArray = "";

  let lowerCaseSelection = "";
  let upperCaseSelection = "";
  let numbersSelection = "";
  let specialsSelection = "";

  let criteriaInvoked = 0;
  let forLoopCounter = 0;
  let passwordString = "";

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

  if (document.getElementById("lowers").checked === true) {
    alert("Your password will include at least one lower case letter.");
    criteriaArray = criteriaArray += lowerCasePoolSplit;
    criteriaInvoked = criteriaInvoked + 1;
    let lowerCaseRandomizer = Math.floor(Math.random() * lowerCasePool.length);
    lowerCaseSelection = lowerCasePool[lowerCaseRandomizer];
    passwordString = passwordString += lowerCaseSelection;
  }
  if (document.getElementById("uppers").checked === true) {
    alert("Your password will include at least one upper case letter.");
    criteriaArray = criteriaArray += upperCasePoolSplit;
    criteriaInvoked = criteriaInvoked + 1;
    let upperCaseRandomizer = Math.floor(Math.random() * upperCasePool.length);
    upperCaseSelection = upperCasePool[upperCaseRandomizer];
    passwordString = passwordString += upperCaseSelection;
  }
  if (document.getElementById("numbers").checked === true) {
    alert("Your password will include at least one number.");
    criteriaArray = criteriaArray += numbersPoolSplit;
    criteriaInvoked = criteriaInvoked + 1;
    let numbersRandomizer = Math.floor(Math.random() * numbersPool.length);
    numbersSelection = numbersPool[numbersRandomizer];
    passwordString = passwordString += numbersSelection;
  }

  if (document.getElementById("specials").checked === true) {
    alert("Your password will include at least one special character.");
    criteriaArray = criteriaArray += specialsPoolSplit;
    criteriaInvoked = criteriaInvoked + 1;
    let specialsRandomizer = Math.floor(Math.random() * specialsPool.length);
    specialsSelection = specialsPool[specialsRandomizer];
    passwordString = passwordString += specialsSelection;
  }

  forLoopCounter = lengthVar.value - criteriaInvoked;
  for (i = 0; forLoopCounter > i; forLoopCounter--) {
    let criteriaArrayRandomizer = Math.floor(
      Math.random() * criteriaArray.length
    );
    criteriaArraySelection = criteriaArray[criteriaArrayRandomizer];
    passwordString = passwordString += criteriaArraySelection;
  }
  password = passwordString;
  setPasswordText();
  return;
}

generatePasswordBtn.addEventListener("click", writePassword);

lowersCheckbox.addEventListener("change", function lowersChange(checkbox) {
  if (document.getElementById("lowers").checked) {
    alert("Your password will include lowercase letters!");
  } else {
    alert("You've removed lowercase letters from your password!");
  }
});

uppersCheckbox.addEventListener("change", function uppersChange(checkbox) {
  if (document.getElementById("uppers").checked) {
    alert("Your password will include uppercase letters!");
  } else {
    alert("You've removed uppercase letters from your password!");
  }
});

numbersCheckbox.addEventListener("change", function numbersChange(checkbox) {
  if (document.getElementById("numbers").checked) {
    alert("Your password will include numbers!");
  } else {
    alert("You've removed numbers from your password!");
  }
});

specialsCheckbox.addEventListener("change", function specialsChange(checkbox) {
  if (document.getElementById("specials").checked) {
    alert("Your password will include special characters!");
  } else {
    alert("You've removed special characters from your password!");
  }
});
