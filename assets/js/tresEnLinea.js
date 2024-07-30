const box0 = document.getElementById("box0");

for (let index = 0; index < 9; index++) {
  const box = document.getElementById(`box${index}`);

  box.addEventListener("click", function (event) {
    console.log("click");
  });
}
