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
    //A seriews of combined random pools of all possible password characters to further randomize the password after specific criteria is met.
    let combinedRandomPoolLowUp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let combinedRandomPoolLowUpNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let combinedRandomPoolAll = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "-", "`", "{", "|", "}", "~"]; 
    //Declaring the selection variables to be used in the for loops.
    let lowerCaseSelection = "";
    let upperCaseSelection = "";
    let numberSelection = "";
    let specialsSelection = "";
    let lowerUpperSelection = "";
    let combinedRandomSelection = "";
    //Declaring variables to be used in the various for loops.
    let allLowersPass = "";
    let allUppersPass = "";
    let lowerUpperPass= "";
    let allSpecialsPass = "";
    /* The if statements and for loops conform to the provided password criteria, tested by true/false equality operators. */
    //Letters here.
    //Lower letters only.
    if (lowerCasePrompt === true && upperCasePrompt === false && numbersPrompt == false && specialsPrompt === false) {
      for (i = 0; lengthVariable > i; lengthVariable--) {
        let lowerCaseRandomizer = Math.floor(Math.random() * lowerCasePool.length);
        lowerCaseSelection = lowerCasePool[lowerCaseRandomizer];
        allLowersPass = allLowersPass += lowerCaseSelection; 
        }
        console.log(allLowersPass);
        return allLowersPass;
      }
    //Upper letters only.
    if (lowerCasePrompt === false && upperCasePrompt === true && numbersPrompt == false && specialsPrompt === false) {
      for (i = 0; lengthVariable > i; lengthVariable--) {
        let upperCaseRandomizer = Math.floor(Math.random() * upperCasePool.length);
        upperCaseSelection = upperCasePool[upperCaseRandomizer];
        allUppersPass = allUppersPass += upperCaseSelection;
        }
        console.log(allUppersPass);
        return allUppersPass;
      }
    //At lease one lowers, at least one upper, then mixed uppers and lowers.
    if (lowerCasePrompt === true && upperCasePrompt === true && numbersPrompt == false && specialsPrompt === false) {
      let lowerCaseRandomizer = Math.floor(Math.random() * lowerCasePool.length);
      lowerCaseSelection = lowerCasePool[lowerCaseRandomizer];
      lowerUpperPass = lowerUpperPass += lowerCaseSelection;
      let upperCaseRandomizer = Math.floor(Math.random() * upperCasePool.length);
      upperCaseSelection = upperCasePool[upperCaseRandomizer];
      lowerUpperPass = lowerUpperPass += upperCaseSelection
      for (i = 0; (lengthVariable-2) > i; lengthVariable--) {
      let lowerUpperRandomizer = Math.floor(Math.random() * combinedRandomPoolLowUp.length);
      lowerUpperSelection = combinedRandomPoolLowUp[lowerUpperRandomizer];
      lowerUpperPass = lowerUpperPass += lowerUpperSelection;
      }
      console.log(lowerUpperPass);
      return lowerUpperPass;
      }
      //Numbers here.
      //Numbers only.
      if (lowerCasePrompt === true && upperCasePrompt === false && numbersPrompt == false && specialsPrompt === false) {
      for (i = 0; lengthVariable > i; lengthVariable--) {
          let lowerCaseRandomizer = Math.floor(Math.random() * lowerCasePool.length);
          lowerCaseSelection = lowerCasePool[lowerCaseRandomizer];
          allLowersPass = allLowersPass += lowerCaseSelection; 
          }
          console.log(allLowersPass);
          return allLowersPass;
        }
      //Numbers and lowers.

      //Numbers and uppers.

      //Numbers and specials.

      //Numbers and lowers and uppers.

      //Numbers and lowers and uppers and specials.

      //Specials here.
      //Specials only.
      if (lowerCasePrompt === false && upperCasePrompt === false && numbersPrompt === false && specialsPrompt === true) {
        for (i = 0; lengthVariable > i; lengthVariable--) {
          let specialsRandomizer = Math.floor(Math.random() * specialsPool.length);
          specialsSelection = specialsPool[specialsRandomizer];
          allSpecialsPass = allSpecialsPass += specialsSelection; 
          }
          console.log(allSpecialsPass);
          return allSpecialsPass;
        }
      //Specials and numbers.

      //Specials and lowers.
      
      //Specials and uppers.

      //Specials and numbers and lowers, then mixed.

      //Specials and numbers and uppers, then mixed.

      //specials and numbers and lowers and uppers, then mixed.


  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
