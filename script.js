burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');
navlist = document.querySelector('.nav-list');
firstSection = document.getElementById('about');
contactSection = document.querySelector('.contact');

burger.addEventListener('click', () => {
    rightNav.classList.toggle('vclass');
    navlist.classList.toggle('vclass');
    navbar.classList.toggle('h-nav');
});
