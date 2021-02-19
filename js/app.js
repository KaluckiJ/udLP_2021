// console.time()

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let section = document.getElementsByTagName("section");

/**
 * End Global Variables

 * Start Helper Functions
 * 
*/

//Check if elements are in viewport - helper function
const isInViewport = (elem) => {
    const distance = elem.getBoundingClientRect();
  
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildTheNav() {
	for (let i=0; i<section.length; i++){
		let navbar = document.getElementById("navbar__list");
		let nav_section = document.createElement('li');
        let a = document.createElement('a');
        //add link to li items and individual classes
        nav_section.setAttribute('class', 'menu__link');
        nav_section.setAttribute('id', 'menu__links');
		nav_section.dataset.nav = section[i].id;
		navbar.appendChild(nav_section);
        nav_section.appendChild(a).innerText=section[i].dataset.nav;

        //event listener to list for click on nav item
        nav_section.addEventListener('click', () => {
            // console.log('clicked');
                // e.preventDefault();

                //scroll clicked section into view smoothly
                section[i].scrollIntoView({
                    alignToTop: 'true',
                    behavior: 'smooth',
                    block: 'start',
                })
        })
	}
}

// Add class 'active' to section when near top of viewport

function makeSectionActive() {
	for (i of section){
        // target anchor links in top nav
        let navItem = document.querySelector(`li.menu__link[data-nav=${i.id}]`);
        // console.log(navItem);
        //check if section is in view and add class
		if (isInViewport(i) == true){
            i.classList.add('active-class');
            // add class to top anchor links when section comes into view
            navItem.classList.add('active-nav');
            }
        //remove classes when section is out of view
		else{
			i.classList.remove('active-class');
            navItem.classList.remove('active-nav');
			}
	}
}

window.addEventListener('load', function() {
    buildTheNav();
    
        window.addEventListener("scroll", function(){
	       makeSectionActive();
        });
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

//Scroll back to top
let scrollButton = document.getElementById("scroll-top-button");
let rootElement = document.documentElement;

function scrollToTop() {
rootElement.scrollTo({
    top:0,
    behavior: "smooth",
   })
}
scrollButton.addEventListener("click", scrollToTop);

// console.timeEnd();
