function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const raibow = document.querySelector('.color');
const changeRainbowBtn = document.querySelector('.change-color');
const body = document.body;


const changeRainbow = () =>{
  raibow.textContent = getRandomHexColor();
  body.style.backgroundColor = raibow.textContent;
};

changeRainbowBtn.addEventListener('click', changeRainbow);
