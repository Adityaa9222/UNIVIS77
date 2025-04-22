// Navbar Scroll Behavior
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add('hidden');
    } else if (currentScroll < lastScroll) {
        navbar.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection(this.getAttribute('href'));
    });
});

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Floor Plan Navigation
const floorPlans = [
    'WW.jpg',

    'QQ.jpg'
];
let currentPlan = 0;
const floorPlanImg = document.querySelector('.floor-plan-img');
document.querySelector('.arrow.left').addEventListener('click', () => {
    currentPlan = (currentPlan - 1 + floorPlans.length) % floorPlans.length;
    floorPlanImg.src = floorPlans[currentPlan];
});
document.querySelector('.arrow.right').addEventListener('click', () => {
    currentPlan = (currentPlan + 1) % floorPlans.length;
    floorPlanImg.src = floorPlans[currentPlan];
});

// Location Details Toggle
function toggleDetails(element) {
    const details = element.querySelector('.details');
    details.classList.toggle('hidden');
}

// Enquiry Form Submission
document.getElementById('enquiry-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: e.target.name.value,
        mobile: e.target.mobile.value,
        email: e.target.email.value
    };
    localStorage.setItem('enquiry_' + Date.now(), JSON.stringify(formData));
    alert('Enquiry submitted successfully!');
    e.target.reset();
});

// Scroll Animations
const animateElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.transitionDelay = `${index * 0.2}s`;
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

animateElements.forEach(element => observer.observe(element));