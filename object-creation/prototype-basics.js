// In JavaScript, we achieve inheritance using prototypes.

function talk(sound) {
  console.log(sound);
}
talk('woof'); // 'woof'

function talk() {
  console.log(this.sound);
}
talk(); // undefined

function talk() {
  console.log(this.sound);
}
let animal = {
  // In ES6, we can just use `talk`, since the property and value are the same
  // talk: talk
  talk
};
let cat = {
  sound: 'meow!'
};
let dog = {
  sound: 'woof!'
};
let prarieDog = {
  howl: function() {
    console.log(this.sound.toUpperCase());
  }
};
// Set the prototype of `cat` to be `aniaml`
// This allows us to call the `talk` method that gets inherited from the
// `animal` object
Object.setPrototypeOf(cat, animal);
Object.setPrototypeOf(dog, animal);
cat.talk(); // 'meow!'
dog.talk(); // 'woof!'
Object.setPrototypeOf(prarieDog, dog);
prarieDog.howl(); // 'WOOF!'
