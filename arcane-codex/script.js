// Modern JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      // Show loading state
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      try {
        const formData = new FormData(this);
        const response = await fetch(this.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        
        if (response.ok) {
          formStatus.textContent = 'Thank you! Your message has been sent.';
          formStatus.style.color = 'var(--success)';
          this.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        formStatus.textContent = 'There was an error sending your message.';
        formStatus.style.color = 'var(--error)';
      } finally {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Clear status message after 5 seconds
        setTimeout(() => {
          formStatus.textContent = '';
        }, 5000);
      }
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navItems = document.querySelector('.nav-items');
        if (navItems.classList.contains('active')) {
          navItems.classList.remove('active');
        }
      }
    });
  });
  
  // Add scroll effect to header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.background = 'rgba(15, 23, 42, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.background = 'rgba(15, 23, 42, 0.8)';
    }
  });
});

// Function to toggle the visibility of the menu
function toggleMenu() {
  const navItems = document.querySelector('.nav-items');
  navItems.classList.toggle('active');
}