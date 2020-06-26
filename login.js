const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("click", ev => logIn(ev));

const logIn = ev => {
    if(ev.target.tagName !== "BUTTON") return;
    const pseudo = loginForm.querySelector(".login-form__login-input");
    alert(pseudo.value + " est connecté");
};

