// A monad is a functor that implements flatmap

stream
  .map(word => word.toUpperCase())
  .onValue(word => console.log(word))

stream
  .map(word => getInPortuguese(word)) // returns streams
  .onValue(word => console.log(word))

stream
  .flatMap(word => getInPortuguese(word)) // returns values
  .onValue(word => console.log(word))

stream.push('cat');
stream.push('meal');
stream.push('trumpet');
