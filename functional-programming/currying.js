// Currying is when a function doesn't take all of it's arguments up front.
// Instead, you give it the first argument and it returns another function,
// which you call with the second argument, and so on.
// The last function returns the value that you want.

// A normal function that takes in 3 string arguments as returns a string
let dragon = (name, size, element) =>
  name + ' is a ' +
  size + ' dragon that breathes ' +
  element + '!'

// Same function in the curried version
let dragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!';

// ES5 version of the above curry function
var dragon = function dragon(name) {
  return function(size) {
    return function(element) {
      return name + " is a " + size + " dragon that breathes " + element + "!";
    };
  };
};

// Call all functions in a chain
console.log(dragon('fluffykins')('tiny')('lightning'));

// Split into 3 parts
let fluffykinsDragon = dragon('fluffykins');
let tinyDragon = fluffykinsDragon('tiny');

console.log(tinyDragon('lightning'));

// Dragons array
let dragons = [
  { name: 'fluffykins', element: 'lightning' },
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' }
];

// Testing function
let hasElement =
  (element, obj) => obj.element === element;

// Normal filter function
let lightningDragons =
  dragons.filter(x => hasElement('lightning', x))

console.log(lightningDragons);
