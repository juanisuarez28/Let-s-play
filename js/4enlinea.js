"use strict"

document.addEventListener("DOMContentLoaded", function () {

//MAIN DEL JUEGO
//SE PROCEDE A AGARRAR TODAS LAS VARIABLES; TANTO OPCIONES DE JUEGO, FICHAS, ETC


let canvas=document.getElementById('canvas');
let ctx=canvas.getContext('2d');
let fichas=[];



//por ahora se ejecuta sola, despues se ejecutaria con el botonJugar
function init() {
    createBoard();
    // addFicha();
    // dibujarFichas();
    // initEvents();
    // setInterval(dibujarFichas, 20);
    
}



function initEvents(){
    canvas.onmousedown=mouseDown;
    canvas.onmousemove=mouseMove;
    canvas.onmouseup=mouseUp;
}

function mouseDown(event){
    let x=event.clientX + event.currentTarget.offsetLeft;
    let y= event.clientY + event.currentTarget.offsetTop;

    fichas.forEach(ficha => {
        if(ficha.checkSelected(x, y)){
            console.log("seleccionada")
            ficha.setSelected(true);
        }else{
            ficha.setSelected(false);
        }
    });
}


function mouseMove(event) {
    let x=event.clientX + event.currentTarget.offsetLeft;
    let y= event.clientY + event.currentTarget.offsetTop;
    
    fichas.forEach(ficha => {
        if(ficha.isSelected()){
            ficha.move(x,y); 
        }
    });
}

function mouseUp() {
    fichas.forEach(ficha => {
        ficha.setSelected(false);    
    });
    
}



//Inicia el juego y se crea el tablero

let goalConfig = document.getElementById("selectJuego").value;
function createBoard(){
    let newBoard = new Tablero(canvas,goalConfig,ctx);
    newBoard.create();
}


//Una vez iniciado el juego se pushean las fichas(segun modo de juego se crean x fichas)

function addFicha(){
    let cantFichas = parseInt(goalConfig)+38
    let ficha = new Ficha (0,0, ctx);
    if(fichas.length<=cantFichas){
        fichas.push(ficha);
    }
}




//antes de dibujarlas a la hora de mover las fichas, se borra el registro con la funcion clearCanvas() para simular el desplazamiento
function dibujarFichas(){
    clearCanvas();
    fichas.forEach(ficha => {
        ficha.draw();
    })
}


function clearCanvas() {
    ctx.clearRect(0, 0, 1080, 700);
}



document.getElementById("jugar").addEventListener("click", ()=>{
    clearCanvas();
    init(); 
})


});