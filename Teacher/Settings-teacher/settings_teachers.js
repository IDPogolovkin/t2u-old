// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');



//     burger.addEventListener('click', () => {
//         //Toogle nav
//         nav.classList.toggle('nav-active');

//         //Animate Links
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = ' ';
//             } else {
//                 link.style.animation = " navLinkFade 0.5s ease forwards $ { index / 9 + 1.4 }";
//             }
//         });
//         //Burger Animation
//         burger.classList.toggle('toggle');

//     });

// }

// navSlide();