// nav-menu
const menu = document.getElementById("nav-menu");
const close = document.getElementById("nav-close");
const toggle = document.getElementById("nav-toggle");

const toggleMenu = (menu, button) => {
  button.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
  });
};

toggleMenu(menu, toggle);
toggleMenu(menu, close);

// nav-menu mobile
const links = document.querySelectorAll(".nav__link");

const closeMenu = () => {
  const menu = document.getElementById("nav-menu");

  menu.classList.remove("show-menu");
};
links.forEach((link) => link.addEventListener("click", closeMenu));

// background-color header scroll
const backgroundHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 80
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", backgroundHeader);

// scrollup
const scrollup = () => {
  const scroll = document.getElementById("scroll-up");

  this.scrollY >= 550
    ? scroll.classList.add("show-scrollup")
    : scroll.classList.remove("show-scrollup");
};

window.addEventListener("scroll", scrollup);

// Scroll active-link
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active')
		}else{
			sectionsClass.classList.remove('active')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)