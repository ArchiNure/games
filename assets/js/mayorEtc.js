function hello(num1, num2) {
  if (num1 < num2) {
    console.log(`${num2} is bigger.`);
  } else if (num1 == num2) {
    console.log(`${num1} and ${num2} are the same.`);
  } else {
    console.log(`${num1} is bigger`);
  }
}

const submitButton = document.getElementById("run-game");
console.log(submitButton);
