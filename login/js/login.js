document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === '1234') {
        alert('Login successful');
        errorMessage.textContent = '';
        window.location.href = 'index.html'; // Mengarahkan ke Google
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
