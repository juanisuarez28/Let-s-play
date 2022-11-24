"use strict"



//funcion para botones derecha en carrusel
let i=0;
let btnsDerecha =document.querySelectorAll('.btn-derecha');

for (let a = 0; a < btnsDerecha.length; a++) {
  let element = btnsDerecha[a];  
  element.addEventListener("click", ()=> {

    if(i==0){
      i++;
      element.nextElementSibling.style.transform =`translateX(${-25}%)`;
    }else if(i==1){
      i++;
      element.nextElementSibling.style.transform =`translateX(${-50}%)`;
    }else if(i==2){
      i++;
      element.nextElementSibling.style.transform =`translateX(${-75}%)`;
    }else{
      i=0;
      element.nextElementSibling.style.transform =`translateX(${-0}%)`
    }
    }
  );
}



//funcion para botones izquierda carrusel
let btnsIzquierda =document.querySelectorAll('.btn-izquierda');

for (let a = 0; a < btnsIzquierda.length; a++) {
  let element = btnsIzquierda[a];  
  element.addEventListener("click", ()=> {

    if(i==0){
      i=3;     
      element.nextElementSibling.nextElementSibling.style.transform =`translateX(${-75}%)`;
    }else if(i==3){
        i=2;
        element.nextElementSibling.nextElementSibling.style.transform =`translateX(${-50}%)`;
    }else if(i==2){
        i=1
        element.nextElementSibling.nextElementSibling.style.transform =`translateX(${-25}%)`;
    }else{
        i=0;
        element.nextElementSibling.nextElementSibling.style.transform =`translateX(${-0}%)`
    }
  }
  );
}
