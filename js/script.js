import { checkRequired, checkState, checkEmail, checkPhone ,checkZip, checkCheckboxGroup } from './validate.js';

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

    const button = document.getElementById("submitButton");
    const form = document.getElementById("visitorForm");

    button.addEventListener("click", function(event) {
        event.preventDefault();
        if (checkForm()) {
            sections.forEach(function(section) {
                section.style.display = "none";
            });
            document.getElementById("thankYouMessage").style.display = "block";
        }
    });

    function checkForm() {
        return (
            checkRequired("name") &&
            checkRequired("lastName") &&
            checkRequired("address1") &&
            checkRequired("city") &&
            checkRequired("state") &&
            checkState() &&
            checkRequired("zip") &&
            checkZip() &&
            checkRequired("phone") &&
            checkPhone() &&
            checkRequired("email") &&
            checkEmail() &&
            checkCheckboxGroup("howFound")
        );
    }

   
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
document.addEventListener('DOMContentLoaded', function () {
    const logVisitLink = document.getElementById('logVisit');
    const visitForm = document.getElementById('visitForm');

    logVisitLink.addEventListener('click', function (event) {
        event.preventDefault();
        visitForm.classList.toggle('hidden');
        document.getElementById('thankYouMessage').classList.add('hidden');
    });
});




