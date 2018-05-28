// The old ES5 way to write a class (What the ES6 `class` keyword does behind
// the scenes)
function Person(saying) {
  this.saying = saying;
}

Person.prototype.talk = function() {
  console.log('I say:', this.saying);
}

// `new` does the following:
// 1. Creates a new empty object.
// 2. Looks at what we called `new` on and sets the prototype of the new object
//    to be the object that we called.
// 3. Calls the constructor function with the new object assigned to the `this`
//    variable.
// 4. Returns the new object that it created (unless the constructor returns
//    an object).
var crockford = new Person('SEMICOLONS!!!1one1');
crockford.talk();

function Person(saying) {
  this.saying = saying;
}

Person.prototype.talk = function() {
  console.log('I say:', this.saying);
}

function spawn(constructor) {
  // 1. Create a new empty object.
  var obj = {};
  // 2. Set the prototype of `obj` to whatever object is on the prototype
  //    property of the constructor
  Object.setPrototypeOf(obj, constructor.prototype);
  // First argument to `apply` is what we want to have set at the `this` context
  // Second argument to `apply` is an array of arguments that we want to call
  // the function with.

  // ES6 way to create an array from `arguments`
  // var argsArray = Array.from(arguments);

  // 3. Calls the constructor function with the new object assigned to the
  //    `this` variable.
  var argsArray = Array.prototype.slice.apply(arguments);
  // Return the new object
  return constructor.apply(obj, argsArray.slice(1)) || obj;
}

var crockford = spawn(Person, 'SEMICOLONS!!!1one1');
crockford.talk();
