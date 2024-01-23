let hamburger = document.querySelector("#hamburger");
let nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  if (nav.style.visibility === "hidden") {
    nav.style.visibility = "visible";
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    
    
  }
  else {
    nav.style.visibility = "hidden";
  }
  
});







document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-input ");
    const body = document.querySelector("body");
    const personalInfo = document.querySelector(".personal_info");
    let treeTheme = true;
    body.style.background = "url(./assets/img/forests.jpg)";
  
    toggleButton.addEventListener("change", () => {
      if( treeTheme === true){
        body.classList.toggle("ice-theme");
        body.classList.toggle("ice_background");
        
        
      }
      else{
        body.classList.toggle("ice-theme");
      }


      
    });
  });