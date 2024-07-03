module("About Control Structures (topics/about_control_structures.js)");

test("if", function () {
  var isPositive = false;
  if (2 > 0) {
    isPositive = true;
  }
  equal(true, isPositive, "what is the value of isPositive?");
});

test("for", function () {
  var counter = 10;
  for (var i = 1; i <= 3; i++) {
    counter = counter + i;
  }
  equal(16, counter, "what is the value of counter?");
  // The loop runs three times, adding 1, 2, and 3 to counter (10 + 1 + 2 + 3 = 16).
});

test("for in", function () {
  var person = {
    name: "Amory Blaine",
    age: 102,
  };
  var result = "";
  for (var property_name in person) {
    result = result + property_name;
  }
  equal("nameage", result, "what is the value of result?");
  // The for-in loop concatenates the property names "name" and "age" into the result string.
});

test("ternary operator", function () {
  var fruit = true ? "apple" : "orange";
  equal("apple", fruit, "what is the value of fruit?");
  fruit = false ? "apple" : "orange";
  equal("orange", fruit, "now what is the value of fruit?");
  // The ternary operator assigns "apple" when true and "orange" when false.
});

test("switch", function () {
  var result = 0;
  switch (2) {
    case 1:
      result = 1;
      break;
    case 1 + 1:
      result = 2;
      break;
  }
  equal(2, result, "what is the value of result?");
  // The switch statement matches case 2 (1 + 1) and assigns result to 2.
});

test("switch default case", function () {
  var result = "Pippin";
  switch ("m") {
    case "f":
      result = "Frodo";
      break;
    case "s":
      result = "Samwise";
      break;
    default:
      result = "Merry";
      break;
  }
  equal("Merry", result, "what is the value of result?");
  // The switch statement does not match any case, so the default case assigns "Merry".
});

test("null coalescing", function () {
  var result = null || "a value";
  equal("a value", result, "what is the value of result?");
  // The null coalescing operator returns "a value" because the first operand is null.
});
