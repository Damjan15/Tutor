document.addEventListener("DOMContentLoaded", function () {
  // Get hamburger button and mobile menu items
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  // Add click event listener to toggle menu visibility
  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
