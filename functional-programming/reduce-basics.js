// Reduce can be used to express any list transformation

var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

// `for` loop iterating through `orders` array and adding each item's amount to
// the total amount on each iteration
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}

// Doing the same as above but with `reduce` function
// `reduce` takes in a callback function and has the sum set as the second
// parameter of the `reduce` function, and passed in as the second parameter in
// the callback function
var totalAmount = orders.reduce(function(sum, order) {
  return sum + order.amount;
}, 0);

// Use ES6 arrow function with implicit return to shorten code
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
