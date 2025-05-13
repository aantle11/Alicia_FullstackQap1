const generatePassword = require("./generatePassword");

const args = process.argv.slice(2);
const options = {};

// --help message
if (args.includes("--help")) {
  console.log(`
Password Generator - Help Menu
You can use the following options:
  --help            Show this message
  --length <num>    Choose how long the password should be (default is 8)
  --lowercase       Add lowercase letters to the password
  --numbers         Add numbers to the password
  `);
  process.exit(0);
}

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--length") {
    options.length = parseInt(args[i + 1]);
  }
  if (args[i] === "--lowercase") {
    options.lowercase = true;
  }
  if (args[i] === "--numbers") {
    options.numbers = true;
  }
}

try {
  const password = generatePassword(options);
  console.log("Generated password: " + password);
} catch (err) {
  // Error Message
  console.error("Error: " + err.message);
}
