// Check all items in an array are inside another array for the winningCombos.
const includesAll = (arr, values) => values.every((v) => arr.includes(v));

// Select the HTML element for winning text.
const youWon = document.getElementById("youwon");
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
// Player 1/2 box selection arrays for comparing against winningCombos.
let playerOneBoxes = [];
let playerTwoBoxes = [];

for (let index = 0; index < 9; index++) {
  const box = document.getElementById(`box${index}`);

  box.addEventListener(
    "click",
    function (event) {
      if (playerOneTurn == true) {
        box.classList.add("bi-cross");
        playerOneBoxes.push(index);
        playerOneTurn = false;
      } else {
        box.classList.add("bi-circle");
        playerOneTurn = true;
        playerTwoBoxes.push(index);
      }

      for (let combo = 0; combo < winningCombos.length; combo++) {
        if (includesAll(playerOneBoxes, winningCombos[combo])) {
          youwon.textContent = `Player one WINS`;
        }
        if (includesAll(playerTwoBoxes, winningCombos[combo])) {
          youwon.textContent = `Player two WINS`;
        }
      }
    },
    { once: true }
  );
}
