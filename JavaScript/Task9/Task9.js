// Function to show the registration form
function showRegisterForm() {
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("registeredUsers").classList.add("hidden");
    document.getElementById("registrationForm").classList.remove("hidden");
}

// Function to show the list of registered users
function showRegisteredUsers() {
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("registrationForm").classList.add("hidden");
    document.getElementById("registeredUsers").classList.remove("hidden");

    displayUsers(); // Now users will be displayed only when this button is clicked
}

// Function to register a user and store in local storage
function registerUser() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let address = document.getElementById("address").value.trim();

    if (name === "" || email === "" || contact === "" || address === "") {
        alert("All fields are required!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email, contact, address });
    localStorage.setItem("users", JSON.stringify(users));

    alert("User Registered Successfully!");
    
    // Clear the input fields after registration
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("address").value = "";
}

// Function to display registered users with delete button
function displayUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = ""; // Clear existing data before inserting new

    users.forEach((user, index) => {
        let row = `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.contact}</td>
            <td>${user.address}</td>
            <td><button onclick="deleteUser(${index})" class="delete-btn">Delete</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Function to delete a user
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1); // Remove the user at the given index
    localStorage.setItem("users", JSON.stringify(users)); // Save updated list
    displayUsers(); // Refresh the table
}