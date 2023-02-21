let controlSlider = document.getElementById("font-size-control");

let text = document.getElementById("text");

controlSlider.oninput = function() {
  text.style.fontSize = controlSlider.value + "px";
};
console.log(controlSlider);