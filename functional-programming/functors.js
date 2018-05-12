// Functors are functions that, when giving a function and a value, will unwrap
// the value into its individual parts, feed those parts into the function that
// it has been given, and take the return values and return them in a structured
// form.

// Function that returns the value plus 1
function plus1(value) {
  return value + 1;
}

console.log(plus1(3)); // 4
console.log(plus1([3,4])); // Breaks!

// Adds support for arrays
function plus1(value) {
  if (Array.isArray(value)) {
    var newArray = [];
    for (var i = 0; i < value.length; i++) {
      newArray[i] = value[i];
    }
    return newArray;
  }
  return value + 1;
}

console.log(plus1([3,4])); // [4, 5]

// Adds support for strings
function plus1(value) {
  if (Array.isArray(value)) {
    var newArray = [];
    for (var i = 0; i < value.length; i++) {
      newArray[i] = value[i];
    }
    return newArray;
  }
  if (typeof value === 'string') {
    var chars = value.split('');
    var newCharArray = [];
    for (var i = 0; i < chars.length; i++) {
      newCharArray[i] = String.fromCharCode(chars[i].charCodeAt(0) + 1);
    }
    return newCharArray.join('');
  }
  return value + 1;
}

console.log(plus1('ABC')); // now outputs 'BCD'

function plus1(value) {
  return value + 1;
}

[3,4].map(plus1) // [4, 5]

// Functor handling strings and using separate incrementing functions
function stringFunctor(value, fn) {
  var chars = value.split('');
  return chars.map(function(char) {
    return String.fromCharCode(fn(char.charCodeAt(0)));
  }).join('')
}

function plus1(value) {
  return value + 1;
}

function minus1(value) {
  return value - 1;
}

console.log([3,4].map(plus1)); // [4, 5]
console.log(stringFunctor('ABC', plus1)); // 'BCD'
console.log(stringFunctor('XYZ', minus1)); // 'WXY'
