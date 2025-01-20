const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Scroll Animation for Skills
const skills = document.querySelectorAll('.about-skills li');

window.addEventListener('scroll', () => {
  const triggerHeight = window.innerHeight / 1.2;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if (skillTop < triggerHeight) {
      skill.style.opacity = '1';
      skill.style.transform = 'translateX(0)';
    } else {
      skill.style.opacity = '0';
      skill.style.transform = 'translateX(-20px)';
    }
  });
});


// Example to dynamically update the project message
const message = document.querySelector('.no-projects-message');

setTimeout(() => {
  message.textContent = "Check back soon! New projects are on their way.";
}, 5000);

// Basic Form Validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill in all the fields.');
  } else {
    alert('Thank you for your message!');
  }
});

// Dynamically set the current year in the footer
const currentYear = new Date().getFullYear();
document.querySelector('.footer-copy').innerHTML = `© ${currentYear} Rohit Funde. All Rights Reserved.`;
