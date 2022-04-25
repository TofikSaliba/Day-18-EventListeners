const text = document.querySelector("textarea");
const msg = document.querySelector("div");
const charCount = document.querySelector("span");
const btn = document.querySelector("button");
msg.style.color = "red";
let counter = 100;

text.addEventListener("keydown", () => {
  if (text.value.length < 100) {
    setTimeout(() => {
      //! sometimes if u type really fast it takes time to update so it takes minus value of remaining chars, thats why i did this check. the timeout also is for little delay otherwise it wont count the first char typed.
      let size = counter - text.value.length;
      if (size < 0) {
        size = 0;
      }
      charCount.innerText = charCount.innerText.split(" ")[0] + " " + size;
    }, 10);
  }
});

btn.addEventListener("click", () => {
  if (text.value.length < 100) {
    msg.innerText = "need atleast 100 characters !";
  } else {
    text.value = "";
    msg.innerText = "";
    charCount.innerText = "Characters-needed: 100";
  }
});
