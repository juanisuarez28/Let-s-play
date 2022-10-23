class Tablero{

    

    constructor(canvas,goalConfig, context) {
        this.canvas = canvas;
        this.columns = parseInt(goalConfig) + 3;
        this.rows = parseInt(goalConfig) + 3;
        this.ctx = context;
        this.boardWidth = canvas.clientWidth *0.85 ; //obtiene el ancho del tablero
        this.boardHeight = canvas.clientHeight *0.85; //obtiene el largo del tablero
        
    }

    //GETTERS
    getColumns() {
        return this.column;
    }
    getRows() {
        return this.rows;
    }
    


    create() {
        let proportions = this.proportions();    //Llama a medidas proporcionales
        let nextX = this.coords(proportions).xCoord;    //Devuelve ubicación del proximo casillero en X
        let nextY = this.coords(proportions).yCoord;    //Devuelve ubicación del proximo casillero en Y
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

    coords(proportions){
        return {
            xCoord:((this.boardWidth/2)-(this.columns/2)*proportions.width),
            yCoord:((this.boardHeight/2)-(this.height/2)*proportions.height)
        };
    }





}