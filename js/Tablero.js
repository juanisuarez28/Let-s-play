class Tablero {
    constructor(canvas, goalConfig, boardStyle, context) {
        this.canvas = canvas;
        this.columns = parseInt(goalConfig) + 3;
        this.rows = parseInt(goalConfig) + 3;
        this.boardStyle = boardStyle;
        this.ctx = context;
        this.boardWidth = canvas.clientWidth * 0.60; //obtiene el ancho del tablero
        this.boardHeight = canvas.clientHeight * 0.60; //obtiene el largo del tablero
        this.columnsMemory = []; //almacena los objetos casilleros que seran renderizados periodicamente

    }

    //GETTERS
    getColumns() {
        return this.columns;
    }
    getRows() {
        return this.rows;
    }
    getColumnsMemory(){
        return this.columnsMemory;
    }


    //CREACION DE CASILLEROS SEGUN CONFIGURACION DEL JUEGO Y ALMACENAMIENTO A MEMORIA
    create() {
        let proportions = this.proportions();    //Llama a medidas proporcionales
        let nextX = this.getCoords().xCoord;    //Devuelve ubicación del proximo casillero en X
        let nextY = this.getCoords().yCoord;    //Devuelve ubicación del proximo casillero en Y
        let squareFromEachColumnList = []; //declaro una lista de casilleros auxiliar



        //CONTROLA EL ESTILO SELECCIONADO DEL JUEGO

        let style = null;
        if (this.boardStyle === "standard") {
            style = {
                url: "img/casillero_vacio.png",
                textColor: "black"
            };

        } else {
            style = {
                url: "img/casillero_vacio2.jpg",
                textColor: "bisque"
            };
        }


        //COMIENZA LA CREACION DE COLUMNAS QUE CONTENGAN CASILLEROS
        for (let x = 0; x < this.rows; x++) {
            squareFromEachColumnList = [];           //me aseguro de tener vacia la lista de filas auxiliar

            for (let y = 0; y < this.columns; y++) {

                let ySuffix = y - 1;      // esta variable permite diferenciar casilleros de entrada de los casilleros comunes
                let squareName = "" + x + (y - 1);              //almaceno nombre de casillero

                //CREO UN NUEVO CASILLERO
                var square = this.createSquare(nextX, nextY, proportions, squareName, ySuffix, style); //creo casilla
                
                nextY += square.getSquareHeight();   //deslizamos punto de dibujo para siguiente columna en eje Y

                squareFromEachColumnList.push(square);     //almaceno el casillero de cada fila en el arreglo
            }

            //DESLIZAMIENTOS
            nextY = this.getCoords().yCoord;         //deslizamos a posicion inicial del eje Y
            nextX += square.getSquareWidth();        //deslizamos sobre el eje X para comenzar la siguiente columna
            //PUSHEO EN COLECCIONES DE COLUMNAS
            this.columnsMemory.push(squareFromEachColumnList);     //cuando completo la fila, pusheo en cada columna
        }
    }



    //METODO QUE FABRICA DISTINTOS TIPOS DE CASILLEROS
    createSquare(nextX, nextY, proportions, squareName, ySuffix, boardStyleURL) {
        let newSquare;
        if (ySuffix >= 0) { //Pregunto si no son el primer indice de cada columna
            newSquare = new RegularSquare(nextX, nextY,
                proportions.width, proportions.height, this.ctx,
                squareName, boardStyleURL); //se instancia casillero comun
        } else {  //si es el primer indice de columna, significa que es casilla para depositar ficha
            newSquare = new EntrySquare(nextX, nextY,
                proportions.width, proportions.height, this.ctx); //se instancia casillero de entrada
        }
        return newSquare;
    }



    // RENDERIZACION DE CASILLEROS EN BASE A MEMORIA
    drawBoard() {
        for (let x = 0; x < this.columnsMemory.length; x++) {
            let rows = this.columnsMemory[x];
            for (let y = 0; y < rows.length; y++) {
                let squareToDraw = rows[y];
                squareToDraw.draw();
            }
        }
    }



    // LIMPIEZA DE TABLERO
    clearBoard() {
        this.columnsMemory = [];
    }

    //METODO QUE AJUSTA TAMANIO DE CASILLEROS
    proportions() {                    //retorna medidas proporcionales para casilleros
        return {
            width: (this.boardWidth / this.columns),
            height: (this.boardWidth / this.rows)
        };
    }


    //METODO DE CENTRADO DE TABLERO EN BASE AL CANVAS
    getCoords() {
        let centerX = this.boardWidth / 2;
        let centerY = this.boardHeight / 3;

        return {
            xCoord: centerX - ((this.boardWidth * 0.40) / 2),
            yCoord: centerY - ((this.boardHeight * 0.55) / 2)
        };
    }

/*
    verify(jugador){
        let columnas = this.columnsMemory;
        let goal = this.goalConfig;
        let lineaHorizontal = 0;
        let lineaVertical = 0;
        lineaHorizontal = horizontal(jugador);
        lineaVertical = vertical(jugador,columnas);
    }
    vertical(jugador,columnas){
        let arriba = 0;
        let abajo = 0;
        abajo = verifyDown(jugador,columnas);
    }
    verifyDown(jugador,columnas){
        for(let columna; columna<=columnas;columna++){
            casillas = columnas[columna];
            for(let i; i<=casillas ;i++){
                let casilla = casillas[i];
                if(casilla.getContent()==jugador){
                    
                }
            }
        }
    }
    horizontal(jugador){
        
        let izquierda;
        let derecha;
        derecha = verifyRight(jugador);
    }
    verifyRight(jugador){
        let columnas = this.columnsMemory;
        for(let columna; columna<=columnas;columna++){
            
        }
    }
*/
}