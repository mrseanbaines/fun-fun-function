Normal function logging the `sound` parameter
function talk(sound) {
  console.log(sound);
}
talk('woooooff!!'); // 'woooooff!!'

function talk() {
  // `this` here refers to the global object
  console.log(this.sound);
}
talk(); // undefined

function talk() {
  console.log(this.sound);
}
let boromir = {
  sound: 'One does not simply walk into mordor!'
};
// Explicitly bind the `this` context to the `boromir` object
let talkBoundToBoromir = talk.bind(boromir);
talkBoundToBoromir(); // 'One does not simply walk into mordor!'
// The original `talk` function is unaffected
talk(); // undefined

function talk() {
  console.log(this.sound);
}
let boromir = {
  // Place the reference to the function as a property on an object
  speak: talk,
  sound: 'One does not simply walk into mordor!'
};
// Implicitly bind the `this` context to the `boromir` context object
boromir.speak(); // 'One does not simply walk into mordor!'
// The original `talk` function is still unaffected
talk(); // undefined

function talk() {
  console.log(this.sound);
}
let boromir = {
  sound: 'One does not simply walk into mordor!'
};
// `bind` creates a copy of the `talk` function with an explicitly defined
// `this` context
boromir.speak = talk.bind(boromir);
let blabber = boromir.speak;
blabber(); // 'One does not simply walk into mordor!'

function talk() {
  console.log(this.sound);
}
let boromir = {
  blabber: talk,
  sound: 'One does not simply walk into mordor!'
};
let gollum = {
  jabber: boromir.blabber,
  sound: 'My precioussss...'
}
gollum.jabber(); // 'My precioussss...'
