let typed = new Typed('#element', {
  strings: ['Wordpress Developer', 'Graphic Designer', 'Web Designer', 'Web Developer'],
  typeSpeed: 60,
});

window.addEventListener("scroll", ()=>{
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0);
})
;
