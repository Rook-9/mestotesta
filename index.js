// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// get cat image DOM element using querySelector
// which accepts CSS selector as parameter
const catImage = document.querySelector(".card-cat img");
// test if querySelector got right element
// console.log(catImage);

// fetch cat image
// (url format may be learn from documentation of cataas.com)
fetch("https://cataas.com/cat?json=true&height=240")
  .then((res) => res.json())
  // check data is correct for testing purposes
  // .then((data) => console.log(data))
  .then((data) => {
    // set image src attribute value
    // as source returns relative url
    // we should concat it with source domain
    catImage.src = "https://cataas.com" + data.url;
  })
  .catch((err) => console.log("failed to load cat image", err));
