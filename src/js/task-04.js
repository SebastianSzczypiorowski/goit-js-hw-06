const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = parseInt(document.querySelector("#value").textContent);
const clickDec = () => {
  counterValue -= 1;
  value.innerHTML = `<span id="value">${counterValue}</span>`;
};
const clickInc = () => {
  counterValue += 1;
  value.innerHTML = `<span id="value">${counterValue}</span>`;
};

buttonDec.addEventListener("click", clickDec);
buttonInc.addEventListener("click", clickInc);
