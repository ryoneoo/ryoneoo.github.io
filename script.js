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