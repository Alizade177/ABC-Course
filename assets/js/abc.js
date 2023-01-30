let btn = document.querySelector('#collapse-expand-button');
let navButtons = document.querySelector('.nav-buttons');

btn.addEventListener('click',()=>{
    navButtons.classList.toggle("active");
} )