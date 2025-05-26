//humberger menu
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    nav.classList.toggle('active');
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});


document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        nav.classList.remove('active');
    }
});

//background
import { initParticles } from './particles.js';

const themeToggle = document.querySelector('.ui-switch input');


const userPreference = localStorage.getItem('theme');
if (userPreference === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', function (e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    setTimeout(initParticles, 300);
});

// Splash screen 
let splashScreen;
let mainContent;

function initSplashScreen() {
    splashScreen = document.getElementById('splash-screen');
    mainContent = document.getElementById('main-content');


    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        mainContent.classList.add('visible');


        setTimeout(() => {
            splashScreen.remove();
        }, 500);
    }, 2000);
}

// Typing animation 
const phrases = ["Website Developer", "UI/UX Designer", "Problem Solver", "Vibe Coder", "Tech Enthusiast"];
let currentPhrase = 0;
let currentChar = 0;
const typedText = document.getElementById('typed-text');

function typeText() {
    if (currentChar < phrases[currentPhrase].length) {
        typedText.textContent += phrases[currentPhrase][currentChar];
        currentChar++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (currentChar > 0) {
        typedText.textContent = phrases[currentPhrase].substring(0, currentChar - 1);
        currentChar--;
        setTimeout(eraseText, 50);
    } else {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(typeText, 500);
    }
}

// Scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.85) {
            element.style.animationPlayState = 'running';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Initialize particles on page load
document.addEventListener('DOMContentLoaded', () => {
    initSplashScreen();
    initParticles();
    typeText();
});

// Popup 
const readMoreButtons = document.querySelectorAll('.read-more-btn');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close-popup');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const popup = document.getElementById(`${projectId}-popup`);
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

popups.forEach(popup => {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        popups.forEach(popup => {
            popup.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
});

// Contact 
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    console.log({ name, email, message });


    contactForm.reset();


    alert('Message sent successfully!');
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };


    console.log('Form submitted:', formData);
    this.reset();
    alert('Thank you for your message! I will get back to you soon.');
});


