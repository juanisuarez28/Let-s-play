"use strict"
//Funcion menu hamburguesa icono cruz
let burguer=document.querySelector('#burguer');

burguer.addEventListener('click', e=>{
    burguer.classList.toggle('active');
})


//Funcion header sticky
window.onscroll = function() {
  stickyHeader();
  mostrarAlScrollear();
};

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

let cardsAnimadas = document.querySelectorAll(".cardAnimada");
let carrusel = document.querySelector(".slider-container");
let flag = 0;
function mostrarAlScrollear(){
  let ubicacionCarrusel = carrusel.offsetTop;
  let scrollTop = document.documentElement.scrollTop; //detecta lo que se scrolleo
  cardsAnimadas.forEach(card => {
    if(((ubicacionCarrusel - 500) < scrollTop)&&flag<4){
      card.classList.add("cardVolando");
      flag++;
    }
  });

}
