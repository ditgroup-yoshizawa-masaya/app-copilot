document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        authenticateUser(username, password);
    });

    function authenticateUser(username, password) {
        // Dummy authentication logic
        if (username === 'admin' && password === 'password123') {
            alert('ログイン成功');
            // Redirect to another page or perform other actions
        } else {
            alert('ユーザー名またはパスワードが間違っています');
        }
    }
});