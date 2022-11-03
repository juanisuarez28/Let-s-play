"use strict"

document.addEventListener("DOMContentLoaded", function () {

    //MAIN DEL JUEGO
    //SE PROCEDE A AGARRAR TODAS LAS VARIABLES; TANTO OPCIONES DE JUEGO, FICHAS, ETC


    let canvas = document.getElementById('canvas');

    /** @type {CanvasRenderingContext2D} */
    let ctx = canvas.getContext('2d');
    let board = new Tablero(canvas, 0, 0, null);
    let fichas = [];
    let jugador1 = "jugador1";
    let jugador2 = "jugador2";




    // INICIA EL JUEGO
    document.getElementById("jugar").addEventListener("click", () => {
        clearCanvas();
        init();
    })
    
    
    function init() {
        createBoard();
        addFicha();
        dibujarFichas();
        initEvents();
        setInterval(dibujarFichas, 20);
    }


    //EVENTOS DE MOVIMIENTO
    function initEvents() {
        canvas.onmousedown = mouseDown;
        canvas.onmousemove = mouseMove;
        canvas.onmouseup = mouseUp;
    }

    function mouseDown(event) {
        let x = event.clientX - event.currentTarget.offsetLeft;
        let y = event.clientY - event.currentTarget.offsetTop;
        
        fichas.forEach(ficha => {
            if (ficha.checkSelected(x, y)) {
                console.log("seleccionada")
                ficha.setSelected(true);
            } else {
                ficha.setSelected(false);
            }
        });
    }


    function mouseMove(event) {
        let x = event.clientX - event.currentTarget.offsetLeft;
        let y = event.clientY - event.currentTarget.offsetTop;

        fichas.forEach(ficha => {
            if (ficha.isSelected()) {
                ficha.move(x, y);
            }
        });
    }

    function mouseUp() {
        fichas.forEach(ficha => {
            ficha.setSelected(false);
        });

    }



    //Inicia el juego y se crea el tablero
    function createBoard() {
        board.clearBoard(); //limpia tablero
        let goal = parseInt(document.getElementById("selectJuego").value); //toma la configuracion del modo de juego
        let boardStyle = document.getElementById("selectBoard").value; //toma la configuracion del estilo de tablero
        board = new Tablero(canvas, goal, boardStyle, ctx); //instancia un tablero nuevo
        board.create(); //crea las casillas
        board.drawBoard(); //dibuja las casillas
    }


    //Una vez iniciado el juego se pushean las fichas(segun modo de juego se crean x fichas)
    function addFicha() {
        let rows = parseInt(board.getRows())-1 ;
        let columns = parseInt(board.getColumns());
        let cantFichas = rows *  columns;
        let yAxis = 30;
        let mitad = Math.floor(cantFichas / 2);
        let mitadDeMitadPrimera = (mitad-Math.floor(mitad/2));
        let mitadDeMitadSegunda = (cantFichas-Math.floor(mitad/2));
        let modo=document.getElementById("selectRivales").value;

        fichas = [];
        let estiloFichas = document.getElementById("selectRivales").value;
        let estilo = null;
        if (estiloFichas == "cristales"){
            estilo = {
                j1:"img/fichaAzul.png",
                j2:"img/ficha.png"
            };
        }else if(estiloFichas== "redes"){
            estilo = {
                j1:"img/fichawas.png",
                j2:"img/fichatwi.png"
            };
        }
        for (let i = 0; i < mitad; i++) {
            if(i<mitadDeMitadPrimera){
                let ficha = new Ficha(40, yAxis, ctx, "blue", "player1", modo);
                fichas.push(ficha);
                yAxis += 30;
                if(i==mitadDeMitadPrimera-1){
                    yAxis = 30;
                }
            }
            else{
                let ficha = new Ficha(100, yAxis, ctx, "blue", "player1", modo);
                fichas.push(ficha);
                yAxis += 30;
            }
        }
        yAxis = 30;
        for (let i = mitad; i < cantFichas; i++) {
            if(i<mitadDeMitadSegunda){
                let ficha = new Ficha(940, yAxis, ctx, "red", "player2", modo);
                fichas.push(ficha);
                yAxis += 30;
                if(i==mitadDeMitadSegunda-1){
                    yAxis = 30;
                }
            }
            else{
                let ficha = new Ficha(1000, yAxis, ctx, "red", "player2", modo);
                fichas.push(ficha);
                yAxis += 30;
            }
        }
        
    }





    //antes de dibujarlas a la hora de mover las fichas, se borra el registro con la funcion clearCanvas() para simular el desplazamiento
    function dibujarFichas() {
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


    /*
    
    //VERIFICAR GANADOR
    function verificarGanador(){
        if(board.verify(jugador1)){
            return "gano el jugador 1";
        }else if(board.verify(jugador2)){
            return "gano el jugador 2";
        }
        
    }

*/

});