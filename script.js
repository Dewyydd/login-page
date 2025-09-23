/* Éjszakai/Nappali mód váltás */
const TB = document.getElementById("themebutton");
const darkthemeIcon = document.getElementById("darkthemeIcon")
const lightthemeIcon = document.getElementById("lightthemeIcon")
const html = document.documentElement;

function changeTheme() {
    let th = html.getAttribute("data-bs-theme");

    if (th === "light") {
        html.setAttribute("data-bs-theme", 'dark')
        darkthemeIcon.classList.add("d-none")
        lightthemeIcon.classList.remove("d-none")
    }

    else if (th === "dark") {
        html.setAttribute("data-bs-theme", 'light')
        lightthemeIcon.classList.add("d-none")
        darkthemeIcon.classList.remove("d-none")
    }
}