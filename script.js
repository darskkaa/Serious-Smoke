document.addEventListener("DOMContentLoaded", function () {
  // ================================
  // Scroll Animation
  // ================================
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

  // ================================
  // Age Verification with Local Storage + Redirect
  // ================================
  const alreadyVerified = localStorage.getItem("ageVerified");

  if (alreadyVerified !== "true") {
    const ageGate = document.createElement("div");
    ageGate.id = "age-gate";
    ageGate.innerHTML = `
      <div class="age-gate-content">
        <h2>Are you 21 or older?</h2>
        <p>You must verify your age to enter Serious Smoke.</p>
        <p style="font-size: 0.9rem; color: #a00; margin-top: 1em;">
          <strong>THE SALE OF NICOTINE PRODUCTS OR NICOTINE DISPENSING DEVICES TO PERSONS UNDER THE AGE OF 21 IS AGAINST FLORIDA LAW. PROOF OF AGE IS REQUIRED FOR PURCHASE.</strong>
        </p>
        <button id="age-yes">Yes, I'm 21+</button>
        <button id="age-no">I'm under 21</button>
      </div>
    `;
    document.body.appendChild(ageGate);

    // User confirms they're 21+
    document.getElementById("age-yes").addEventListener("click", () => {
      localStorage.setItem("ageVerified", "true");
      ageGate.remove();
    });

    // User is under 21: redirect them out
    document.getElementById("age-no").addEventListener("click", () => {
      const redirectUrl = document.referrer || "https://www.google.com";
      window.location.href = redirectUrl;
    });
  }
});
