function validateForm() {
    let isValid = true;

    // Getting input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let website = document.getElementById("website").value.trim();
    let message = document.getElementById("message").value.trim();

    // Regular Expressions
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/;

    // Reset previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("websiteError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "This field is required";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerText = "A valid email address is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        isValid = false;
    }

    // Website validation
    if (website === "") {
        document.getElementById("websiteError").innerText = "A valid URL is required";
        isValid = false;
    } else if (!urlPattern.test(website)) {
        document.getElementById("websiteError").innerText = "Invalid URL format";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").innerText = "This field is required";
        isValid = false;
    }

    return isValid;
}
