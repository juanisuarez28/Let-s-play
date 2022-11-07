"use strict"

document.addEventListener("DOMContentLoaded", function () {

    //MAIN DEL JUEGO
    //SE PROCEDE A AGARRAR TODAS LAS VARIABLES; TANTO OPCIONES DE JUEGO, FICHAS, ETC


    let canvas = document.getElementById('canvas');

    /** @type {CanvasRenderingContext2D} */
    let ctx = canvas.getContext('2d');
    let board = new Tablero(canvas, 0, 0, null);
    let fichas = [];
    let fichasJ1 = [];
    let fichasJ2 = [];
    let jugador1 = "jugador1";
    let jugador2 = "jugador2";
    let isMouseDown = false;




    //por ahora se ejecuta sola, despues se ejecutaria con el botonJugar
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

////////////////////////////////////////////////////////////////////////////////////////////
    //EVENTO CLICK PARA SELECCIONAR FICHA
    /////////////////////////////////////////////////////////////////////////////////////////////////
    function mouseDown(event) {
        let x = event.clientX - canvas.offsetLeft;//TOMA COORDENADAS
        let y = event.clientY - canvas.offsetTop;
        isMouseDown = true;
        fichaSelection(x, y);
    }

    function fichaSelection(x, y) {
        let fichaSelected = [];
        fichaSelected.length = 1;
        fichasJ1.forEach(ficha => {
            if (ficha.checkSelected(x, y)) {   //COMPRUEBA UBICACION DEL MOUSE EN LA FICHA
                console.log("seleccionada")
                fichaSelected = [];                           //LIMPIO ARREGLO CADA VEZ QUE SELECCIONO
                fichaSelected.push(ficha);
                fichaSelected[0].setSelected(true);
            } else {
                ficha.setSelected(false);
            }
        });
        fichasJ2.forEach(ficha => {
            if (ficha.checkSelected(x, y)) {   //COMPRUEBA UBICACION DEL MOUSE EN LA FICHA
                console.log("seleccionada")
                fichaSelected = [];
                fichaSelected.push(ficha);
                fichaSelected[0].setSelected(true);
            } else {
                ficha.setSelected(false);
            }
        });
    }

//////////////////////////////////////////////////////////////////////////////////
 //EVENTO MOVE PARA MOVER FICHAS
/////////////////////////////////////////////////////////////////////////////////////
    function mouseMove(event) {
        let x = event.clientX - canvas.offsetLeft; //TOMA UBICACION DEL MOUSE
        let y = event.clientY - canvas.offsetTop;
        let fichaSelected = [];                               //ARREGLO AUXILIAR
        fichaSelected.length = 1;                             //EL ARREGLO LIMITADO A 1 DE TAMANIO
        fichasJ1.forEach(ficha => {
            if (isMouseDown && ficha.isSelected()) {
                fichaSelected = [];                           //LIMPIO ARREGLO CADA VEZ QUE SELECCIONO
                fichaSelected.push(ficha);                    //PUSHEO LA FICHA SELECCIONADA 
            }
        });
        fichasJ2.forEach(ficha => {
            if (isMouseDown && ficha.isSelected()) {
                fichaSelected = [];                           //LIMPIO ARREGLO CADA VEZ QUE SELECCIONO
                fichaSelected.push(ficha);                    //PUSHEO LA FICHA SELECCIONADA 
            }

        });
        fichaSelected[0].move(x, y);                         //MUEVO FICHA SELECCIONADA, EVITA SELECCION MULTIPLE

    }

//////////////////////////////////////////////////////////////////////////////////
 //EVENTO SOLTAR CLICK PARA SOLTAR FICHA Y COMENZAR A LLENAR LAS COLUMNAS Y DIBUJAR CASILLAS LLENAS
///////////////////////////////////////////////////////////////////////////////
    function mouseUp(event) {
        let x = event.clientX - canvas.offsetLeft; //TOMA UBICACION DEL MOUSE
        let y = event.clientY - canvas.offsetTop;
        isMouseDown = false;
        let columna = entrySelected(x, y);             //CHEQUEA CASILLA DE ENTRADA Y DEVUELVE LA COLUMNA
        let entrada = columna[0];
        let fichaSeleccionada = currentFichaSelected();     //DEVUELVE FICHA SELECCIONADA

        fichaSeleccionada.setInitialPos();                  //DEVUELVE FICHA A POSICION ORIGINAL
        fichaSeleccionada.setSelected(false);

        if(entrada.isSelected){
            if (fichaSeleccionada.getPlayer() == "jugador1") {  //SI ES JUGADOR 1
                insertarEnColumna(columna,fichaSeleccionada);
                fichasJ1.splice(fichaSeleccionada, 1);          //ELIMINA FICHA
            } else {                                            //SINO ES JUGADOR 2
                insertarEnColumna(columna,fichaSeleccionada);
                fichasJ2.splice(fichaSeleccionada, 1);         //ELIMINA FICHA
            }
        }
    }

    function insertarEnColumna(colum, ficha){
        let columna = colum;
        let finalDeColumna = columna.length-1;
        for(let casilla = finalDeColumna; casilla>=0; casilla-- ){
            if(columna[casilla]=="vacio"){
                columna[casilla].setContent(ficha.getPlayer());
                columna[casilla].setStyle(ficha.getEstilo(ficha.getPlayer()));
            }
        }
    }

    //METODOS AUXILIARES PARA EL SOLTADO DE FICHAS
    function currentFichaSelected() {  //METODO QUE BUSCA UNA FICHA SELECCIONADA
        let salida;
        fichasJ1.forEach(ficha => {
            if (ficha.isSelected()) {
                salida = ficha;
            }
        })
        fichasJ2.forEach(ficha => {
            if (ficha.isSelected()) {
                salida = ficha;
            }
        })
        return salida;
    }

    function entrySelected(x, y) {    //METODO QUE BUSCA LA CASILLA DE ENTRADA APUNTADA
        let columnas = [];
        let salida = [];
        columnas = board.getColumnsMemory(); //llamo las columnas completas del tablero
        columnas.forEach(columna => {    //recorro to
            if (columna[0].checkSelected(x, y)) {
                salida = columna;
                columna[0].setColor("white");
                columna[0].setSelected(true);
            } else {
                columna[0].setColor("lightblue");
                columna[0].setSelected(false);
            }
        });
        return salida;
    }



///////////////////////////////////////FIN DE AREA DE EVENTOS





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
        let rows = parseInt(board.getRows()) - 1;
        let columns = parseInt(board.getColumns());
        let cantFichas = rows * columns;
        let yAxis = 30;
        let mitad = Math.floor(cantFichas / 2);
        let mitadDeMitadPrimera = (mitad - Math.floor(mitad / 2));
        let mitadDeMitadSegunda = (cantFichas - Math.floor(mitad / 2));

        fichasJ1 = [];
        fichasJ2 = [];
        let estiloFichas = document.getElementById("selectRivales").value;
        let estilo = null;
        if (estiloFichas == "plantas") {
            estilo = {
                j1: "img/planta.png",
                j2: "img/zombie.png"
            };
        } else if (estiloFichas == "girasoles") {
            estilo = {
                j1: "img/girasol.png",
                j2: "img/soldado.png"
            };
        }

        for (let i = 0; i < mitad; i++) {
            if (i < mitadDeMitadPrimera) {
                let ficha = new Ficha(40, yAxis, ctx, "jugador1", estilo);

                fichasJ1.push(ficha);
                yAxis += 30;
                if (i == mitadDeMitadPrimera - 1) {
                    yAxis = 30;
                }
            }
            else {
                let ficha = new Ficha(100, yAxis, ctx, "jugador1", estilo);

                fichasJ1.push(ficha);
                yAxis += 30;
            }
        }
        yAxis = 30;
        for (let i = mitad; i < cantFichas; i++) {
            if (i < mitadDeMitadSegunda) {
                let ficha = new Ficha(940, yAxis, ctx, "jugador2", estilo);

                fichasJ2.push(ficha);
                yAxis += 30;
                if (i == mitadDeMitadSegunda - 1) {
                    yAxis = 30;
                }
            }
            else {
                let ficha = new Ficha(1000, yAxis, ctx, "jugador2", estilo);

                fichasJ2.push(ficha);
                yAxis += 30;
            }
        }

    }





    //antes de dibujarlas a la hora de mover las fichas, se borra el registro con la funcion clearCanvas() para simular el desplazamiento
    function dibujarFichas() {
        clearCanvas();
        board.drawBoard();
        fichasJ1.forEach(ficha => {
            ficha.draw();
        })
        fichasJ2.forEach(ficha => {
            ficha.draw();
        })
    }

    //Limpieza de canvas, restauracion de tablero
    function clearCanvas() {
        board.clearBoard;   //limpia tablero
        ctx.clearRect(0, 0, 1080, 700);
    }






    // INICIA EL JUEGO
    document.getElementById("jugar").addEventListener("click", () => {
        clearCanvas();
        init();
    })

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
}
);