const submitButton = document.getElementById("run-game");

function mayorMenor(num1, num2) {
  console.log(num1);
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
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  mayorMenor(num1, num2);
});
