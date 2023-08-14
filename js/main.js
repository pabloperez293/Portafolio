// variables
const navMenu = document.getElementById("navMenu");
const navToggle = document.getElementById("navToggle");
const navClose = document.getElementById("navClose");

const navLink = document.querySelectorAll(".navLink");

// Menu init
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("showMenu");
    })
}
// Menu hidd
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("showMenu");
    })
}
// remover menu en dispositivos 
const linkAction = () => {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.remove("showMenu");
}
navLink.forEach(n => n.addEventListener("click", linkAction))

// ----------Swiper projects 

let swiperProjects = new Swiper(".projectsContainer", {
    loop:true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
      },
  });

  // ---------------> Correo 
  const contactForm = document.getElementById("contactForm");
  const contactName = document.getElementById("contactName");
  const contactEmail = document.getElementById("contactEmail");
  const contactProject = document.getElementById("contactProject");
  const contactMessaje = document.getElementById("contactMessaje");

