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

    // JavaScript for form submission handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();  // Prevent default form submission

      const form = e.target;
      const formData = new FormData(form);
      const responseMessage = document.getElementById('responseMessage');

      // Clear any previous response message
      responseMessage.innerHTML = '';

      // Use fetch to send the form data to the PHP script
      fetch('contact.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          if (data.status === 'success') {
              responseMessage.innerHTML = '<p class="success">Message sent successfully!</p>';
              form.reset();  // Clear the form
          } else {
              responseMessage.innerHTML = '<p class="error">' + data.message + '</p>';
          }
      })
      .catch(error => {
          responseMessage.innerHTML = '<p class="error">There was an error processing your request.</p>';
          console.error('Error:', error);
      });
  });
