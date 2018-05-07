// Map is a higher-order function that goes through an array and returns a
// transformed value

// Animals array
var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'cat' },
  { name: 'Jimmy',      species: 'fish' }
];

// `for` loop iterating through `animals` array and pushing each object's name
// to the empty `names` array'
var names = [];
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}

// Doing the same as above but with `map` function
// `map` takes in a callback function to filter the results
var names = animals.map(function(animal) {
  return animal.name;
});

// Use the `map` function to add to each iteration
var names = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species;
});

// Use ES6 arrow function to shorten code
var names = animals.map((animal) => {
  return animal.name;
});

// Use ES6 arrow function with implicit return to shorten code even more
var names = animals.map(animal => animal.name);

// Can be shortened even more by changing variable names to `x`
var names = animals.map(x => x.name);
