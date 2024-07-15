const submitButton = document.getElementById("run-game");

function mayorMenor(num1, num2) {
  const answer = document.getElementById("answer");
  if (num1 < num2) {
    answer.textContent = `${num2} is bigger.`;
  } else if (num1 == num2) {
    answer.textContent = `${num1} and ${num2} are the same.`;
  } else {
    answer.textContent = `${num1} is bigger`;
  }
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  mayorMenor(num1, num2);
});
