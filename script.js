// Floating WhatsApp Contact Button - Show 'Contact Us' on desktop only

function handleContactText() {
  const contactText = document.querySelector('.contact-text');
  if (window.innerWidth <= 768) {
    contactText.style.display = 'none';
  } else {
    contactText.style.display = 'inline';
  }
}

// Run on page load
window.addEventListener('load', handleContactText);
// Run on window resize
window.addEventListener('resize', handleContactText);
