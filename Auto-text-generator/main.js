const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

let words = ["ruh", "pul", "şah", "qan bədəndə", "şüur", "insan", "sən", "can"];

const typingDelay = 200;
const erasingDelay = 200;

const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(typing, newLetterDelay);
  }
});

function typing() {
  if (charIndex < words[index].length) {
    typedText.innerText += words[index].charAt(charIndex);
    charIndex += 1;
    setTimeout(typing, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.innerHTML = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(typing, typingDelay + 1000);
  }
}
