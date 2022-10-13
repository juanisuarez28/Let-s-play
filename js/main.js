"use strict"

progress();
function progress(){
    let porcentaje = document.querySelector('.porcentaje');
    let count = 1;
    let loading = setInterval(animate, 50);
    function animate(){
      if(count == 100){
        clearInterval(loading);
        closeLoader();
      }else{
        count = count + 1;
        porcentaje.textContent = count + '%';
      }
    }
  }
  function closeLoader(){
    document.getElementById("loader").classList.toggle("loader2");
}

const cards = document.getElementsByClassName('.cards');

let i=0;

const btnDerecha =document.getElementsByClassName('.btn-derecha');
btnDerecha.addEventListener('click', function(){
  
  if(i==0){
    i++;
    cards.style.transform =`translateX(${-25}%)`;
  }else if(i==1){
    i++;
    cards.style.transform =`translateX(${-50}%)`;
  }else if(i==2){
    i++;
    cards.style.transform =`translateX(${-75}%)`;
  }else{
    i=0;
    cards.style.transform =`translateX(${-0}%)`
  }
  
})


const btnIzquierda =document.getElementsByClassName('.btn-izquierda');
btnIzquierda.addEventListener('click', function(){
  
  if(i==0){
    i=3;
    cards.style.transform =`translateX(${-75}%)`;
  }else if(i==3){
    i=2;
    cards.style.transform =`translateX(${-50}%)`;
  }else if(i==2){
    i=1
    cards.style.transform =`translateX(${-25}%)`;
  }else{
    i=0;
    cards.style.transform =`translateX(${-0}%)`
  }
  
})