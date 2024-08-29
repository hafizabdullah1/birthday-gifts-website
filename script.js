const menuBtn = document.querySelector(".menu-icon");
const navLinkContainer = document.querySelector(".nav-link-container");
const closeBtn = document.querySelector(".close-menu");
const slider = document.querySelector(".product-card-container");
let isDown = false;
let startX;
let scrollLeft;

menuBtn.addEventListener("click", () => {
  navLinkContainer.classList.remove("nav-link-hide");
});

closeBtn.addEventListener("click", () => {
  navLinkContainer.classList.add("nav-link-hide");
});


//  slider

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});
