let indicator = document.querySelector(".scroll-indicator .progress");
console.log(indicator);
let scrollHeiht = document.documentElement.scrollHeight;
let clientHeight = document.documentElement.clientHeight;

let mainScrollHeight = scrollHeiht - clientHeight;

window.addEventListener("scroll", scroll);

function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrolled = (scrollTop / mainScrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
}
