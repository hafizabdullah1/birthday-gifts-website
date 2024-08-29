const menuBtn = document.querySelector(".menu-icon");
const navLinkContainer = document.querySelector(".nav-link-container");
const closeBtn = document.querySelector(".close-menu");


menuBtn.addEventListener("click", () => {
  navLinkContainer.classList.remove("nav-link-hide");
});


closeBtn.addEventListener("click", () => {
  navLinkContainer.classList.add("nav-link-hide");
});



//  slider
// const slider = document.querySelector('.product-card-container');

// slider.addEventListener('scroll', () => {
//     let scrollLeft = slider.scrollLeft;
//     let cardWidth = slider.querySelector('.card').offsetWidth;
//     let scrollTo = Math.round(scrollLeft / cardWidth) * cardWidth;
    
//     slider.scrollTo({
//         left: scrollTo,
//         behavior: 'smooth'
//     });
// });
