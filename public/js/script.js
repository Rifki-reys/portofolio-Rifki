const toggle = document.getElementById("theme-toggle");
const moonIcon = '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
const sunIcon = '<i class="fa-solid fa-sun" aria-hidden="true"></i>';

function setThemeButton(isDark) {
    if (!toggle) return;

    toggle.innerHTML = isDark ? sunIcon : moonIcon;
    toggle.setAttribute("aria-label", isDark ? "Enable light mode" : "Enable dark mode");
    toggle.setAttribute("title", isDark ? "Enable light mode" : "Enable dark mode");
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    setThemeButton(true);
} else {
    setThemeButton(false);
}

if (toggle) {
    toggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        setThemeButton(isDark);
    });
}

const navbar = document.querySelector(".custom-navbar");

if (navbar) {
    const updateNavbar = () => {
        navbar.classList.toggle("scrolled", window.scrollY > 30);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
}

const words = [
    "Information Systems Student",
    "Web Developer",
    "Cloud Enthusiast",
    "UI/UX Enthusiast"
];

let index = 0;
let char = 0;
let deleting = false;
const typing = document.getElementById("typing");

function type() {
    if (!typing) return;

    const current = words[index];

    if (!deleting) {
        typing.textContent = current.substring(0, char++);

        if (char > current.length) {
            deleting = true;
            setTimeout(type, 1200);
            return;
        }
    } else {
        typing.textContent = current.substring(0, char--);

        if (char < 0) {
            deleting = false;
            index = (index + 1) % words.length;
        }
    }

    setTimeout(type, deleting ? 50 : 100);
}

type();
