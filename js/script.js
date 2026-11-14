
// ========================================
// ABDUL WAHAB - PORTFOLIO JAVASCRIPT
// ========================================


// 1. MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Open and close mobile menu

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.textContent = "☰";

    });

});


// Close menu when pressing Escape

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.textContent = "☰";

    }

});


// 2. AUTOMATIC MENU RESET ON DESKTOP

window.addEventListener("resize", () => {

    if (window.innerWidth > 650) {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.textContent = "☰";

    }

});


// 3. CURRENT YEAR IN FOOTER

const footerText = document.querySelector(".footer p");

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Abdul Wahab. All Rights Reserved.`;

}

