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


// Global Variables of navigation, I use "document.getElementById "get the element with the specified ID 'navbar__list'

const navBar = document.getElementById('navbar__list');

 // Global variables of sections

 //I use "document.querySelectorAll "get get all "section"

 const targetSection = document.querySelectorAll('section');

 




// build the navigation Bar
const navigationBuild = () => {

    let fragmentNav = '';

    
    targetSection.forEach(section => {

// I add <li> and <a> for each section to acheive anchor Link for each section
        fragmentNav =  fragmentNav + `<li><a class="menu__link" href="#${section.id}">${section.dataset.nav}</a></li>`;

    });

     // I append all the elements to the navigation
   
    navBar.innerHTML = fragmentNav;


};

navigationBuild();  // call the navigationBuild() method


// Add class 'active' to section when near top of viewport
// I get the largest value that's less or equal to the number to determine its position relative to the viewport
const myViewport = (section) => {

// I define  sizeResult to return the size of an element and its position relative to the viewport by getBoundingClientRect() method
    const sizeResult = section.getBoundingClientRect().top;

 // I return the sizeResult and   round it to its nearest integer
    return ~~(sizeResult); 
};

// remove the active class
const remove = (part) => {
    part.classList.remove('your-active-class');
// I use the basic style to  inactive section to be seemed the same style of main style of Landing page.
part.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    
};

// add the active class
const add = (active, part) => {
    if(active){
        part.classList.add('your-active-class');
        // I use this style to apply only on active section only
        part.style.cssText = "background-image: linear-gradient(purple, blue); border:2px dotted white; border-radius: 25px;";  
        
    };
};

//the  functions

const acivationSection = () => {

    //   iteration by using forEach loop to section ==> add and remove active section by clicking navigation bar buttons
    targetSection.forEach(section => {
     inviewport = () => myViewport(section) < 100 && myViewport(section) >= -100;

        remove(section);   //to remove inactive section
        add(inviewport(),section);  //to add active section
    });
};
// I use window.addEventListener function to scroll to active section
window.addEventListener('scroll' ,acivationSection);   


// Scroll Methods

const scrollToSectionTitle = () => {

    // I define titlesLinks and get ".navbar__menu" by "document.querySelectorAll" 
    const titlesLinks = document.querySelectorAll('.navbar__menu a');
    // I use forEach loop to add addEventListener method to Attach a click event to a buttons in navigation bar 
    titlesLinks.forEach(link => {link.addEventListener('click', () => {  
        // I use for loop to targetSection to add click event to all  sections buttons  
        
        for(i = 0 ; i<targetSection ; i++){ 
                targetSection[i].addEventListener("click",sectionScroll(link));  //implementating  click event to a button in navigation bar
                
            }
        });
    });

};

scrollToSectionTitle();   // call scrollToSectionTitle() function


