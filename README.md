# RandomPasswordGenerator
This webpage solves the problem of creating unique, secure, personal passowrds that include special characters and numbers to enhance security.  

Users navigate a series of JavaScript confirm questions and input a numeric length for the password.  The user  selects specific criteria to include in the password, including: lower case letters, upper case letters, numbers, and special characters.  The code first provides at least one of each of the user's specifically selected password criteria, then the code fills out the rest of the password string, up to the password length, with any number of random selections from the combined pool of user's designated criteria.

To use the app, open the webpage.  Start by clicking the "Generate Password" button.  Then, answer the prompts and follow the onscreen instructions until you have your unique, secure password.

The code uses if/else statements to prevent the user from choosing less than 8 or more than 128 characters for the password length.  The .string method is applied to variables to build arrays for each password criterion, then the code builds another array that pools each of the user's selected criterion into one combined array utilized in a for loop that completes the password.

Deployed website:
[Here is a link to the deployed website](https://esmondkim.github.io/RandomPasswordGenerator/) 

Sceenshots
![And a screenshot](/Assets/passwordgen.jpg)

This is the User Story for the site:
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

The following Acceptance Criteria applied:
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page



