const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const colorVal = document.querySelector(".color");

button.addEventListener("click", () => {
  let hexColor = "#";

  for (let index = 0; index < 6; index++) {
    hexColor += hex[randomNumber()];
  }

  colorVal.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function randomNumber() {
  let random = Math.floor(Math.random() * hex.length);

  return random;
}
