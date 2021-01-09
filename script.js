let username;
let password;

const login = () => {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;

    if (password === 'javascript') {
        console.log('you are logged in');
    } else {
        console.log('your password is incorrect');
    }
}