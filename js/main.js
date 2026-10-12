// Francisco Miranda — shared site interactions
// Theme, mobile navigation, and email copy.

document.addEventListener("DOMContentLoaded", () => {
  // Light by default; preserve an explicit visitor preference.
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("francisco-theme") || "light";
  html.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = html.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("francisco-theme", next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const sunIcon = themeToggle.querySelector(".icon-sun");
    const moonIcon = themeToggle.querySelector(".icon-moon");
    if (sunIcon && moonIcon) {
      if (theme === "light") {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
      } else {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
      }
    }
  }

  // 2. Mobile Menu
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      const isOpen = mobileNav.classList.contains("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // 3. Email Clipboard
  const copyEmailBtns = document.querySelectorAll("[data-copy-email]");
  const toast = document.getElementById("toast");

  copyEmailBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = btn.getAttribute("data-copy-email") || "francisco.miranda@usp.br";
      
      navigator.clipboard.writeText(email).then(() => {
        const copiedLabel = window.siteI18n?.message("emailCopied") || "Email copied:";
        showToast(copiedLabel + " " + email);
      }).catch(() => {
        window.location.href = "mailto:" + email;
      });
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }
});
