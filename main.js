const password = document.getElementById("random-password");
const btn = document.getElementById("generate-btn");
const copies = document.getElementById("copy");

// create password
const rndmString = require("randomstring");

function createPassword() {
  password.value = rndmString.generate(20);
}

// copy password
function copyPassword() {
  password.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
}

btn.addEventListener("click", createPassword);
copies.addEventListener("click", copyPassword);
