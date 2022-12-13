const input = document.querySelector(".login-form");

input.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = "";
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    window.alert("Please fill in all the fields!");
  } else {
    result = `email: ${email.value}, Password: ${password.value}`;
    console.log(result);
    e.currentTarget.reset();
  }
});
