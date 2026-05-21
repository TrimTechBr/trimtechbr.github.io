const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

dropdownTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    const parent = trigger.closest(".dropdown");
    const wasOpen = parent.classList.contains("is-open");

    document.querySelectorAll(".dropdown.is-open").forEach((item) => {
      if (item !== parent) item.classList.remove("is-open");
    });

    parent.classList.toggle("is-open", !wasOpen);
    trigger.setAttribute("aria-expanded", String(!wasOpen));
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown.is-open").forEach((item) => item.classList.remove("is-open"));
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const currentYear = document.querySelector("[data-current-year]");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
