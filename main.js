// ---- PROJECTS SLIDER ----
const container = document.querySelector('.container');
const slider = document.querySelector('.projects-slider');

let isDragging = false;
let startX;
let currentX = 0;
let translateX = 0;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  slider.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const diffX = e.clientX - startX;
  currentX = translateX + diffX;
  slider.style.transform = `translateX(${currentX}px)`;
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;

  const slideWidth = document.querySelector('.slide').offsetWidth + 20;

  const maxTranslateX = -(
    slider.childElementCount * slideWidth -
    container.offsetWidth
  );

  const targetX = Math.round(currentX / slideWidth) * slideWidth;
  translateX = Math.max(maxTranslateX, Math.min(0, targetX));
  slider.style.transition = 'transform 0.3s ease-in-out';
  slider.style.transform = `translateX(${translateX}px)`;
});

// ---- NAVBAR ACTIVE COLOR ----

const projects = document.querySelector('#projects');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

const projectsNavLink = document.getElementById('projects-nav-link');
const aboutNavLink = document.getElementById('about-nav-link');
const contactNavLink = document.getElementById('contact-nav-link');

function elementTop(element) {
  return element.getBoundingClientRect().top;
}

function setNavBgOnScroll(screen) {
  const { contactLimit, aboutLimit, projectsLimit } =
    screen === 'mobile'
      ? { contactLimit: 320, aboutLimit: 260, projectsLimit: 320 }
      : { contactLimit: 190, aboutLimit: 120, projectsLimit: 190 };

  if (elementTop(contact) < contactLimit) {
    contactNavLink.classList.add('active');
    aboutNavLink.classList.remove('active');
    projectsNavLink.classList.remove('active');
  } else if (elementTop(about) < aboutLimit) {
    aboutNavLink.classList.add('active');
    projectsNavLink.classList.remove('active');
    contactNavLink.classList.remove('active');
  } else if (elementTop(projects) < projectsLimit) {
    projectsNavLink.classList.add('active');
    aboutNavLink.classList.remove('active');
    contactNavLink.classList.remove('active');
  } else {
    projectsNavLink.classList.remove('active');
  }
}

function handleScroll() {
  if (window.matchMedia('(max-width: 1100px)').matches) {
    setNavBgOnScroll('mobile');
  } else {
    setNavBgOnScroll('desktop');
  }
}

window.addEventListener('scroll', handleScroll);
