// script.js
document.addEventListener("DOMContentLoaded", function() {
  const scrollSections = document.querySelectorAll(".scroll-section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  scrollSections.forEach(section => {
    observer.observe(section);
  });
});
