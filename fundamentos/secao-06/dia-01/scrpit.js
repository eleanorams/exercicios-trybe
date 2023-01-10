const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const clickHref = (event) => {
  event.preventDefault();
};
HREF_LINK.addEventListener("click", clickHref);

const clickCheckbox = (event) => {
  event.preventDefault();
};

INPUT_CHECKBOX.addEventListener("click", clickCheckbox);

const preventKeyPress = (e) => {
  if (e.key !== "a") {
    e.preventDefault();
  }
};

INPUT_TEXT.addEventListener("keypress", preventKeyPress);
