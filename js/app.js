// Set the date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()

// nav toggle | Close links
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links')
  containerHeight = linksContainer.getBoundingClientRect().height;
  linksHeight = links.getBoundingClientRect().height;
  
  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`;
  }
  else {
    linksContainer.style.height = 0;
  }
})

// fixed navbar
const navbar = document.getElementById('nav');
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navbarHeight) {
    navbar.classList.add('fixed-nav')
  }
  else {
    navbar.classList.remove('fixed-nav')
  }
})