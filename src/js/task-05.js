const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  e.preventDefault();
  if (e.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = e.currentTarget.value;
  }
});
