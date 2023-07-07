function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    // Check if username is empty
    if (usernameInput.value === "") {
        alert("Please enter your username.");
        return;
    }

    // Check if username contains at least one number
    if (!/\d/.test(usernameInput.value)) {
        alert("Username must contain at least one number.");
        return;
    }

    // Check if email is empty
    if (emailInput.value === "") {
        alert("Please enter your email.");
        return;
    }

    // Check if email format is valid
    if (!isValidEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if password is empty
    if (passwordInput.value === "") {
        alert("Please enter your password.");
        return;
    }

    // If form is valid, log the user in (You can replace this with your own logic)
    alert("Login successful!");
    // Here, you can redirect the user to another page or perform other actions

    // Reset the form
    document.getElementById("loginForm").reset();
}

function isValidEmail(email) {
    // Simple email validation using regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
