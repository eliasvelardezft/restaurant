import { generateMain } from './sections/main'
import { generateProjects } from './sections/projects'
import { generateSkills } from './sections/skills'
import { generateExperience } from './sections/experience'
import { generateContact } from './sections/contact'

let navBar = document.getElementById('navbar');
let container = document.getElementById('container');


let mainLink = document.getElementById('main-link');
mainLink.addEventListener('click', () => {
  container.innerHTML = '';
  generateMain();
});

let projectsLink = document.getElementById('projects-link');
projectsLink.addEventListener('click', () => {
  container.innerHTML = '';
  generateProjects();
});

let experienceLink = document.getElementById('experience-link');
experienceLink.addEventListener('click', () => {
  container.innerHTML = '';
  generateExperience();
});

let skillsLink = document.getElementById('skills-link');
skillsLink.addEventListener('click', () => {
  container.innerHTML = '';
  generateSkills();
});

let contactLink = document.getElementById('contact-link');
contactLink.addEventListener('click', () => {
  container.innerHTML = '';
  generateContact();
  document.getElementById('form').setAttribute('style', 'display: block;');
});




generateMain();