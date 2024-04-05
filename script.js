// Activate Menu Button //
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('bx-x');
  menuBar.classList.toggle('active');
}

// lets remove menu-bar on scroll //

window.onscroll = () => {
  menuBtn.classList.remove('bx-x');
  menuBar.classList.remove('active');
}

// Scroll reveal //

ScrollReveal({
  reset: true,
  distance: '100px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-bio h1, .about-resume',{origin: 'left'});
ScrollReveal().reveal('.home-bio p', {origin: 'right'});
ScrollReveal().reveal('.home-bio, .heading', {origin: 'top'});
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, .projects-items, .form , #message ', {origin: 'bottom'});

// Typing Animation //

// const animText = new Typed('.animated-text', {
//   strings: ['Web Developer', 'Copy writer', 'Footballer'],
//   backSpeed: 100,
//   typeSpeed: 100,
//   backDelay: 600,
//   loop: true
// });

// Send message 
// Select the form and message element
const form = document.querySelector('.form');
const message = document.getElementById('message');

// Function to remove the failure message
function removeMessage() {
  message.textContent = ''; // Clear the message
}

// Add event listener to the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  message.textContent = 'Failed to send your message. Please try later or contact the administrator by another method.';
});

// Add event listeners to other elements to remove the message
document.querySelectorAll('a, button').forEach(item => {
  item.addEventListener('click', removeMessage);
});

window.addEventListener('beforeunload', removeMessage); // Remove message when navigating away from the page