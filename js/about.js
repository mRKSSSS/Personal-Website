//Variables for the contacts access links
let contactsDesktop = document.getElementById("contactsDesktop");
let contactsMobile = document.getElementById("contactsMobile");

//Scroll to Contacts section
contactsDesktop.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementsByTagName("footer")[0].scrollIntoView({behavior: "smooth", block: "start"});
})
contactsMobile.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementsByTagName("footer")[0].scrollIntoView({behavior: "smooth", block: "start"});
})