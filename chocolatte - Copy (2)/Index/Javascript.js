
const Firstname = document.getElementById("Firstname");
const Secondname = document.getElementById("Secondname");
const password = document.getElementById("Password");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
    const errors = [];

    if(Firstname.value.trim() === ""){
        errors.push("Firstname is required")
    }

    if(Secondname.value.trim() === ""){
        errors.push("Secondname is required")
    }

    if(password.value.length < 6){
        errors.push("Password must be at least 6 charaters")
    }

    if(password.value.length >10){
        errors.push("Password must be less than 10 charaters")
    }

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    }
})