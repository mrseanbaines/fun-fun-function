let cat = { breed: 'munchkin' };

let myCat = { name: 'Fluffykins' };
Object.setPrototypeOf(myCat, cat);

console.log(myCat.name); // Fluffykins
console.log(myCat.breed); // munchkin
console.log(myCat.__proto__); // { breed: 'munchkin' }

// `__proto__` is a reference to the original prototype object.
cat.tailLength = 15;
console.log(myCat.__proto__); // { breed: 'munchkin', tailLength: 15 }
console.log(myCat.tailLength); // 15

function Dog() {}
// The `prototype` property only exists on functions and is only for use with
// the `new` keyword
Dog.prototype.breed = 'Bulldog';
let myDoggie = new Dog();
console.log(myDoggie.breed); // 'Bulldog'
console.log(myDoggie.__proto__); // { breed: 'Bulldog', constructor: ƒ }
console.log(myDoggie.prototype); // undefined
console.log(Dog.prototype); // { breed: 'Bulldog', constructor: ƒ }

function Giraffe() {}
console.log(Giraffe.prototype); // { constructor: ƒ }
let koala = {};
console.log(koala.prototype); // undefined
console.log(koala.__proto__); // { constructor: ƒ, __defineGetter__: ƒ, … }
console.log(koala.__proto__ === Object.prototype); // true
Object.prototype.waffle = 'hwwuhdsuhdsuhiu';
console.log(koala.waffle); // 'hwwuhdsuhdsuhiu'
