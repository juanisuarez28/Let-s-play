"use strict"

let labelHambur = document.querySelector("#menu-hambur-label");
let hambur = labelHambur.querySelector(".menu-hambur");
let cross = labelHambur.querySelector(".menu-cross");

labelHambur.addEventListener("click", () => {
    hambur.style.animationName = "none";
    cross.style.animationName = "none";
    
    setTimeout(() => {
        hambur.style.animationName = "hamburgTransition";
        cross.style.animationName = "crossAppear";
    }, 0);
})


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