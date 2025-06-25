// JavaScript to change the header background color on scroll
const header = document.getElementById("header");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.backgroundColor = "#0F0F0F";
  } else {
    header.style.backgroundColor = "transparent";
  }
};

// JavaScript to toggle navigation menu for smaller screens
menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Count-up effect when the user scrolls to the statistics section
let isAnimated = false; // Flag to check if animation has already run

window.addEventListener("scroll", function () {
  var statsSection = document.querySelector(".profile-stats");
  var statsTop = statsSection.getBoundingClientRect().top;

  if (statsTop < window.innerHeight && !isAnimated) {
    // Run the animation only once
    isAnimated = true;

    // Animate the count-up effect
    countUp("experience", 2, 0, 200, "+"); // 8+ Years of Experience
    countUp("projects", 300, 0, 200, "+"); // 1k+ Complete Projects
    countUp("satisfaction", 90, 0, 200, "%"); // 90%+ Client Satisfaction
  }
});

// Function to perform the count-up animation
function countUp(id, target, start, duration, suffix) {
  let element = document.getElementById(id);
  let current = start;
  let increment = Math.ceil((target - start) / (duration / 10)); // Adjust speed here
  let interval = setInterval(function () {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    element.textContent = current + suffix; // Add suffix (+, k+, or %)
  }, 50); // Slower interval time for smoother animation
}

