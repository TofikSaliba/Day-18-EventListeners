const header = document.querySelector("h1");
const para = document.querySelector("p");
const btns = document.querySelectorAll("button");
let styles = getComputedStyle(para);

btns[0].addEventListener("click", () => {
  let currSize = Number(styles.fontSize.split("px")[0]);
  if (currSize < 100) {
    para.style.fontSize = currSize + 1 + "px";
    header.innerText = `Text size is: ${currSize + 1}px`;
  } else {
    header.innerText = `Text size is: ${currSize}px.
    Maximum size reached!!`;
  }
});

btns[1].addEventListener("click", () => {
  let currSize = Number(styles.fontSize.split("px")[0]);
  if (currSize > 6) {
    para.style.fontSize = currSize - 1 + "px";
    header.innerText = `Text size is: ${currSize - 1}px`;
  } else {
    header.innerText = `Text size is: ${currSize}px.
    Minimum size reached!!`;
  }
});
