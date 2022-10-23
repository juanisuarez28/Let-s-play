class Tablero{

    

    constructor(canvas,goalConfig, context) {
        this.canvas = canvas;
        this.columns = goalConfig + 3;
        this.rows = goalConfig + 2;
        this.ctx = context;
        this.boardCoords = canvas.getBoundingClientRect() ; //obtiene coordenada donde se ubica canvas
        this.boardWidth = canvas.clientWidth *0.9 ; //obtiene el ancho del tablero
        this.boardHeight = canvas.clientHeight; //obtiene el largo del tablero
    }

    //GETTERS
    getColumns() {
        return this.column;
    }
    getRows() {
        return this.rows;
    }
    


    create() {
        let nextX = 0;    //Devuelve ubicación del proximo casillero en X
        let nextY = 0;    //Devuelve ubicación del proximo casillero en Y
        let proportions = this.proportions();    //Llama a medidas proporcionales
        let squareName;     //declaro nombre de casillero
        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.columns; y++) {
                squareName = "" + x + (y-1);              //almaceno nombre de casillero

                var addSquare = new Square(nextX, nextY,
                    proportions.width, proportions.height, "vacio", this.ctx,
                    squareName); //se instancia casillero

                addSquare.createSquare();         //se dibuja el casillero
                nextY += addSquare.getSquareHeight();   //deslizamos punto dibujo de columna
                
       
            }
            nextY = 0;                           //deslizamos columna a posicion 0
            nextX += addSquare.getSquareWidth();        //deslizamos el punto de dibujo fila 
       
        }
        for(let i=0; i <= 1; i++){
            nextY = this.boardHeight;
            nextX = 0;

        }
    }

    proportions() {                    //retorna medidas proporcionales para casilleros
        return {
            width: (this.boardWidth / this.columns),
            height: (this.boardHeight / this.rows)
        };
    }






}