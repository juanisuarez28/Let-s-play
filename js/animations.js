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