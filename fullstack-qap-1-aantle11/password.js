// Alicia Antle
// May 9th - May 2025

function generatePassword(options) {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numberCharacters = "0123456789";

  let possibleCharacters = "";
  if (options.lowercase) {
    possibleCharacters += lowercaseLetters;
  }
  if (options.numbers) {
    possibleCharacters += numberCharacters;
  }

  // default set to lowercase
  if (possibleCharacters === "") {
    possibleCharacters = lowercaseLetters;
  }

  // default set length 8
  const passwordLength = options.length || 8;

  if (typeof passwordLength !== "number" || passwordLength <= 0) {
    throw new Error(
      "Please enter a valid password length (must be a number greater than 0)."
    );
  }

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomIndex];
  }

  return password;
}

module.exports = generatePassword;
