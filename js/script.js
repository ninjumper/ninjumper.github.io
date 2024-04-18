document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    const sections = document.querySelectorAll("section");

    for (let i = 1; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = navLink.getAttribute("href").substring(1);

            sections.forEach(function(section) {
                section.style.display = "none";
            });

            document.getElementById(targetId).style.display = "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", function() {
        const link = document.querySelector('link[href="css/theme.css"]');
        if (link) {
            link.remove();
        } else {
            const newLink = document.createElement("link");
            newLink.rel = "stylesheet";
            newLink.href = "css/theme.css";
            document.head.appendChild(newLink);
        }
    });
});

