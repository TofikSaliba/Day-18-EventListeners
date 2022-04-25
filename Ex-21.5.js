const input = document.querySelector("input");
const btn = document.querySelector("button");
const msg = document.querySelector("span");
const smileys = document.querySelector(".smileyContainer");
const cont = document.querySelector(".inputContainer");

btn.addEventListener("click", submit);
input.addEventListener("keydown", (eve) => {
  if (eve.key === "Enter") {
    submit();
  }
});

function submit() {
  let number = Number(input.value);
  smileys.innerHTML = "";
  if (isNaN(number)) {
    msg.innerText = "Please enter a number!!!!";
  } else if (number > 1000) {
    msg.innerText =
      "No more than 1000 please!! you don't want to crash your browser right ?!";
  } else {
    msg.innerText = "";
    for (let i = 0; i < number; i++) {
      const img = document.createElement("img");
      img.style = "width: 100px;";
      img.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2048px-Smiley.svg.png";
      smileys.appendChild(img);
    }
  }
  input.value = "";
}
