const includesAll = (arr, values) => values.every((v) => arr.includes(v));

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

let playerOneTurn = true;
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
          console.log("Player one WINS");
        }
        if (includesAll(playerTwoBoxes, winningCombos[combo])) {
          console.log("Player two WINS");
        }
      }
    },
    { once: true }
  );
}
