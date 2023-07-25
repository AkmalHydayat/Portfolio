const nameForm = document.getElementById("formName");
const email = document.getElementById("formEmail");
const message = document.getElementById("formMessage");
const output = document.getElementById("output");
const send = document.getElementById("send");

send.addEventListener("click", function validation(event) {
  event.preventDefault();
  if (nameForm.value != "" && email.value != "" && message.value != "") {
    output.innerHTML = "Success!!";
  } else {
    nameForm.value == ""
      ? (nameForm.style.borderColor = "red")
      : (nameForm.style.borderColor = "#003049");
    email.value == ""
      ? (email.style.borderColor = "red")
      : (email.style.borderColor = "#003049");
    message.value == ""
      ? (message.style.borderColor = "red")
      : (message.style.borderColor = "#003049");
  }
});

2