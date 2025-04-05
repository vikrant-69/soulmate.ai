document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Carousel functionality
    const carousel = document.querySelector('.screenshot-carousel');
    const screenshots = document.querySelectorAll('.screenshot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;
  
    function showScreenshot(index) {
      screenshots.forEach((screenshot, i) => {
        screenshot.classList.toggle('active', i === index);
      });
    }
  
    function nextScreenshot() {
      currentIndex = (currentIndex + 1) % screenshots.length;
      showScreenshot(currentIndex);
    }
  
    function prevScreenshot() {
      currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
      showScreenshot(currentIndex);
    }
  
    nextBtn.addEventListener('click', nextScreenshot);
    prevBtn.addEventListener('click', prevScreenshot);
  
    // Auto-rotate carousel
    let carouselInterval = setInterval(nextScreenshot, 5000);
  
    carousel.addEventListener('mouseenter', () => {
      clearInterval(carouselInterval);
    });
  
    carousel.addEventListener('mouseleave', () => {
      carouselInterval = setInterval(nextScreenshot, 5000);
    });
  
    // Form submission
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
      feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log('Feedback submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your feedback! We appreciate your input.');
        
        // Reset form
        feedbackForm.reset();
      });
    }
  
    // Scroll reveal animation
    const scrollReveal = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      reset: false
    });
  
    scrollReveal.reveal('.header-content, .header-image', { delay: 200 });
    scrollReveal.reveal('.feature-card', { interval: 200 });
    scrollReveal.reveal('.screenshots-section h2, .screenshot-carousel', { delay: 200 });
    scrollReveal.reveal('.download-content', { delay: 200 });
    scrollReveal.reveal('.testimonial', { interval: 200 });
    scrollReveal.reveal('#feedback-form', { delay: 200 });
  
    // Add scroll event for header shadow
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  });