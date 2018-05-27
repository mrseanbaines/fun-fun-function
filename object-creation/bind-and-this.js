// A basic object literal
let dog = {
  sound: 'woof',
  talk: function() {
    console.log(this.sound);
  }
};

dog.talk() // 'woof'

// Assign `talk` method to `talkFunction`
// When we reassign a method to a variable, it is no longer a method connected
// to an object, it's just a free flowing function
let talkFunction = dog.talk;
// In a function, the `this` keyword does not refer to the context where the
// function was defined, it refers to the context where the function is being
// called.
talkFunction() // undefined

// Explicitly bind the `this` context to the `dog` object
let boundFunction = talkFunction.bind(dog);
boundFunction() // 'woof'


let button = document.getElementById('myNiceButton');

// Assign the talk method to the click handler of the `button`.
// When the click handler is being called, `this` is not going to be the `dog`
// object, it's going to be the `window` object
button.addEventListener(
  'click',
  dog.talk
);

// Explicitly bind the `this` context to the `dog` object
button.addEventListener(
  'click',
  dog.talk.bind(dog)
);
