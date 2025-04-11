document.addEventListener("DOMContentLoaded", function () {
  // ================================
  // Dynamic Background Animation
  // ================================
  const body = document.body;
  let hue = 0;

  setInterval(() => {
    hue = (hue + 1) % 360;
    body.style.background = `linear-gradient(45deg, hsl(${hue}, 70%, 50%), hsl(${(hue + 90) % 360}, 70%, 50%))`;
  }, 50);

  // ================================
  // Scroll Progress Bar
  // ================================
  const progressBar = document.createElement("div");
  progressBar.id = "scroll-progress";
  progressBar.style.position = "fixed";
  progressBar.style.top = "0";
  progressBar.style.left = "0";
  progressBar.style.height = "5px";
  progressBar.style.backgroundColor = "#29a";
  progressBar.style.zIndex = "9999";
  progressBar.style.transition = "width 0.2s ease";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${scrollPercentage}%`;
  });

  // ================================
  // Back-to-Top Button
  // ================================
  const backToTop = document.createElement("button");
  backToTop.id = "back-to-top";
  backToTop.textContent = "⬆";
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "20px";
  backToTop.style.right = "20px";
  backToTop.style.padding = "10px 15px";
  backToTop.style.backgroundColor = "#444";
  backToTop.style.color = "#fff";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "50%";
  backToTop.style.cursor = "pointer";
  backToTop.style.display = "none";
  backToTop.style.zIndex = "9999";
  document.body.appendChild(backToTop);

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // ================================
  // Ripple Effect on Buttons
  // ================================
  document.querySelectorAll("button").forEach((button) => {
    button.style.position = "relative";
    button.style.overflow = "hidden";

    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.style.position = "absolute";
      ripple.style.background = "rgba(255, 255, 255, 0.6)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple-animation 0.6s linear";
      ripple.style.pointerEvents = "none";
      ripple.style.width = ripple.style.height = Math.max(button.offsetWidth, button.offsetHeight) + "px";
      const rect = button.getBoundingClientRect();
      ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + "px";
      ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + "px";
      button.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });

  // Add ripple animation keyframes
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});
