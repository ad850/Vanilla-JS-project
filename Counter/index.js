let count = 0;

//value and button

const value = document.querySelector(".value");
const btn = document.querySelectorAll(".btn");

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const bottonClass = e.target.classList;
    if (bottonClass.contains("decrease")) {
      count--;
    } else if (bottonClass.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    if (count) {
      value.style.color = count % 2 === 0 ? "green" : "red";
    }
  });
});

