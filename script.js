// Loading welcome screen script
const splash = document.querySelector('.splashScreen');
const ryo = document.querySelector('.ryo')

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('displayNone')
    }, 3000);
})

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        ryo.classList.add('moveRight')
    }, 2800);
})