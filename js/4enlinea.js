"use strict"

document.addEventListener("DOMContentLoaded", function () {

//MAIN DEL JUEGO
//SE PROCEDE A AGARRAR TODAS LAS VARIABLES; TANTO OPCIONES DE JUEGO, FICHAS, ETC


let canvas=document.getElementById('canvas');

 /** @type {CanvasRenderingContext2D} */
let ctx=canvas.getContext('2d');
let board = new Tablero(canvas,0,null);
let fichas=[];





//por ahora se ejecuta sola, despues se ejecutaria con el botonJugar
function init() {
    createBoard();
    addFicha();
    dibujarFichas();
    initEvents();
    setInterval(dibujarFichas, 20);
    
}


//EVENTOS DE MOVIMIENTO
function initEvents(){
    canvas.onmousedown=mouseDown;
    canvas.onmousemove=mouseMove;
    canvas.onmouseup=mouseUp;
}

function mouseDown(event){
    let x=event.clientX - event.currentTarget.offsetLeft;
    let y= event.clientY - event.currentTarget.offsetTop;

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
    let x=event.clientX - event.currentTarget.offsetLeft;
    let y= event.clientY - event.currentTarget.offsetTop;
    
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


function createBoard(){
    board.clearBoard(); //limpia tablero
    let goal = parseInt(document.getElementById("selectJuego").value); //toma la configuracion del modo de juego
    board = new Tablero(canvas,goal,ctx); //instancia un tablero nuevo
    board.create(); //crea las casillas
    board.drawBoard(); //dibuja las casillas
}


//Una vez iniciado el juego se pushean las fichas(segun modo de juego se crean x fichas)
let goalConfig = parseInt(document.getElementById("selectJuego").value);
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
    board.drawBoard();
    fichas.forEach(ficha => {
        ficha.draw();
    })
}

//Limpieza de canvas, restauracion de tablero
function clearCanvas() {
    board.clearBoard;   //limpia tablero
    ctx.clearRect(0, 0, 1080, 700);
}






// INICIA EL JUEGO
document.getElementById("jugar").addEventListener("click", ()=>{
    clearCanvas();
    init(); 
})


});