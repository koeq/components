// error messages for form //
const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e)=> {
    let messages = [];

    if (password.value.length < 6) {
        messages.push("Your password must be at leas 6 characters!");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join (', ');
        errorElement.style.border = "1px solid rgba(255, 0, 0, 0.5)";
    }
})
