function validateLogin() {
    let isValid = true;

    // Getting input values
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Reset previous error messages
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    // Username validation
    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    return isValid;
}
