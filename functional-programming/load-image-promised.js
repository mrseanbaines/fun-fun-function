function loadImage(url) {
  // The `Promise` constructor takes a single function as it's argument. This
  // callback takes two arguments, `resolve` and `reject` - both also functions
  return new Promise((resolve, reject) => {
    let image = new Image();

    image.onload = function() {
      resolve(image);
    }

    image.onerror = function() {
      let msg = 'Could not load image at ' + url;
      reject(new Error(msg));
    }

    image.src = url;
  })
}

export default loadImage;
