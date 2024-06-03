
function toggleBox(event) {
    event.stopPropagation(); // Prevents the click from bubbling up to the document level
    var box = document.getElementById("whiteBox");
    box.style.display = (box.style.display === "flex") ? "none" : "flex";
}

// Hides the white box when clicking anywhere outside of it
document.addEventListener('click', function(event) {
    var box = document.getElementById("whiteBox");
    if (box.style.display === "flex" && !box.contains(event.target)) {
        box.style.display = "none";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('expanded'); // Toggle a class that changes the sidebar's width and visibility
    });
});