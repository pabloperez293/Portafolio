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

const scrollUp = () =>{
  const scrollUp = document.getElementById('scrollUp')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
  :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scrollUp',scrollUp)

// Temas obscuro / Blanco 

const themeButton = document.getElementById("themeBtn");
const darkTheme = "darkTheme";
const iconTheme = "ri-sun-line";
// Selecionador de tema 
const selectedTheme = localStorage.getItem("selectedTheme");
const selectedIcon = localStorage.getItem("selectedIcon");
// Validamos el tema
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line " : "ri-sun-line";

// Validar si se eligio correctamente 
if (selectedTheme) {
  // si cumple la condicion
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  themeButton.classList[selectedIcon === "ri-moon-line " ? "add" : "remove"](iconTheme)
}

// Desactivar o activar los temas 
themeButton.addEventListener("click", () => {

  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selectedTheme", getCurrentTheme())
  localStorage.setItem("selectedIcon", getCurrentIcon())

})

// --------- Cambios en el header
const scrollHeader = () => {
  const header = document.getElementById("header")

  this.scrollY >= 50? header.classList.add("br-header")
                    : header.classList.remove("br-header")
  }
  window.addEventListener("scroll", scrollHeader)


  // Scrooll animacion de la pagina

  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true 
    // animaciond repetida 
  })

  sr.reveal('.homeData , .projectsContainer , .footerContainer')
  sr.reveal('.homeInfo div', {delay:600, origin: 'bottom', interval: 100})
  sr.reveal('.skillsContent:nth-child(1),  .contactContent:nth-child(1)',{ origin: 'left'})
  sr.reveal('.skillsContent:nth-child(2) , .contactContent:nth-child(2) ',{ origin: 'right'})
  sr.reveal('.qualificationContent, .servicesCard',{ interval: 100})