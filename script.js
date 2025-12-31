const roles = [
  "Aspiring Software Developer",
  "Java & SQL Learner",
  "Data-Oriented Enthusiast",
  "Problem Solver"
];

let index = 0;
let char = 0;
const typedText = document.querySelector(".typed-text");

function type() {
  if (char < roles[index].length) {
    typedText.textContent += roles[index].charAt(char);
    char++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (char > 0) {
    typedText.textContent = roles[index].substring(0, char - 1);
    char--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);
