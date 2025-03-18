document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let state = document.getElementById("state").value.trim();
    let country = document.getElementById("country").value;
    let agree = document.getElementById("agree").checked;

    // Validation conditions
    if (firstName === "") {
        showError("errorFirstName");
        isValid = false;
    } else {
        hideError("errorFirstName");
    }

    if (lastName === "") {
        showError("errorLastName");
        isValid = false;
    } else {
        hideError("errorLastName");
    }

    if (email === "" || !email.includes("@")) {
        showError("errorEmail");
        isValid = false;
    } else {
        hideError("errorEmail");
    }

    if (password.length < 6) {
        showError("errorPassword");
        isValid = false;
    } else {
        hideError("errorPassword");
    }

    if (confirmPassword !== password) {
        showError("errorConfirmPassword");
        isValid = false;
    } else {
        hideError("errorConfirmPassword");
    }

    if (age === "" || age < 18) {
        showError("errorAge");
        isValid = false;
    } else {
        hideError("errorAge");
    }

    if (phone.length !== 10 || isNaN(phone)) {
        showError("errorPhone");
        isValid = false;
    } else {
        hideError("errorPhone");
    }

    if (address === "") {
        showError("errorAddress");
        isValid = false;
    } else {
        hideError("errorAddress");
    }

    if (state === "") {
        showError("errorState");
        isValid = false;
    } else {
        hideError("errorState");
    }

    if (country === "") {
        alert("Please select a country.");
        isValid = false;
    }

    if (!agree) {
        alert("You must agree to the declaration.");
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful!");
    }
}

function showError(id) {
    document.getElementById(id).style.visibility = "visible";
}

function hideError(id) {
    document.getElementById(id).style.visibility = "hidden";
}
