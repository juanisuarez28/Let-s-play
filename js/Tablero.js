class Tablero{


    constructor(canvas,goalConfig, context) {
        this.canvas = canvas;
        this.columns = parseInt(goalConfig) + 3;
        this.rows = parseInt(goalConfig) + 3;
        this.ctx = context;
        this.boardWidth = canvas.clientWidth * 0.70; //obtiene el ancho del tablero
        this.boardHeight = canvas.clientHeight *0.70; //obtiene el largo del tablero
        this.columnsMemory = []; //almacena los objetos casilleros que seran renderizados periodicamente
    }

    //GETTERS
    getColumns() {
        return this.column;
    }
    getRows() {
        return this.rows;
    }
   

    //CREACION DE CASILLEROS SEGUN CONFIGURACION DEL JUEGO Y ALMACENAMIENTO A MEMORIA
    create() {
        
        let proportions = this.proportions();    //Llama a medidas proporcionales
        let nextX = this.getCoords().xCoord;    //Devuelve ubicación del proximo casillero en X
        let nextY = this.getCoords().yCoord;    //Devuelve ubicación del proximo casillero en Y
        let squareFromEachColumnList = []; //declaro una lista de casilleros auxiliar

        for (let x = 0; x < this.rows; x++) {
            squareFromEachColumnList = [];           //me aseguro de tener vacia la lista de filas auxiliar
            for (let y = 0; y < this.columns; y++) {


                let ySuffix = y-1;      // esta variable permite diferenciar casilleros de entrada de los casilleros comunes
                let squareName = "" + x + (y-1);              //almaceno nombre de casillero
                let enteringSquareName = x;                   //almaceno nombre de casillero de entrada
                
                //CREO UN NUEVO CASILLERO
                var square = this.createSquare(nextX,nextY,proportions,squareName,ySuffix,enteringSquareName); 

                nextY += square.getSquareHeight();   //deslizamos punto dibujo de columna
                
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
    createSquare(nextX,nextY,proportions,squareName,ySuffix,enteringSquareName){
        let newSquare;
        if(ySuffix>=0){
             newSquare = new Square(nextX, nextY,
                proportions.width, proportions.height, "vacio", this.ctx,
                squareName); //se instancia casillero comun
        }else{
             newSquare = new Square(nextX, nextY,
                proportions.width, proportions.height, "entrada", this.ctx,
                enteringSquareName); //se instancia casillero de entrada
        }
        return newSquare;
    }



    // RENDERIZACION DE CASILLEROS EN BASE A MEMORIA
    drawBoard(){
        for(let x = 0; x < this.columnsMemory.length; x++){
            let rows = this.columnsMemory[x];
            for(let y = 0; y < rows.length; y++){
                let squareToDraw = rows[y];
                squareToDraw.drawSquare();
            }
        }
    }

    // LIMPIEZA DE TABLERO
    clearBoard(){
        this.columnsMemory = [];
    }

    //METODO QUE AJUSTA TAMANIO DE CASILLEROS
    proportions() {                    //retorna medidas proporcionales para casilleros
        return {
            width: (this.boardWidth / this.columns),
            height: (this.boardHeight / this.rows)
        };
    }


    //METODO DE CENTRADO DE TABLERO EN BASE AL CANVAS
    getCoords(){
        let centerX = this.boardWidth/2;
        let centerY = this.boardHeight/2;
    
        return {
            xCoord:centerX - ((this.boardWidth*0.60)/2),
            yCoord:centerY - ((this.boardHeight*0.60)/2)
        };
    }

    



}