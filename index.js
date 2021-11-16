const axios = require("axios");

console.log("hello");

document.addEventListener("DOMContentLoaded", getInfo());

const getInfo = () => {
  axios
    .get("https://mrmadgav.github.io/FlatWidget/")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log("Fetch error " + err));
};

// // osmosis ---- //

// const osmosis = require("osmosis");
// osmosis
//   .get("https://mrmadgav.github.io/FlatWidget/")
//   .set({ Title: "title" })
//   .data(console.log);

// selenium ---- //

// var webdriver = require("selenium-webdriver");
// var browser = new webdriver.Builder()
//   .usingServer()
//   .withCapabilities({ browserName: "chrome" })
//   .build();
// browser.get("http://en.wikipedia.org/wiki/Wiki");
// browser
//   .findElements(webdriver.By.css('[href^="/wiki/"]'))
//   .then(function (links) {
//     console.log("Found", links.length, "Wiki links.");
//     browser.quit();
//   });
