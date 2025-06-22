const num = Math.floor(Math.random() * 10) + 1;
const guess = parseInt(prompt("Guess a number between 1 and 10"));
if (guess === num) {
  alert("Good Work");
} else {
  alert("Not matched. The number was: " + num);
}
