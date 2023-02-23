let controlSlider = document.getElementById("font-size-control");

let text = document.getElementById("text");
text.style.fontSize = controlSlider.value + "px";
controlSlider.oninput = function() {
  text.style.fontSize = controlSlider.value + "px";
};
console.log(controlSlider);