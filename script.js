// scripts.js

function showLogin() {
    document.getElementById('login-modal').classList.remove('hidden');
}

function showRegister() {
    document.getElementById('register-modal').classList.remove('hidden');
}

function showSettings() {
    document.getElementById('settings-modal').classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function login() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    if (email && password) {
        document.getElementById('user-settings').classList.remove('hidden');
        document.getElementById('login-link').classList.add('hidden');
        document.getElementById('register-link').classList.add('hidden');
        closeModal('login-modal');
    }
}

function register() {
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    if (email && password && password === confirmPassword) {
        closeModal('register-modal');
    }
}

function logout() {
    document.getElementById('user-settings').classList.add('hidden');
    document.getElementById('login-link').classList.remove('hidden');
    document.getElementById('register-link').classList.remove('hidden');
}
