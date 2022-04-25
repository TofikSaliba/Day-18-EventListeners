const input = document.querySelector("input");
const btn = document.querySelector("button");
const text = document.querySelector("h2");

input.placeholder = "Enter Age";

function submit() {
  text.style.color = "red";
  if (isNaN(Number(input.value))) {
    text.innerText = "Please enter a number!!!!";
  } else if (Number(input.value) > 120) {
    text.innerText =
      "wooh! You cant be that old! no one lives more than 120 years...";
  } else if (Number(input.value) >= 18) {
    text.style.color = "green";
    text.innerText = "you can drink :)";
  } else {
    text.innerText = "you're too young :(";
  }
  input.value = "";
}

btn.addEventListener("click", submit);
input.addEventListener("keydown", (eve) => {
  if (eve.key === "Enter") {
    submit();
  }
});
