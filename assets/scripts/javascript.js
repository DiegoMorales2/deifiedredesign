function showSidebar() {
    document.querySelector('.sidebar').style.display = 'flex';
}

function hideSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
}

// Attach hideSidebar to all links in the sidebar
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function() {
        // Close the sidebar
        hideSidebar();

        // Optional: Scroll to the target section if you want smooth scrolling
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});