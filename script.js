document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav__links .link");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const page = link.textContent.toLowerCase();
        window.location.href = `${page}.html`;
      });
    });
  });
  // JavaScript for Travel.co Website

// Navigation Toggle for Mobile View
const navLinks = document.querySelector(".nav__links");
const navToggle = document.createElement("div");
navToggle.innerHTML = "<i class='ri-menu-line'></i>";
navToggle.classList.add("nav__toggle");
document.querySelector("nav").appendChild(navToggle);

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navToggle.innerHTML = navLinks.classList.contains("active")
    ? "<i class='ri-close-line'></i>"
    : "<i class='ri-menu-line'></i>";
});

// Smooth Scrolling
const smoothScroll = (target) => {
  document.querySelector(target).scrollIntoView({ behavior: "smooth" });
};

document.querySelectorAll(".nav__links a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    smoothScroll(event.target.getAttribute("href"));
  });
});

// Dynamic Place Recommendations (Example Data)
const places = [
  { name: "Bali, Indonesia", image: "./assets/bali.jpg" },
  { name: "Paris, France", image: "./assets/paris.jpg" },
  { name: "Kyoto, Japan", image: "./assets/kyoto.jpg" },
];

const recommendationContainer = document.querySelector(".journey__grid");
places.forEach((place) => {
  const card = document.createElement("div");
  card.classList.add("country__card");
  card.innerHTML = `
    <img src="${place.image}" alt="${place.name}" />
    <div class="country__name">
      <i class="ri-map-pin-2-fill"></i>
      <span>${place.name}</span>
    </div>
  `;
  recommendationContainer.appendChild(card);
});

// Interactive Button Effect
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.1)";
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

fetch('http://localhost:5000/api/places')
    .then(response => response.json())
    .then(data => {
        let placesContainer = document.getElementById("places-list");
        placesContainer.innerHTML = "";  
        data.forEach(place => {
            let placeCard = `
                <div class="place-card">
                    <img src="${place.image}" alt="${place.name}">
                    <h3>${place.name}</h3>
                    <p>${place.description}</p>
                </div>
            `;
            placesContainer.innerHTML += placeCard;
        });
    })
    .catch(error => console.error("Error fetching places:", error));
