document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation (for demonstration purposes)
    if (username === 'user' && password === 'pass') {
        errorMessage.textContent = '';
        alert('Login successful!');
        // Redirect to another page or perform further actions here
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});
