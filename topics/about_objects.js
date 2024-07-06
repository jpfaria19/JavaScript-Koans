module("About Objects (topics/about_objects.js)");

test("object type", function () {
  var empty_object = {};
  equal("object", typeof empty_object, "what is the type of an object?");
  // In JS, the type of an object is "object".
});

test("object literal notation", function () {
  var person = {
    name: "Joao Pedro",
    age: 58,
  };
  equal("Joao Pedro", person.name, "what is the person's name?");
  equal(58, person.age, "what is the person's age?");
});

test("dynamically adding properties", function () {
  var person = {};
  person.name = "Joao Pedro";
  person.age = 58;
  equal("Joao Pedro", person.name, "what is the person's name?");
  equal(58, person.age, "what is the person's age?");
});

test("adding properties from strings", function () {
  var person = {};
  person["name"] = "Joao Pedro";
  person["age"] = 58;
  equal("Joao Pedro", person.name, "what is the person's name?");
  equal(58, person.age, "what is the person's age?");
});

test("adding functions", function () {
  var person = {
    name: "Joao Pedro",
    age: 58,
    toString: function () {
      return "I " + this.name + " am " + this.age + " years old.";
    },
  };
  equal(
    "I Joao Pedro am 58 years old.",
    person.toString(),
    "what should the toString function be?",
  );
  // The toString function uses the 'this' keyword to refer to the person object and returns a formatted string.

  // I made the changes to the name and age to test the functions myself by passing different parameters.
});
