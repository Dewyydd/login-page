
function changeTheme() {
    const html = document.documentElement;
    let th = html.getAttribute("data-bs-theme");
    let darkthemeIcon = document.getElementById("darkthemeIcon");
    let lightthemeIcon = document.getElementById("lightthemeIcon");

    if (th === "light") {
        html.setAttribute("data-bs-theme", 'dark');
        darkthemeIcon.classList.add("d-none");
        lightthemeIcon.classList.remove("d-none");
    } else if (th === "dark") {
        html.setAttribute("data-bs-theme", 'light');
        lightthemeIcon.classList.add("d-none");
        darkthemeIcon.classList.remove("d-none");
    }
}

function login() {
    let emailcim = document.getElementById("emailCim").value;
    let emailcheck = document.getElementById("emailError");

    if (!(emailcim.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/))) {
        emailcheck.classList.remove("d-none");
    } else {
        emailcheck.classList.add("d-none");
    }

    let username = document.getElementById("felhasznaloNev").value;
    let usernameCheck = document.getElementById("usernameError");

    if (username.length > 30 || username.length < 3) {
        usernameCheck.classList.remove("d-none");
    } else {
        usernameCheck.classList.add("d-none");
    }

    let egyezes = document.getElementById("passwordMegerosites").value;
    let jelszo = document.getElementById("password").value;

    if (egyezes === jelszo) {
        document.getElementById("passwordMegerositesLeiras").classList.remove("d-none");
    } else {
        document.getElementById("passwordMegerositesLeiras").classList.add("d-none");
    }
}

/* Live jelszó ellenőrzés */
function checkPassword() {
    let jelszo = document.getElementById("password").value;
    let progressbar = document.getElementById("progress1");
    let score = 0;

    document.getElementById("lowercaseF").classList.remove("d-none");
    if (/[a-z]/.test(jelszo)) {
        score++;
        document.getElementById("lowercaseF").classList.add("d-none");
    }

    document.getElementById("uppercaseF").classList.remove("d-none");
    if (/[A-Z]/.test(jelszo)) {
        score++;
        document.getElementById("uppercaseF").classList.add("d-none");
    }

    document.getElementById("numberF").classList.remove("d-none");
    if (/[0-9]/.test(jelszo)) {
        score++;
        document.getElementById("numberF").classList.add("d-none");
    }

    document.getElementById("specialF").classList.remove("d-none");
    if (/[._%+!~$]/.test(jelszo)) {
        score++;
        document.getElementById("specialF").classList.add("d-none");
    }

    let percent = (score / 4) * 100;
    progressbar.style.width = percent + "%";

    document.getElementById("passwordLeiras").classList.remove("d-none");
    progressbar.classList.remove("bg-danger", "bg-warning", "bg-success");

    if (percent === 100) {
        document.getElementById("passwordLeiras").classList.add("d-none");
        progressbar.classList.add("bg-success");
    } else if (percent >= 50) {
        progressbar.classList.add("bg-warning");
    } else {
        progressbar.classList.add("bg-danger");
    }
}
