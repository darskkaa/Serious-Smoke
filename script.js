document.addEventListener("DOMContentLoaded", function () {
  // Scroll Animation
  const scrollSections = document.querySelectorAll(".scroll-section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  scrollSections.forEach((section) => {
    observer.observe(section);
  });

  // ======================
  // Age Gate Logic
  // ======================
  const alreadyVerified = localStorage.getItem("ageVerified");

  if (!alreadyVerified) {
    // Create overlay
    const ageGate = document.createElement("div");
    ageGate.id = "age-gate";
    ageGate.style.position = "fixed";
    ageGate.style.top = 0;
    ageGate.style.left = 0;
    ageGate.style.width = "100%";
    ageGate.style.height = "100%";
    ageGate.style.background = "rgba(0, 0, 0, 0.95)";
    ageGate.style.color = "#fff";
    ageGate.style.display = "flex";
    ageGate.style.flexDirection = "column";
    ageGate.style.justifyContent = "center";
    ageGate.style.alignItems = "center";
    ageGate.style.zIndex = "9999";

    ageGate.innerHTML = `
      <div style="text-align: center; max-width: 400px; padding: 20px;">
        <h2 style="font-size: 2rem; margin-bottom: 10px;">Are you 21 or older?</h2>
        <p style="margin-bottom: 20px;">You must be 21+ to enter this site.</p>
        <button id="age-yes" style="margin: 10px; padding: 10px 20px; font-size: 1rem;">Yes, I'm 21+</button>
        <button id="age-no" style="margin: 10px; padding: 10px 20px; font-size: 1rem;">No</button>
      </div>
    `;

    document.body.appendChild(ageGate);

    // Yes button
    document.getElementById("age-yes").addEventListener("click", () => {
      localStorage.setItem("ageVerified", "true");
      ageGate.remove(); // hide overlay
    });

    // No button
    document.getElementById("age-no").addEventListener("click", () => {
      document.body.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #000; color: white; text-align: center;">
          <h1>Sorry, you must be 21 or older to enter this site.</h1>
        </div>
      `;
    });
  }
});
