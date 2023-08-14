// variables
const navMenu = document.getElementById("navMenu");
const navToggle = document.getElementById("navToggle");
const navClose = document.getElementById("navClose");

const navLink = document.querySelectorAll(".navLink");

const contactForm = document.getElementById("contactForm");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactProject");
const contactProject = document.getElementById("contactProject");
const contactMessage = document.getElementById("contactMessage");

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

const sendEmail = (evt) => {
  evt.preventDefault()

  // chequear si tiene valor
  if( contactName.value === '' || contactEmail.value === '' || contactProject.value ===  ''){

    // Agregar y remover 
    contactMessage.classList.remove('color-blue');
    contactMessage.classList.add('color-red');

    // mensaje noticia
    contactMessage.textContent = "Yiene que rellenar todos los campos ";

  }else{
    // tenemos que dejar los siguientes datos 
    // serviceID , templateId, #form , publickey
    emailjs.sendForm('service_aapl9hr','template_wl7rulh','#contactForm','ADGl8lPMJrgzUqeEo')
    .then(() =>{
      contactMessage.classList.add('color-blue');
      contactMessage.textContent = 'Mensaje enviado '

      // Remover mensaje viejo
      setTimeout(( ) =>{
        contactMessage.textContent = ''
      }, 5000)
    })
  }
}
contactForm.addEventListener("submit",sendEmail)
