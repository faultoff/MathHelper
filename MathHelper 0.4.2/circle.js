const RElement = document.querySelector(".r");
const ResultElement = document.querySelector(".result");

// console.log(ResultElement, RElement);

function InputAction() {
  ResultElement.value = Math.PI * Math.pow(Number(RElement.value), 2);
}

RElement.addEventListener("input", InputAction);
