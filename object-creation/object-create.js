// `Object.create` is a static method on the object prototype that creates a new
// object with the prototype set to a certain object

const cat = {
  makeSound: function() {
    console.log('meow');
  }
};

cat.makeSound(); // 'meow'

const cat = {
  makeSound: function() {
    console.log(this.sound);
  }
};

// Creates a new object with the prototype of that object set to `cat`
const mark = Object.create(cat);
mark.sound = 'mewuuUUF'
mark.makeSound();

const waffles = Object.create(cat);
waffles.sound = 'mrrrrrrrrrroooooooooow'
waffles.makeSound();

console.log('Is mark a cat?', cat.isPrototypeOf(mark));

// Recreate `Object.create` manually
function objectCreate(proto) {
  // Create new object
  const obj = {};
  // Set prototype of that object to another object
  Object.setPrototypeOf(obj, proto);
  return obj;
}

const mark = objectCreate(cat);
mark.sound = 'mewuuUUF'
mark.makeSound();

const waffles = objectCreate(cat);
waffles.sound = 'mrrrrrrrrrroooooooooow'
waffles.makeSound();

const cat = {
  // Put extra logic here
  init: function(sound) {
    this.sound = sound;
  },
  makeSound: function() {
    console.log(this.sound);
  }
};

const mark = Object.create(cat);
mark.init('mewuuUUF');
mark.makeSound();

const waffles = Object.create(cat);
waffles.init('mrrrrrrrrrroooooooooow');
waffles.makeSound();

const cat = {
  // Put extra logic here
  init: function(sound) {
    this.sound = sound;
    // Return `this` to allow chaining methods
    return this;
  },
  makeSound: function() {
    console.log(this.sound);
  }
};

const mark = Object.create(cat).init('mewuuUUF').makeSound();

const waffles = Object.create(cat).init('mrrrrrrrrrroooooooooow').makeSound();
