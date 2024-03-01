// Loading welcome screen script
const splash = document.querySelector('.splashScreen');
const loadText = document.querySelector('.loadText')
const pageHeading = document.querySelector('.pageHeading')

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('displayNone')
    }, 1200);
    setTimeout(()=>{
      loadText.classList.add('splashHide')
  }, 1200);
    setTimeout(()=>{
      loadText.classList.add('splashDelete')
  }, 2200);
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

  function myanglishPage() {
    splash.classList.remove('displayNone')
    loadText.classList.remove('splashDelete')
    loadText.classList.remove('splashHide')
    loadText.classList.remove('projects')
    loadText.classList.add('myanglish')
    loadText.innerText = "myanglish"

    setTimeout(()=>{
      window.location.href = "/projects/myanglish/";
    }, 1100);
}

function mainPage() {
  splash.classList.remove('displayNone')
  loadText.classList.remove('splashDelete')
  loadText.classList.remove('splashHide')

  setTimeout(()=>{
    loadText.classList.add('splashHide')
  }, 1000);
  setTimeout(()=>{
    window.location.href = "/";
  }, 1800);
}
