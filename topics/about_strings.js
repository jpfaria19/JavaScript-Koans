module("About Strings (topics/about_strings.js)");

test("delimiters", function () {
  var singleQuotedString = `apple`;
  var doubleQuotedString = "apple";
  equal(true, singleQuotedString === doubleQuotedString, "are the two strings equal?");
  // Both strings are equal because single and double quotes create identical string values in JavaScript.
});

test("concatenation", function () {
  var fruit = "apple";
  var dish = "pie";
  equal("apple pie", fruit + " " + dish, 'what is the value of fruit + " " + dish?');
});

test("character Type", function () {
  var characterType = typeof "Amory".charAt(1); // typeof will be explained in about reflection
  equal("string", characterType, "Javascript has no character type");
  // The typeof a character in JavaScript is "string" because JavaScript does not have a distinct character type.
});

test("escape character", function () {
  var stringWithAnEscapedCharacter = "\u0041pple";
  equal(
    "Apple",
    stringWithAnEscapedCharacter,
    "what  is the value of stringWithAnEscapedCharacter?",
  );
  // The escaped Unicode character \u0041 represents 'A', so the resulting string is "Apple".
});

test("string.length", function () {
  var fruit = "apple";
  equal(5, fruit.length, "what is the value of fruit.length?");
});

test("slice", function () {
  var fruit = "apple pie";
  equal("apple", fruit.slice(0, 5), "what is the value of fruit.slice(0,5)?");
  // The slice method extracts the first 5 characters from the string, resulting in "apple".
});
