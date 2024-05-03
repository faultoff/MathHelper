const InputElementA = document.querySelector(".a");
const InputElementB = document.querySelector(".b");
const InputElementH = document.querySelector(".h");
const ResultElement = document.querySelector(".result");
const CalcElement = document.querySelector(".calc");

console.log(InputElementA, InputElementB, ResultElement, CalcElement);

function clickAction() {
  const a = Number(InputElementA.value);
  const b = Number(InputElementB.value);
  const h = Number(InputElementH.value);

  if (a > 0 && b > 0 && h > 0) {
    const s = a * b * h;
    ResultElement.value = s;
  } else {
    ResultElement.value = "Error";
  }
}

CalcElement.addEventListener("click", clickAction);
