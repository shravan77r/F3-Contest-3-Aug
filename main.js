const user = JSON.parse(localStorage.getItem("user"));

if (user && user.accessToken) {
    window.location.href = "/profile.html";
}

const btnsubmit = document.getElementById('btnsubmit');

btnsubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const validation_message = document.getElementById('validation-message');
    const success_message = document.getElementById('success-message');

    if (!fullname) {
        validation_message.innerText = "Please enter fullname.";
        return;
    }
    if (!email) {
        validation_message.innerText = "Please enter email.";
        return;
    }
    if (!password) {
        validation_message.innerText = "Please enter password.";
        return;
    }
    if (password !== confirmPassword) {
        validation_message.innerText = "Passwords do not match.";
        return;
    }
    const accessToken = generateAccessToken();

    const user = {
        fullname: fullname,
        email: email,
        password: password,
        accessToken: accessToken
    }

    localStorage.setItem("user", JSON.stringify(user));
    validation_message.innerText = "";
    success_message.innerText = "Successfully signed Up!";
    window.location.href = "/profile.html";

});
function generateAccessToken() {
    const accessTokenLength = 16;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < accessTokenLength; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}