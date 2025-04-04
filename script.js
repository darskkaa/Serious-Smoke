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

  // ================================
  // Age Verification Popup Logic
  // ================================
  if (!localStorage.getItem("ageVerified")) {
    const ageGate = document.createElement("div");
    ageGate.id = "age-gate";
    ageGate.innerHTML = `
      <div class="age-gate-content">
        <h2>Are you 21 or older?</h2>
        <p>You must be 21 or older to enter this site.</p>
        <button id="age-yes">Yes, I'm 21+</button>
        <button id="age-no">No</button>
      </div>
    `;
    document.body.appendChild(ageGate);

    document.getElementById("age-yes").addEventListener("click", function() {
      localStorage.setItem("ageVerified", "true");
      document.body.removeChild(ageGate); // Removes the popup
    });

    document.getElementById("age-no").addEventListener("click", function() {
      document.body.innerHTML = "<h1 style='text-align:center; margin-top:20%; color:white;'>Sorry, you must be 21 or older to enter.</h1>";
    });
  }
});
