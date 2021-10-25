const form = document.querySelector(".form");
const errorMsg = document.querySelector(".error-msg");
const email = document.querySelector(".form__email");

console.log(email)
console.log(errorMsg)
console.log(form)

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if(!email.validity.valid) {
    showError();
    //prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
	errorMsg.style.display = "block";
	form.classList.add("form-error");
	email.classList.add("form__email-error-icon")
}