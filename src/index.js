import { generateMain } from './sections/main'
import { generateSpecialties } from './sections/specialties'
// import { generateServices } from './sections/services'
import { generateAbout } from './sections/about'
import { generateContact } from './sections/contact'

let navBar = document.getElementById('navbar');
let container = document.getElementById('container');


let mainLink = document.getElementById('main-link');
mainLink.addEventListener('click', () => {
  container.innerHTML = '';
  generateMain();
});

let specialtiesLink = document.getElementById('specialties-link');
specialtiesLink.addEventListener('click', () => {
  container.innerHTML = '';
  generateSpecialties();
});

// let servicesLink = document.getElementById('services-link');
// servicesLink.addEventListener('click', () => {
//   container.innerHTML = '';
//   generateServices();
// });

let aboutLink = document.getElementById('about-link');
aboutLink.addEventListener('click', () => {
  container.innerHTML = '';
  generateAbout();
});

let contactLink = document.getElementById('contact-link');
contactLink.addEventListener('click', () => {
  container.innerHTML = '';
  generateContact();
  document.getElementById('form').setAttribute('style', 'display: block;');
});




generateMain();