document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.dash');

    // Add click event listener to each navigation link
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            
            // Add active class to the clicked navigation link
            event.target.classList.add('active');
        });
    });
});
