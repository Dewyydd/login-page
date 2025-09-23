/* Éjszakai/Nappali mód váltás */
function changeTheme() {
    const html = document.documentElement;
    let th = html.getAttribute("data-bs-theme");
    let darkthemeIcon = document.getElementById("darkthemeIcon")
    let lightthemeIcon = document.getElementById("lightthemeIcon")

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