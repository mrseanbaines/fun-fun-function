// Functors are objects that have a `map` method.
// It is the object that is implementing `map` that is the functor.
// The `map` method of the functor takes the functor contents and transforms
// them using the transformation callback that is passed to `map`. Map then
// returns a new functor of the same type which contains the transformed values.

const dragons = [
  { name: 'Fluffykins', health: 70 },
  { name: 'Deathlord', health: 65000 },
  { name: 'Little pizza', health: 2 }
]

const names = dragons.map(dragon => dragon.name);

console.log(names); // ['Fluffykins', 'Deathlord', 'Little pizza']

const whenDragonLoaded = new Promise((resolve, reject) => {
  // fake loading
  setTimeout(() => resolve({
    { name: 'Fluffykins', health: 70 }
  }), 2000)
})

const names = whenDragonLoaded
  .map(dragon => dragon.name)
  .then(name => console.log(name)) // 'Fluffykins'

const nameLengths = dragons
  .map(dragon => dragon.name)
  .map(dragonName => dragonName.length)

console.log(nameLengths); // [10, 9, 12]
