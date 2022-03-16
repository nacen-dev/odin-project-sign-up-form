let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    if (!event.target.validity.valid) {
      event.target.className = "error";
    } else if (event.target.validity.valid) {
      event.target.className = "valid";
    }
  });
});

let passwordFields = document.querySelectorAll(".password");
let passwordMismatch = document.querySelector(".password-mismatch");

passwordFields[1].addEventListener("input", (event) => {
  if (
    event.target.validity.valid &&
    passwordFields[0].validity.valid &&
    event.target.value !== passwordFields[0].value
  ) {
    passwordMismatch.textContent = "* Passwords do not match.";
  }
});
