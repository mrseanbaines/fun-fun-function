// A promise is not the value itself, it's the promise of a value. Something you
// can pass around and write code around it, even though you don't have the
// value yet

import loadImage from './load-image-promised';

// This function call returns a promise
// The promise has a method on it called `then`
// We are calling `then` and passing it a callback function which will run when
// the image has finished loading
loadImage('images/cat1.jpg').then((img) => {
  let imgElement = document.createElement('img');
  imgElement.src = img.src;
  document.body.appendChild(imgElement);
});

// Same as above but with a callback
import loadImage from './load-image-callbacked';

// Second argument is a callback function
loadImage('images/cat2.jpg',
// First argument to the callback is an error
// If there is no error, the second argument will be the success object
(error, img) => {
  let imgElement = document.createElement('img');
  imgElement.src = img.src;
  document.body.appendChild(imgElement);
})

// Function to add the image to the DOM
let addImg = (src) => {
  let imgElement = document.createElement('img');
  imgElement.src = img.src;
  document.body.appendChild(imgElement);
};

// Multiple callbacks
loadImage('images/cat1.jpg', (error, img1) => {
  if (error) throw error;
  addImg(img1.src);
  loadImage('images/cat2.jpg', (error, img2) => {
    if (error) throw error;
    addImg(img2.src);
    loadImage('images/cat3.jpg', (error, img3) => {
      if (error) throw error;
      addImg(img3.src);
    })
  })
})

// Multiple promises
Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg')
]).then((images) => {
  images.forEach(img => addImg(img.src));
}).catch((error) => {
  // handle error
})
