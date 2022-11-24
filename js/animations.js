"use strict"
//Funcion menu hamburguesa icono cruz
let burguer=document.querySelector('#burguer');

burguer.addEventListener('click', e=>{
    burguer.classList.toggle('active');
})


//Funcion header sticky
window.onscroll = function() {stickyHeader()};

var header = document.querySelector(".header");

var menu=document.querySelector(".menu")

var logo=document.querySelector(".logo")

var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    menu.classList.add("sticky");
    logo.classList.add("stickyLogo");
  } else {
    header.classList.remove("sticky");
    menu.classList.add("sticky");
    logo.classList.remove("stickyLogo");
  }
}