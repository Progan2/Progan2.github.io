// scripts.js

const users = [];

function showLogin() {
    document.getElementById('login-modal').style.display = 'flex';
}

function showRegister() {
    document.getElementById('register-modal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const user = {
        username,
        email,
        password,
        lastLogin: new Date().toLocaleString()
    };

    users.push(user);
    alert('Registration successful!');
    closeModal('register-modal');
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        user.lastLogin = new Date().toLocaleString();
        document.getElementById('display-username').innerText = user.username;
        document.getElementById('last-login').innerText = user.lastLogin;
        document.getElementById('user-info').classList.remove('hidden');
        closeModal('login-modal');
    } else {
        alert('Invalid username or password.');
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const activeModal = document.querySelector('.modal[style*="flex"]');
        if (activeModal) {
            const form = activeModal.querySelector('form');
            if (form) {
                form.onsubmit();
            }
        }
    }
});
