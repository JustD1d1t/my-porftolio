(function () {
  const hamburger = document.querySelector(".navbar__hamburger");
  const mobileMenu = document.querySelector(".navbar__links");
  function toggleMenu() {
    mobileMenu.classList.toggle("active");
  }
  hamburger.addEventListener("click", toggleMenu);
})();
