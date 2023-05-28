// Global variable declaration
const navBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelector('.nav-links');

navBtn.addEventListener('click', ()=>{
  navLinks.classList.toggle('show-links');
});