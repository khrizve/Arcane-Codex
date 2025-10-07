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
