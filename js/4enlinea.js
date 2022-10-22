"use strict"

//MAIN DEL JUEGO
//SE PROCEDE A AGARRAR TODAS LAS VARIABLES; TANTO OPCIONES DE JUEGO, FICHAS, ETC


let canvas=document.getElementById('canvas');
let ctx=canvas.getContext('2d');
let fichas=[];



//Una vez iniciado el juego se pushean las fichas(segun modo de juego se crean x fichas)
function addFicha(){
    for (let index = 0; index < x fichas ; index++) {
        let ficha= new Ficha(0,0, ctx);
        fichas.push(ficha);
    }
}

function dibujarFichas(){
    clearCanvas();
    fichas.forEach(ficha => {
        ficha.draw();
    })
}


function clearCanvas() {
    ctx.clearRect(0, 0, 1080, 700);
}

