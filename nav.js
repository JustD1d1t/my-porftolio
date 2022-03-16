(function () {
  const hamburger = document.querySelector(".navbar__hamburger");
  const mobileMenu = document.querySelector(".navbar__links");
  const links = document.querySelectorAll(".navbar__link");
  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("is-active");
  }
  hamburger.addEventListener("click", toggleMenu);
  if (window.innerWidth < 1440) {
    links.forEach((link) => {
      link.addEventListener("click", toggleMenu);
    });
  }
})();
