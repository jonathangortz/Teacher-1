
document.addEventListener('DOMContentLoaded', function() {
    var dotContainer = document.querySelector('.dot-container');
    dotContainer.addEventListener('click', function(event) {
        event.stopPropagation(); // Stops the click from propagating to the document
        var box = document.getElementById("whiteBox");
        box.style.display = (box.style.display === "none" || !box.style.display) ? "block" : "none";
    });

    document.addEventListener('click', function(event) {
        var box = document.getElementById("whiteBox");
        if (box.style.display !== "none" && !box.contains(event.target)) {
            box.style.display = "none";
        }
    });
});