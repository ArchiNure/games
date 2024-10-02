// Check all items in an array are inside another array for the winningCombos.
const includesAll = (arr, values) => values.every((v) => arr.includes(v));

//
const resetButton = document.getElementById("reset-button");

// Select the HTML element for winning text.
const youWon = document.getElementById("you-won");

// Values for the winning direction combinations.
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

// Value to define players turns.
let playerOneTurn = true;
let turnsNum = 0;

// Player 1/2 box selection arrays for comparing against winningCombos.
let playerOneBoxes = [];
let playerTwoBoxes = [];
let boxClickEvents = [];

function turns(box, index) {
  if (playerOneTurn == true) {
    box.classList.add("bi-cross");
    playerOneBoxes.push(index);
    playerOneTurn = false;
  } else {
    box.classList.add("bi-circle");
    playerOneTurn = true;
    playerTwoBoxes.push(index);
  }
  if (turnsNum == 9) {
    youWon.textContent = `DRAW`;
    endGame();
  }
}

function endGame() {
  for (let index = 0; index < 9; index++) {
    const box = document.getElementById(`box${index}`);
    const boxClickEvent = boxClickEvents[index];
    box.removeEventListener("click", boxClickEvent);
  }
}

function winner() {
  for (let combo = 0; combo < winningCombos.length; combo++) {
    if (includesAll(playerOneBoxes, winningCombos[combo])) {
      youWon.textContent = `Player one WINS`;
      endGame();
    }
    if (includesAll(playerTwoBoxes, winningCombos[combo])) {
      youWon.textContent = `Player two WINS`;
      endGame();
    }
  }
}

function boxClick(box, index) {
  turnsNum++;
  turns(box, index);
  winner();
}

/* This is an explanation
 * This does something
 * Here is a detailed explanation. */
function boxInteraction() {
  for (let index = 0; index < 9; index++) {
    const box = document.getElementById(`box${index}`);
    const boxClickEvent = boxClick.bind(null, box, index);
    boxClickEvents[index] = boxClickEvent;
    box.addEventListener("click", boxClickEvent, {
      once: true,
    });
  }
}

boxInteraction();
resetButton.addEventListener("click", resetGame);

function resetGame() {
  for (let index = 0; index < 9; index++) {
    const box = document.getElementById(`box${index}`);
    box.classList.remove("bi-circle");
    box.classList.remove("bi-cross");
  }
  youWon.textContent = "";
  playerOneTurn = true;
  playerOneBoxes = [];
  playerTwoBoxes = [];
  turnsNum = 0;

  boxInteraction();
}
