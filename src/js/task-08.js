const input = document.querySelector(".login-form");

input.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = input.elements.email.value;
  const password = input.elements.password.value;

  if (!email || !password) {
    window.alert("Please fill in all the fields!");
  } else {
    const loginData = { email, password };
    console.log(loginData);

    e.currentTarget.reset();
  }
});
