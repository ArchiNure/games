let playerOneTurn = true;

for (let index = 0; index < 9; index++) {
  const box = document.getElementById(`box${index}`);

  box.addEventListener("click", function (event) {
    if (playerOneTurn == true) {
      box.classList.add("bi-cross");
      playerOneTurn = false;
    } else {
      box.classList.add("bi-circle");
      playerOneTurn = true;
    }
  });
}
