const mobileMenuBtn = document.querySelector(".hmenu-mobile");
const mobileMenu = document.querySelector(".hmenu-list");
mobileMenuBtn.addEventListener("click",function() {
  mobileMenu.classList.toggle("active");
});