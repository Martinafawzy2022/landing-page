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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
  // global variable for creatLinks function
    const sections = document.querySelectorAll("section");
  
  // global variable for hideNavbarMenu function
     const navbarMenu = document.querySelector(".navbar__menu");
  
  // global variables for scrollUpButton function
     const topButton=document.querySelector('.upbutton');
     const topPage=document.querySelector('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Scroll to anchor ID using event
function scrollSections(linkOfSection,section)

 { 
	    linkOfSection.addEventListener("click",e =>
		{
           e.preventDefault();
           section.scrollIntoView({behavior: "smooth",block:"center"});
     });
	 
	
	
 }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//Function for buildilding the navbar menu

function creatLinks()
{   // Select the unordered list ul 
    const navbarList = document.getElementById('navbar__list');
    const fragment = document.createDocumentFragment();
	
    //looping in all the sections in the page to creat links
    for(section of sections)
	{
		
       // Creat local variable for li list 
        const liElement= document.createElement('li');
	    const textOflink=section.dataset.nav;
		
		
	   // The html link fo every section
        liElement.innerHTML= `<a href="${section.id}" class="menu__link">${textOflink}</a>`;
	 
	 
       // Call scrollSections function 
       scrollSections(liElement,section);
	
	
       // Add li element to fragment 
       fragment.appendChild(liElement);
	   
   }
   
   // Add all section's links to the navbar list
   navbarList.appendChild(fragment);
 
}


// Add class 'active' to section when near top of viewport

function testActiveSection()
{
	
	for (section of sections )
	{
		// Calculate the size of bounding rectangle for section
		const size =Math.floor(section.getBoundingClientRect().top);
		
        //  Test if section in viewport
		if(size<150&&size >=-150)
		{
			// Add your-active-class
			if(!section.classList.contains("your-active-class")){
			  section.classList.add('your-active-class');
			  section.style.backgroundColor="rgb(0,150,0)";
			  
			}
			
		}
			else
			{
				// Remove your-active-class
				section.classList.remove('your-active-class');
				section.style.cssText= 'background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)';
				
		    }
			
		}
}   


 
 

// Fuction hide navbar while  not scrolling
function fixedNavbarMenu()
{
  
    if(window.pageYOffset <50)
     {
      navbarMenu.classList.add('fixed-navbar');
	  
	  
     }
	 
	 else
     {
       navbarMenu.classList.remove('fixed-navbar');
     }
}

// Up button  for scrolling to top

function scrollUpButton()
{
	

	
	if(window.pageYOffset >3500)
    { 
      if(!topButton.classList.contains('show-button'))
	      {
			  topButton.classList.add('show-button');
		  } 
	}
	else
	   {topButton.classList.remove('show.button');}
   
}



 
 //Scroll down window to add upbutton
   window.addEventListener('scroll',scrollUpButton);
	
//clicking in the topButton	
  topButton.addEventListener('click',scrollSections(topButton,topPage));

/**
 * End Main Functions
 * 
 * 
*/
  
  // Build menu &&Scrolling
    creatLinks();
 
 
  // Scroll window to add active class
     window.addEventListener('scroll',testActiveSection);
	 
  // Scroll window to show  navbar
     window.addEventListener('scroll',fixedNavbarMenu);
   	
  //clicking in the topButton	
    topButton.addEventListener('click',scrollSections(topButton,topPage));
