document.addEventListener('DOMContentLoaded', function() {
    // Listen for click on the "Books" menu
    document.getElementById('booksMenu').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor action
        var submenu = document.getElementById('booksSubmenu');
        // Toggle the "show" class to display or hide the submenu
        submenu.classList.toggle('show');
    });
});
