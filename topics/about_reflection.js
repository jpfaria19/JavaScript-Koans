module("About Reflection (topics/about_reflection.js)");

function A() {
  this.aprop = "A";
}

function B() {
  this.bprop = "B";
}

B.prototype = new A();

test("typeof", function () {
  equal("object", typeof {}, "what is the type of an empty object?");
  equal("string", typeof "apple", "what is the type of a string?");
  equal("number", typeof -5, "what is the type of -5?");
  equal("boolean", typeof false, "what is the type of false?");
  // The typeof operator returns a string indicating the type of the unevaluated operand.
});

test("property enumeration", function () {
  var keys = [];
  var values = [];
  var person = { name: "Joao Pedro", age: 58, unemployed: false };
  for (var propertyName in person) {
    keys.push(propertyName);
    values.push(person[propertyName]);
  }
  ok(keys.equalTo(["name", "age", "unemployed"]), "what are the property names of the object?");
  ok(values.equalTo(["Joao Pedro", 58, false]), "what are the property values of the object?");
  // The for-in loop iterates over all enumerable properties of an object, adding the property names to keys and their corresponding values to values.
});

test("hasOwnProperty", function () {
  var b = new B();
  var propertyName;

  var keys = [];
  for (propertyName in b) {
    keys.push(propertyName);
  }
  equal(2, keys.length, "how many elements are in the keys array?");
  deepEqual(["bprop", "aprop"], keys, "what are the properties of the array?");

  // hasOwnProperty returns true if the parameter is a property directly on the object,
  // but not if it is a property accessible via the prototype chain.
  var ownKeys = [];
  for (propertyName in b) {
    if (b.hasOwnProperty(propertyName)) {
      ownKeys.push(propertyName);
    }
  }
  equal(1, ownKeys.length, "how many elements are in the ownKeys array?");
  deepEqual(["bprop"], ownKeys, "what are the own properties of the array?");
  // The for-in loop iterates over all enumerable properties of an object, including those inherited via the prototype chain.
  // hasOwnProperty checks if a property is directly on the object, not inherited.
});

test("constructor property", function () {
  var a = new A();
  var b = new B();
  equal("function", typeof a.constructor, "what is the type of a's constructor?");
  equal("A", a.constructor.name, "what is the name of a's constructor?");

  // console.log(`A constructor: ${a.constructor.name}`);
  // console.log(`B constructor: ${b.constructor.name}`);
  equal("A", b.constructor.name, "what is the name of b's constructor?");

  // Because of line 11, where function B's property receives the value of function A, the function assumes that it is now the result of function A.
});

test("eval", function () {
  // eval executes a string
  var result = "";
  eval("result = 'apple' + ' ' + 'pie'");
  equal("apple pie", result, "what is the value of result?");
  // eval executes a string of JS code, resulting in "apple pie".
});
