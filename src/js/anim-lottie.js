const lottie = require("lottie-web");
var svgContainer = document.querySelector("#bm");

var animItem = lottie.loadAnimation({
  wrapper: svgContainer,
  animType: "svg",
  loop: true,
  path: "img/logo-anim.json",
});
