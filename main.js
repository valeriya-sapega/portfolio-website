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
        slider.style.transition = 'none'; // Disable transition during dragging
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

        // Calculate the card width (including margin)
        const slideWidth = document.querySelector('.slide').offsetWidth + 20; // 20 is the margin

        // Calculate the maximum translateX value to prevent whitespace
        const maxTranslateX = -(slider.childElementCount * slideWidth - container.offsetWidth);

        // Adjust the position to the nearest card
        const targetX = Math.round(currentX / slideWidth) * slideWidth;
        translateX = Math.max(maxTranslateX, Math.min(0, targetX));
        slider.style.transition = 'transform 0.3s ease-in-out'; // Enable transition for smooth sliding
        slider.style.transform = `translateX(${translateX}px)`;
    });


// ---- NAVBAR ACTIVE COLOR ----


const projects = document.querySelector('#projects');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

const projectsNavLink = document.getElementById('projects-nav-link');
const aboutNavLink = document.getElementById('about-nav-link');
const contactNavLink = document.getElementById('contact-nav-link');

function setNavBgOnScrollFull(e) {
    if (contact.getBoundingClientRect().top < 190) {
        contactNavLink.classList.add('active');
        aboutNavLink.classList.remove('active');
        projectsNavLink.classList.remove('active');
    } else if (about.getBoundingClientRect().top < 120) {
        aboutNavLink.classList.add('active');
        projectsNavLink.classList.remove('active');
        contactNavLink.classList.remove('active');
    } else if (projects.getBoundingClientRect().top < 190) {
        aboutNavLink.classList.remove('active');
        projectsNavLink.classList.add('active');
        contactNavLink.classList.remove('active');
    } else {
        projectsNavLink.classList.remove('active');
    }
}
function setNavBgOnScroll1110(e) {
    if (contact.getBoundingClientRect().top < 320) {
        contactNavLink.classList.add('active');
        aboutNavLink.classList.remove('active');
        projectsNavLink.classList.remove('active');
    } else if (about.getBoundingClientRect().top < 260) {
        aboutNavLink.classList.add('active');
        projectsNavLink.classList.remove('active');
        contactNavLink.classList.remove('active');
    } else if (projects.getBoundingClientRect().top < 320) {
        projectsNavLink.classList.add('active');
        aboutNavLink.classList.remove('active');
        contactNavLink.classList.remove('active');
    } else {
        projectsNavLink.classList.remove('active');
    }
}


window.addEventListener('scroll', () => {
    if ((window.matchMedia("(max-width: 1100px)").matches)) {
        setNavBgOnScroll1110()
    } else {
        setNavBgOnScrollFull()
    }
})

