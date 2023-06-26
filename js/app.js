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
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navbarHeight) {
    navbar.classList.add('fixed-nav')
  }
  else {
    navbar.classList.remove('fixed-nav')
  }

  // top link btn
  if(scrollHeight > 500) {
    topLink.classList.add('show-link');
  }
  else {
    topLink.classList.remove('show-link');
  }
})

// Smooth scroll behaviour
const scrollLink = document.querySelectorAll('.scroll-link') 

scrollLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default behaviour
    e.preventDefault()
    // navigate to specific target
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // calculate heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if(!fixedNav){
      position = position - navHeight;
    }

    if(navHeight > 82) {
      position += containerHeight; 
    }

    window.scrollTo ({
      left: 0,
      top: position,
    })
    linksContainer.style.height = 0;
    console.log(position);
  })
})