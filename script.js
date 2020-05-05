const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e)=> {
    let messages = [];
    if (name.value === "" || name.value === null || name.value === "Your Name") {
        messages.push("Name is required!");
    }
    if (password.value === "" || password.value === null || password.value === "Your Password") {
        messages.push("Password is required!");
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join (', ');
    }
})
