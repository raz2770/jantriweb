// Advanced Scroll Animation Utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        // Add stagger animation for children elements
        const children = entry.target.querySelectorAll('.stagger-child');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('stagger-revealed');
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-reveal class
  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach(element => {
    observer.observe(element);
  });

  return observer;
};

// Add scroll reveal classes to elements on page load
export const addScrollRevealClasses = () => {
  // Add to feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card, index) => {
    card.classList.add('scroll-reveal');
    card.style.transitionDelay = `${index * 100}ms`;
  });

  // Add to plan cards
  const planCards = document.querySelectorAll('.plan-card');
  planCards.forEach((card, index) => {
    card.classList.add('scroll-reveal');
    card.style.transitionDelay = `${index * 150}ms`;
  });

  // Add to contact methods
  const contactMethods = document.querySelectorAll('.contact-method');
  contactMethods.forEach((method, index) => {
    method.classList.add('scroll-reveal');
    method.style.transitionDelay = `${index * 200}ms`;
  });

  // Add to sections
  const sections = document.querySelectorAll('.features-section, .download-section, .plans-section, .contact-section, .youtube-section, .screenshots-section');
  sections.forEach(section => {
    section.classList.add('scroll-reveal');
  });

  // Add stagger animations to lists
  const featureLists = document.querySelectorAll('.plan-features li');
  featureLists.forEach(item => {
    item.classList.add('stagger-child');
  });

  const downloadFeatures = document.querySelectorAll('.download-feature');
  downloadFeatures.forEach(feature => {
    feature.classList.add('stagger-child');
  });
};

// Smooth scroll to section with offset
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = 80; // Fixed navbar height
    const elementPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

// Parallax effect for hero section
export const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${rate}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

// Mouse move effect for cards
export const initMouseMoveEffect = () => {
  const cards = document.querySelectorAll('.feature-card, .plan-card, .contact-method');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  });
};

// Typing animation for hero text
export const initTypingAnimation = () => {
  const heroTitle = document.querySelector('.hero-title');
  if (!heroTitle) return;
  
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  
  // Start typing animation after a delay
  setTimeout(typeWriter, 500);
};

// Counter animation for statistics
export const initCounterAnimation = () => {
  const counters = document.querySelectorAll('.stat-number');
  
  const animateCounter = (counter) => {
    const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        const suffix = counter.textContent.replace(/[\d,]/g, '');
        counter.textContent = Math.ceil(current).toLocaleString() + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString() + counter.textContent.replace(/[\d,]/g, '');
      }
    };
    
    updateCounter();
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  addScrollRevealClasses();
  initScrollAnimations();
  initParallaxEffect();
  
  // Delay mouse and other effects to avoid conflicts
  setTimeout(() => {
    initMouseMoveEffect();
    initCounterAnimation();
  }, 1000);
};
