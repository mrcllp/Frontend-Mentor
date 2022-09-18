const choices = ["paper", "rock", "scissors"];
const buttons = document.querySelectorAll(".pick");
const scoreEl = document.getElementById("score");
const main = document.getElementById("main");
const picks = document.getElementById("picks");
const reset = document.getElementById("reset");
const userPick = document.getElementById("player_pick");
const compPick = document.getElementById("computer_pick");
const winner = document.getElementById("winner");

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");

    checkWinner();
  });
});

reset.addEventListener("click", () => {
  main.style.display = "flex";
  picks.style.display = "none";
});

function checkWinner() {
  const computerChoice = pickRandom();

  updatePick(userPick, userChoice);
  updatePick(compPick, computerChoice);

  if (userChoice === computerChoice) {
    //draw
    winner.innerText = "Draw";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    // user won
    updateScore();
    winner.innerText = "You Win";
  } else {
    // user lost
    winner.innerText = "You Lose";
  }

  // show picks and hide main
  main.style.display = "none";
  picks.style.display = "flex";
}

function updateScore() {
  score += 1;

  scoreEl.innerText = score;
}

function pickRandom() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updatePick(pickEl, choice) {
  //reset
  pickEl.classList.remove("btn-paper");
  pickEl.classList.remove("btn-rock");
  pickEl.classList.remove("btn-scissors");
  // update img
  const img = pickEl.querySelector("img");
  pickEl.classList.add(`btn-${choice}`);
  img.src = `./images/icon-${choice}.svg`;
  img.alt = choice;
}
