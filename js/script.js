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
