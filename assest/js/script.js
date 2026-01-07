document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const close = document.getElementById("close");
  const menuList = document.querySelector(".menu-list");
  const sections = document.querySelectorAll("#about, #project, #contact, .video-section");
  const body = document.body;

  // Show hamburger menu
  hamburger.addEventListener("click", function () {
    hamburger.style.display = "none";
    close.style.display = "block";
    menuList.classList.add("menu-open");
    body.style.overflow = "hidden";
  });

  // Close hamburger menu
  close.addEventListener("click", function () {
    close.style.display = "none";
    hamburger.style.display = "";
    menuList.classList.remove("menu-open");
    body.style.overflow = "auto";
  });

  // Close menu and reset state
  function closeMenu() {
    close.style.display = "none";
    hamburger.style.display = "";
    menuList.classList.remove("menu-open");
    body.style.overflow = "auto";
  }

  // Auto close menu in width screen
  const breakpoint = 990;
  window.addEventListener("resize", function () {
    if (window.innerWidth > breakpoint) {
      if (menuList.classList.contains("menu-open")) {
        closeMenu();
      }
    }
  });

  // Observer for transition
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    observer.observe(section);
  });
});