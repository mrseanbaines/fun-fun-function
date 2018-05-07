// Basic function
function triple(x) {
  return x * 3;
}

// Anonymous function assigned to variable
var triple function(x) {
  return x * 3;
}

// Pass function around
var waffle = triple;

// Call `triple` function
waffle(30) // 90

// Animals array
var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'cat' },
  { name: 'Jimmy',      species: 'fish' }
];

// `for` loop iterating through `animals` array and pushing each object whose
// species is 'dog' to the empty `dogs` array
var dogs = [];
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') {
    dogs.push(animals[i]);
  }
}

// Doing the same as above but with `filter` function
// `filter` takes in a callback function to test against
var dogs = animals.filter(function(animal) {
  return animal.species === 'dog';
});

// Decouple testing function from filter so that it can be resused
// This takes care of determining if the species is a dog
var isDog = function(animal) {
  return animal.species === 'dog';
};

// This takes care of creating a new array with all of the dogs
var dogs = animals.filter(isDog);
