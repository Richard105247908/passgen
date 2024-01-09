// Arrays of characters
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate the length input
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid length between 8 and 128.");
    return;
  }

  var includeSpecial = confirm("Include special characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");

  // Validate at least one character type is selected
  if (!includeSpecial && !includeNumeric && !includeLowercase && !includeUppercase) {
    alert("Please select at least one character type.");
    return;
  }

  return {
    length: length,
    includeSpecial: includeSpecial,
    includeNumeric: includeNumeric,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) return ''; // If options are not selected, return an empty string

  var availableCharacters = [];
  var guaranteedCharacters = [];

  if (options.includeSpecial) {
    availableCharacters = availableCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.includeNumeric) {
    availableCharacters = availableCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.includeLowercase) {
    availableCharacters = availableCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.includeUppercase) {
    availableCharacters = availableCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  var remainingLength = options.length - guaranteedCharacters.length;

  for (var i = 0; i < remainingLength; i++) {
    var randomChar = getRandom(availableCharacters);
    guaranteedCharacters.push(randomChar);
  }

  // Shuffle the guaranteed characters to mix them up
  for (var i = guaranteedCharacters.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [guaranteedCharacters[i], guaranteedCharacters[j]] = [guaranteedCharacters[j], guaranteedCharacters[i]];
  }

  return guaranteedCharacters.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
