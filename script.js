function checkPassword() {
    const passwordInput = document.getElementById("passwordInput");
    const password = passwordInput.value;
    const errorMsg = document.getElementById("errorMsg");

    const secret = "Aanuoluwa";

    if(password === secret) {
        window.location.href = "message.html";
    } else {
        errorMsg.textContent = "Oops! Wrong password, try again 💖";

        passwordInput.classList.remove("shake");
        void passwordInput.offsetWidth;
        passwordInput.classList.add("shake");
    }

    let attempts = 0;

    function checkPassword() {
        attempts++;
        let input = document.getElementById("password");
        let error = document.getElementById("error");

        input.classList.add("shake");
        setTimeout(() => input.classList.remove("shake"), 500);

        if (attempts < 3) {
            error.innerHTML = "Incorrect password 👿 Try again..."
        }
        else {
            window.location.href = "message.html"
        }
    }
}