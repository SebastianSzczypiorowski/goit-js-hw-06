const input = document.getElementById("validation-input");
const inputLength = input.getAttribute("data-length");

input.addEventListener("blur", () => {
  if (inputLength == input.value.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
console.log(input);
