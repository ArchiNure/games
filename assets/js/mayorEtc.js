const submitButton = document.getElementById("run-game");

function mayorMenor(num1, num2) {
  if (num1 < num2) {
    console.log(`${num2} is bigger.`);
  } else if (num1 == num2) {
    console.log(`${num1} and ${num2} are the same.`);
  } else {
    console.log(`${num1} is bigger`);
  }
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  mayorMenor(num1, num2);
});
