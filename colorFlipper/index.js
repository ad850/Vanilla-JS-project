const button = document.getElementById("btn");
const colorVal = document.querySelector(".color");

const colors = ["green", "blue", "red", "yellow", "aqua"];

button.addEventListener("click", () => {
  let color = colors[Math.floor(Math.random() * colors.length)];
  colorVal.textContent = color;
  document.body.style.backgroundColor = color;
});
