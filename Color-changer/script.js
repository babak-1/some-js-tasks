const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const colorName = document.querySelector(".colorName");

btn.addEventListener("click", clickBtn);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  colorName.innerHTML = color;

  return color;
}

function clickBtn() {
  const randomColor = getRandomColor();
  container.style.backgroundColor = randomColor;
}
