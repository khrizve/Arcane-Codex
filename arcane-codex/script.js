document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formStatus = document.getElementById("formStatus");
    const formData = new FormData(this);

    try {
      const response = await fetch(this.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formStatus.textContent = "Thank you! Your message has been sent.";
        formStatus.style.color = "green";
        this.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      formStatus.textContent = "There was an error sending your message.";
      formStatus.style.color = "red";
    }
  });

// Function to toggle the visibility of the menu
function toggleMenu() {
  const navItems = document.querySelector(".nav-items");
  navItems.classList.toggle("active");
}

// Array of fantasy-themed Font Awesome icons
const fantasyIcons = [
  "fa-solid fa-hat-wizard",
  "fa-solid fa-dragon",
  "fa-solid fa-gem",
  "fa-solid fa-dungeon",
  "fa-solid fa-moon",
  "fa-solid fa-star",
  "fa-solid fa-code",
  "fa-solid fa-terminal",
  "fa-brands fa-python",
  "fa-brands fa-java",
];

let particlesCreated = 0; // Counter for created particles
const maxParticles = 50; // Maximum number of particles to create

// Function to create and animate a single particle
function createParticle() {
  const particleContainer = document.querySelector(".particle-container");

  // If max particles reached, stop creating new ones
  if (particlesCreated >= maxParticles) {
    clearInterval(particleInterval); // Stop the interval
    return;
  }

  const particle = document.createElement("i");

  // Add a random fantasy icon class
  const randomIconClass =
    fantasyIcons[Math.floor(Math.random() * fantasyIcons.length)];
  particle.className = `particle ${randomIconClass}`;

  // Randomize particle size
  const size = Math.random() * 20 + 10; // Size between 10px and 30px
  particle.style.fontSize = `${size}px`;

  // Randomize starting horizontal position
  const startX = Math.random() * window.innerWidth;
  particle.style.left = `${startX}px`;

  // Randomize animation duration and delay for a more natural rain effect
  const duration = Math.random() * 5 + 5; // Duration between 5s and 10s
  const delay = Math.random() * 2; // Delay between 0s and 2s
  particle.style.animationDuration = `${duration}s`;
  particle.style.animationDelay = `${delay}s`;

  particleContainer.appendChild(particle);
  particlesCreated++; // Increment the counter

  // Remove particle after animation to prevent performance issues
  setTimeout(() => {
    particle.remove();
  }, (duration + delay) * 1000); // Convert seconds to milliseconds
}

// Generate particles at a regular interval
const particleInterval = setInterval(createParticle, 300); // Create a new particle every 300 milliseconds
