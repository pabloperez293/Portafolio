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
        }
       
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

      // Remover mensaje viejo mas de 5s
      setTimeout(( ) =>{
        contactMessage.textContent = ''
      }, 5000)
    }, (error) => {
      alert(" Algo ocurrio en el envio ", error)
    })
    // borrado de inputs cuando envia info
    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
  }
}
contactForm.addEventListener("submit",sendEmail)

// Scroll activado por sectiones del link 

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageXOffset;

  sections.forEach( current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
  
      const sectionId = current.getAttribute('id');
      const sectionsClass = document.querySelector('.navMenu a[href*=' + sectionId + ']');
  
      if( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
        sectionsClass.classList.add('activeLink');
      }else{
        sectionsClass.classList.remove('activeLink');
      }
    }  )
    window.addEventListener('scroll', scrollActive)

}

// Scrull up 

// const scrollUp = () =>{
//   const scrollUp = document.getElementById('scrollUp');
//   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
//   :scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scrollUp',scrollUp)