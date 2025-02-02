/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".card");
    card.style.opacity = 0;
    setTimeout(() => {
        card.style.transition = "opacity 2s";
        card.style.opacity = 1;
    }, 500);
});