/*********************************************************************/
/********************** PAGE SCROLLING EVENTS ************************/
/*********************************************************************/

//Variables for the portfolio access links
let portfolioDesktop = document.getElementById("portfolioDesktop");
let portfolioMobile = document.getElementById("portfolioMobile");
//Variables for the skills access links
let skillsDesktop = document.getElementById("skillsDesktop");
let skillsMobile = document.getElementById("skillsMobile");
//Variables for the contacts access links
let contactsDesktop = document.getElementById("contactsDesktop");
let contactsMobile = document.getElementById("contactsMobile");
//Variable for the scroll down access link
let scrollDown = document.getElementById("scrollDown");

//Scroll to Portfolio section
portfolioDesktop.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".portfolio").scrollIntoView({behavior: "smooth", block: "start"});
})
portfolioMobile.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".portfolio").scrollIntoView({behavior: "smooth", block: "start"});
})

//Scroll to Skills section
skillsDesktop.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".skills").scrollIntoView({behavior: "smooth", block: "start"});
})
skillsMobile.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".skills").scrollIntoView({behavior: "smooth", block: "start"});
})

//Scroll to Contacts section
contactsDesktop.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementsByTagName("footer")[0].scrollIntoView({behavior: "smooth", block: "start"});
})
contactsMobile.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementsByTagName("footer")[0].scrollIntoView({behavior: "smooth", block: "start"});
})

//Scroll down from Hero section
scrollDown.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".portfolio").scrollIntoView({behavior: "smooth", block: "start"});
})

/*********************************************************************/
/************************ PORTFOLIO SECTION **************************/
/*********************************************************************/

// Variables Declalaration
let slideIndex = 1;

// Control slide show
showSlides(slideIndex);

// prev / next controls
document.querySelector(".prevButton").addEventListener("click", function(){
    plusSlides(-1);
});
document.querySelector(".nextButton").addEventListener("click", function(){
    plusSlides(1);
});

function plusSlides(n){
    //Reset autoplay slider timer
    clearInterval(timer);
    timer = setInterval(autoPlay, 6000);
    //Change slide
    showSlides(slideIndex+=n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("mySlides");
    if(n>slides.length){
        slideIndex = 1;
    }else if(n<1){
        slideIndex = slides.length;
    }
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

/*******************/
/* Autoplay Slider */
/*******************/
function autoPlay(){
    plusSlides(1);
}
let timer = setInterval(autoPlay, 6000);