document.addEventListener("DOMContentLoaded", () => {
    // Toggler for style switcher
    const styleSwitcherToggle = document.querySelector(".style-switcher-toggler .s-icon");
    if (styleSwitcherToggle) {
        styleSwitcherToggle.addEventListener("click", () => {
            const styleSwitcher = document.querySelector(".style-switcher");
            if (styleSwitcher) {
                styleSwitcher.classList.toggle("open");
            }
        });
    }

    // Hide the style switcher on scroll
    window.addEventListener("scroll", () => {
        const styleSwitcher = document.querySelector(".style-switcher");
        if (styleSwitcher && styleSwitcher.classList.contains("open")) {
            styleSwitcher.classList.remove("open");
        }
    });

    // Alternate styles
    const alternateStyle = document.querySelectorAll(".alternative-style");
    function setActiveStyle(color) {
        alternateStyle.forEach((style) => {
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
            } else {
                style.setAttribute("disabled", "true");
            }
        });
    }

    // Day/Night mode toggle
    const dayNight = document.querySelector(".day-night");
    if (dayNight) {
        dayNight.addEventListener("click", () => {
            const icon = dayNight.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-sun");
                icon.classList.toggle("fa-moon");
                document.body.classList.toggle("dark");
            }
        });

        window.addEventListener("load", () => {
            const icon = dayNight.querySelector("i");
            if (icon) {
                if (document.body.classList.contains("dark")) {
                    icon.classList.add("fa-sun");
                } else {
                    icon.classList.add("fa-moon");
                }
            }
        });
    }
});
