const choices = ["paper", "rock", "scissors"];
const buttons = document.querySelectorAll(".btn-icons");

let userChoice = undefined;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");

    console.log(userChoice);
  });
});

console.log(pickRandom());

function pickRandom() {
  return choices[Math.floor(Math.random() * choices.length)];
}
