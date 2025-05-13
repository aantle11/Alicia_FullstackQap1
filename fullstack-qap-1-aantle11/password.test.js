const generatePassword = require("./generatePassword");

// testing
test("should generate a default 8-character password with lowercase letters", () => {
  const password = generatePassword({});
  expect(password.length).toBe(8);
  expect(password).toMatch(/^[a-z]+$/);
});

test("should include numbers in the password when --numbers is used", () => {
  const password = generatePassword({ numbers: true });
  expect(password.length).toBe(8);
  expect(password).toMatch(/^[a-z0-9]+$/);
});

test("should generate password of length 12 when --length 12 is used", () => {
  const password = generatePassword({ length: 12, lowercase: true });
  expect(password.length).toBe(12);
});

test("should throw an error when given an invalid length (like -1)", () => {
  expect(() => {
    generatePassword({ length: -1 });
  }).toThrow("Please enter a valid password length");
});
