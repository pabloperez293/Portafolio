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