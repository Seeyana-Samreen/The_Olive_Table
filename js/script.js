const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    });
  });
}

const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
const heroCount = document.querySelector(".hero-count");
let activeSlide = 0;

function showHeroSlide(index) {
  if (heroSlides.length === 0) return;

  activeSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeSlide;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  if (heroCount) {
    heroCount.textContent = `${String(activeSlide + 1).padStart(2, "0")} / ${String(heroSlides.length).padStart(2, "0")}`;
  }
}

document.querySelectorAll(".hero-arrow").forEach((button) => {
  button.addEventListener("click", () => {
    showHeroSlide(activeSlide + (button.dataset.slide === "next" ? 1 : -1));
  });
});

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    image.classList.add("image-unavailable");
    image.setAttribute("aria-label", "Image unavailable");
  }, { once: true });
});
