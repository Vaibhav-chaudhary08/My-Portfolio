// Typing Animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Software Developer", "Problem Solver", "Team Player"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skills Data
const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "GitHub", level: 85 },
    { name: "DSA", level: 80 },
    { name: "OOPS", level: 85 }
];

// Projects Data
const projects = [
    {
        title: "Groove Up",
        description: "A Spotify-inspired music streaming web app with user authentication, core playback, and playlist features. Integrated MongoDB for efficient user and music data management.",
        image: "https://via.placeholder.com/300x200",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
        link: "https://github.com/Vaibhav-chaudhary08/Groove-Up"
    },
    {
        title: "Prescription Management Website",
        description: "Responsive web app for medication management. Features include adding, editing, and tracking medications, custom dosage schedules, reminders, and a user-friendly dashboard with dark mode.",
        image: "https://via.placeholder.com/300x200",
        technologies: ["HTML5", "CSS3", "JavaScript", "Firebase"],
        link: "https://prescriptionmanager.netlify.app/"
    },
    {
        title: "Real Estate Website",
        description: "Property browsing platform with React.js for seamless UI and secure payment integration for rentals and purchases. Ensured a smooth, responsive user experience.",
        image: "https://via.placeholder.com/300x200",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
        link: "https://github.com/Vaibhav-chaudhary08/Real-Estate-Website"
    }
];

// Load Skills
function loadSkills() {
    const skillsContainer = document.querySelector(".skills-container");
    skills.forEach(skill => {
        const skillCard = document.createElement("div");
        skillCard.className = "skill-card";
        skillCard.innerHTML = `
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-level" style="width: ${skill.level}%"></div>
            </div>
            <p>${skill.level}%</p>
        `;
        skillsContainer.appendChild(skillCard);
    });
}

// Load Projects
function loadProjects() {
    const projectsGrid = document.querySelector(".projects-grid");
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class='tech-chip'>${tech}</span>`).join("")}
                </div>
                <a href="${project.link}" class="btn primary-btn" target="_blank">View Project</a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Form Submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thank you for your message! I'll get back to you soon.");
    contactForm.reset();
});

// Initialize
document.addEventListener("DOMContentLoaded", function() {
    loadSkills();
    loadProjects();
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
}, observerOptions);

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
}); 