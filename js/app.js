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
const isInViewport = function (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
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
                    behavior: 'smooth',
                    block: 'start',
                })
        })
	}
}

// Build menu 
window.addEventListener('load', function() {
	buildTheNav();
});

// Add class 'active' to section when near top of viewport

function makeSectionActive() {
	for (i of section){
        // how to target each individual li a??
        let navList = document.getElementById("navbar__list").getElementsByTagName("li");
        console.log(navList);
        //check if section is in view and add class
		if (isInViewport(i) == true){
			i.classList.add('active-class');
            navList.classList.add('active-nav');
            }
        //remove class when section is out of view
		else{
			i.classList.remove('active-class');
			navList.classList.remove('active-nav');
			}
	}
}

window.addEventListener("scroll", function(){
	makeSectionActive();
});



/**
 * End Main Functions
 * Begin Events
 * 
*/


// Make sections active


// hide nav when scrolling show when scrolling up
// let prevScrollPosition = window.pageYOffset;
// window.onscroll = function() {
//     let currentScrollPosition = window.pageYOffset;
//     if (prevScrollPosition > currentScrollPosition){
//         document.getElementById("page-header").style.top = "0";
//     } else {
//         document.getElementById("page-header").style.top = "-50px";
//     }
//     prevScrollPosition = currentScrollPosition;
// };

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
