# passgen
# Password Generator Challenge

This JavaScript code provides a password generator that allows users to specify criteria for generating a password. The generated password will contain characters from selected character sets (lowercase, uppercase, numeric, special characters) based on user input.

## Getting Started

To use the password generator:

1. Open the `index.html` file in a web browser.
2. Click on the "Generate Password" button.
3. Follow the prompts to specify the password criteria:
    - Enter the length of the password (between 8 and 128 characters).
    - Confirm which character types to include (special characters, numeric, lowercase, uppercase).
4. Once valid criteria are selected, the generated password will be displayed in the designated area.

## Files Included

- `index.html`: HTML file containing the structure and button for generating the password.
- `script.js`: JavaScript file containing the code for generating passwords based on user input.
- `style.css`: CSS file containing basic styling for the HTML elements.

## Functions

### `getPasswordOptions()`

- Prompts the user to enter the desired password length and select character types to include.
- Validates user inputs for length and character type selection.
- Returns an object with user-selected options.

### `generatePassword()`

- Generates a password based on user-selected criteria obtained from `getPasswordOptions()`.
- Uses arrays of character sets (special characters, numeric, lowercase, uppercase) to create the password.
- Mixes selected character types and ensures at least one character from each selected type is included.
- Returns the generated password as a string.

### `writePassword()`

- Displays the generated password on the web page.

## Character Sets

- `specialCharacters`: Array of special characters.
- `numericCharacters`: Array of numeric characters.
- `lowerCasedCharacters`: Array of lowercase characters.
- `upperCasedCharacters`: Array of uppercase characters.

## Notes

- The code ensures that at least one character type is selected before generating the password.
- The generated password is displayed in an input field on the web page.
- Users can click the "Generate Password" button multiple times to create new passwords with different criteria.
