// script.js

// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector("header nav ul");
    navMenu.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const sectionId = event.target.getAttribute("href");
            document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
        }
    });
});
