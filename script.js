// Loading welcome screen script
const splash = document.querySelector('.splashScreen');
const ryo = document.querySelector('.ryo')
const pageHeading = document.querySelector('.pageHeading')

// Loading Splashscreen
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('displayNone')
    }, 2000);
    setTimeout(()=>{
        ryo.classList.add('moveLeft')
    }, 1800);
    setTimeout(()=>{
        pageHeading.classList.add('topFixed')
    }, 1800);
})

function navigationResponse() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Darkmode/Lightmode toggle
const root = document.documentElement;

const darkMode = localStorage.getItem("dark-mode");

const toggle = document.getElementById("toggle");

// Check if the user has already chosen a theme
if (darkMode) {
    // If yes, apply it to the root element
    root.classList.add("dark-theme");
  }
  // Add an event listener to the toggle button
  toggle.addEventListener("click", () => {
    // Toggle the dark-theme class on the root element
    root.classList.toggle("dark-theme");
    // Store or remove the user's preference in localStorage
    if (root.classList.contains("dark-theme")) {
      localStorage.setItem("dark-mode", true);
    } 
    else {
      localStorage.removeItem("dark-mode");
    }
  });