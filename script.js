const fullName = document.getElementById("fullName");
const phone = document.getElementById("phone");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const email = document.getElementById("email");

fullName.addEventListener("blur", validateFullName);
phone.addEventListener("blur", validatePhone);
zipCode.addEventListener("blur", validateZipCode);
password.addEventListener("blur", validatePassword);
email.addEventListener("blur", validateEmail);

function validateFullName() {
  const regExFullName = /^[a-zA-Z]{2,20}( )[a-zA-Z]{2,20}(( )[a-zA-Z]{2,20})?$/;

  if (!regExFullName.test(fullName.value)) {
    notValid(fullName);
  } else {
    Valid(fullName);
  }
}

function validatePhone() {
  const regExPhone = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!regExPhone.test(phone.value)) {
    notValid(phone);
  } else {
    Valid(phone);
  }
}

function validateZipCode() {
  const regExZipCode = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!regExZipCode.test(zipCode.value)) {
    notValid(zipCode);
  } else {
    Valid(zipCode);
  }
}

function validatePassword() {
  const regExPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (!regExPassword.test(password.value)) {
    notValid(password);
  } else {
    Valid(password);
  }
}

function validateEmail() {
  const regExEmail =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!regExEmail.test(email.value)) {
    notValid(email);
  } else {
    Valid(email);
  }
}

function notValid(input) {
  input.classList.add("notValid");
  input.classList.remove("Valid");
}

function Valid(input) {
  input.classList.remove("notValid");
  input.classList.add("Valid");
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  const inputs = document.querySelectorAll("form input");

  if (
    fullName.classList.contains("Valid") &&
    phone.classList.contains("Valid") &&
    zipCode.classList.contains("Valid") &&
    password.classList.contains("Valid") &&
    email.classList.contains("Valid")
  ) {
    document.querySelector("form").submit();
  } else {
    alert("Complete All The Fields");
    return;
  }
}
