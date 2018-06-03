class Mammal {
  constructor() {
    this.sound = 'wsdfjkljfkdslfjsk';
  }
}

let fluffykins = new Mammal();
fluffykins; // Mammal {}

class Mammal {
  constructor(sound) {
    this.sound = sound;
  }
}

let fluffykins = new Mammal('woof!');
fluffykins; // Mammal { sound: 'woof!' }

class Mammal {
  constructor(sound) {
    this.sound = sound;
  }

  talk() {
    return this.sound;
  }
}

let fluffykins = new Mammal('woof!');
let x = fluffykins.talk();
x; // 'woof!'

class Mammal {
  constructor(sound) {
    this.sound = sound;
  }

  talk() {
    return this.sound;
  }
}

// Inheritance
class Dog extends Mammal {
  constructor() {
    // `super()` calls the constructor of the inherited class (Mammal, in this
    // case)
    super('woffeliwoffffffffffffff');
  }
}

let fluffykins = new Dog('woof!');
// Private members don't exist in JavaScript
let y = fluffykins.sound;
y; // 'woffeliwoffffffffffffff'
let x = fluffykins.talk();
x;
fluffykins.sound = 'meow';
let z = fluffykins.sound;
z; // 1
// Classes are actually functions, because they are syntactic sugar for the old
// prototypal inheritance model
let foo = typeof Dog;
foo; // function
let bar = Dog.prototype.talk;
x; 'woffeliwoffffffffffffff'

class Mammal {
  constructor(sound) {
    // Prefixing a `_` indicates a member that should act as private
    this._sound = sound;
  }

  talk() {
    return this._sound;
  }
}

class Dog extends Mammal {
  constructor() {
    super('woffeliwoffffffffffffff');
  }
}

let fluffykins = new Dog('woof!');
fluffykins._sound = 'meow';
let x = Dog.prototype.talk.bind({
  _sound: 'ROAR'
})()
x;
