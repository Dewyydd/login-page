
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

function ugrasRegister() {
    let registerOldal = document.getElementById("registerOldal");
    let loginOldal = document.getElementById("loginOldal");

    if (!(loginOldal.classList.contains("d-none"))) {
        loginOldal.classList.add("d-none")
    }

    registerOldal.classList.remove("d-none")
}

function vissza() {
    let registerOldal = document.getElementById("registerOldal");
    let loginOldal = document.getElementById("loginOldal");

    if (!(registerOldal.classList.contains("d-none"))) {
        registerOldal.classList.add("d-none")
    }

    loginOldal.classList.remove("d-none")
}

function register() {
    let emailcim = document.getElementById("emailCim").value;
    let emailcheck = document.getElementById("emailError");
    let valid = true;

    if (!(emailcim.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,3}$/))) {
        emailcheck.classList.remove("d-none");
        valid = false;
    } else {
        if (!(emailcheck.classList.contains("d-none"))) {
            emailcheck.classList.add("d-none");
        }
    }

    let username = document.getElementById("felhasznaloNev").value;
    let usernameCheck = document.getElementById("usernameError");

    if (username.length > 30 || username.length < 3 || !/^[a-zA-Z0-9]+$/.test(username)) {
        usernameCheck.classList.remove("d-none");
        valid = false;
    }

    else {
        if (!(usernameCheck.classList.contains("d-none"))) {
            usernameCheck.classList.add("d-none");
        }
    }

    let egyezes = document.getElementById("passwordMegerosites").value;
    let jelszo = document.getElementById("password").value;
    let passwordMegerositesLeiras = document.getElementById("passwordMegerositesLeiras");

    if (egyezes === jelszo && jelszo.length >= 8) {
        passwordMegerositesLeiras.classList.add("d-none");
        if (!(passwordMegerositesLeiras.classList.contains("d-none"))) {
            passwordMegerositesLeiras.classList.add("d-none");
        }
    } else {
        passwordMegerositesLeiras.classList.remove("d-none");
        valid = false;
    }

    let helyesJ = 0;

    if (/[a-z]/.test(egyezes)) {
        helyesJ++;
    }

    if (/[A-Z]/.test(egyezes)) {
        helyesJ++;
    }

    if (/[0-9]/.test(egyezes)) {
        helyesJ++;
    }

    if (/[._%+!~$]/.test(egyezes)) {
        helyesJ++;
    }

    if (egyezes.length >= 8) {
        helyesJ++;
    }

    if (helyesJ != 5) {
        valid = false;
    }

    if (valid) {
        alert("Sikeres regisztráció!")
    }
}

function checkPassword() {
    let jelszo = document.getElementById("password").value;
    let progressbar = document.getElementById("progress1");
    let helyesJ = 0;

    let lowercaseF = document.getElementById("lowercaseF");
    let uppercaseF = document.getElementById("uppercaseF");
    let numberF = document.getElementById("numberF");
    let specialF = document.getElementById("specialF");
    let hosszF = document.getElementById("hosszF");
    let passwordLeiras = document.getElementById("passwordLeiras")

    passwordLeiras.classList.remove("d-none");
    lowercaseF.classList.remove("d-none");
    uppercaseF.classList.remove("d-none");
    numberF.classList.remove("d-none");
    specialF.classList.remove("d-none");
    hosszF.classList.remove("d-none");

    if (/[a-z]/.test(jelszo)) {
        helyesJ++;
        lowercaseF.classList.add("d-none");
    }

    if (/[A-Z]/.test(jelszo)) {
        helyesJ++;
        uppercaseF.classList.add("d-none");
    }


    if (/[0-9]/.test(jelszo)) {
        helyesJ++;
        numberF.classList.add("d-none");
    }


    if (/[._%+!~$]/.test(jelszo)) {
        helyesJ++;
        specialF.classList.add("d-none");
    }


    if (jelszo.length >= 8) {
        helyesJ++;
        hosszF.classList.add("d-none");
    }

    let szazalek = (helyesJ / 5) * 100;
    progressbar.style.width = szazalek + "%";

    progressbar.classList.remove("bg-danger", "bg-warning", "bg-success");

    if (szazalek === 100) {
        passwordLeiras.classList.add("d-none");
        progressbar.classList.add("bg-success");
    }

    else if (szazalek >= 50) {
        progressbar.classList.add("bg-warning");
    }
    else {
        progressbar.classList.add("bg-danger");
    }
}
