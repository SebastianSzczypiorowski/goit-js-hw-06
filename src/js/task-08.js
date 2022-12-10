const input = document.querySelector(".login-form");

input.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    window.alert("Please fill in all the fields!");
  } else {
    console.log(`email: ${email.value}, Password: ${password.value}`);
    e.currentTarget.reset();
  }
});
