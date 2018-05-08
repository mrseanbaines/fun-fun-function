// All JavaScript functions are closures. This means that the function body has
// access to variables that are defined outside the function body

var me = 'Bruce Wayne';
// This function has access to the variable `me` in the outer scope
function greetMe() {
  console.log('Hello, ' + me + '!');
}
greetMe();

function sendRequest() {
  var requestID = '123';
  $.ajax({
    url: 'myUrl',
    // This function has access to the variable `requestID` in the outer scope
    success: function(response) {
      alert('Request ' + requestID + ' returned');
    }
  });
}
