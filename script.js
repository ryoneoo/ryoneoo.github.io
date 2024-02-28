// Loading welcome screen script
const splash = document.querySelector('.splashScreen');
const ryo = document.querySelector('.ryo')
const pageHeading = document.querySelector('.pageHeading')

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('displayNone')
    }, 3000);
    setTimeout(()=>{
        ryo.classList.add('moveLeft')
    }, 2800);
    setTimeout(()=>{
        pageHeading.classList.add('topFixed')
    }, 2800);
})

function navigationResponse() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
