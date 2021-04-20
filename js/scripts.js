let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let themeCheckbox = document.querySelector('.themeCheckbox');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('marginBottom');
    menu.classList.toggle('navToggle');
})
let themeChange = document.getElementById('themeChange');
themeChange.addEventListener('change', () =>{
    themeCheckbox.classList.toggle('active')
    document.body.classList.toggle('dark');
})