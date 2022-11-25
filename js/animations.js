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
let carrusel = document.querySelector(".seccion-personajes");
let flag = 0;
function mostrarAlScrollear(){
  let longitud = cardsAnimadas.length;
  let ubicacionCarrusel = carrusel.offsetTop;
  let scrollTop = document.documentElement.scrollTop; //detecta lo que se scrolleo
  for(let i = 0; i<longitud; i++) {
    if(((ubicacionCarrusel - 500) < scrollTop)&& i<4){
      switch(i){
        case 0:
          cardsAnimadas[i].classList.add("cardVolando1");
          break;
        case 1:
          cardsAnimadas[i].classList.add("cardVolando2");
          break;
        case 2:
          cardsAnimadas[i].classList.add("cardVolando3");
          break;
        case 3:
          cardsAnimadas[i].classList.add("cardVolando4");
          break;
      }
      
      
    }
  };

}
