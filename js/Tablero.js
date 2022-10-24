class Tablero{

    

    constructor(canvas,goalConfig, context) {
        this.canvas = canvas;
        this.columns = parseInt(goalConfig) + 3;
        this.rows = parseInt(goalConfig) + 3;
        this.ctx = context;
        this.boardWidth = canvas.clientWidth * 0.85; //obtiene el ancho del tablero
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
        let nextX = this.getCoords().xCoord;    //Devuelve ubicación del proximo casillero en X
        let nextY = this.getCoords().yCoord;    //Devuelve ubicación del proximo casillero en Y
        let squareName;     //declaro nombre de casillero
        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.columns; y++) {
                let ySuffix = y-1;
                
                squareName = "" + x + (y-1);              //almaceno nombre de casillero
                
                var addSquare = new Square(nextX, nextY,
                    proportions.width, proportions.height, "vacio", this.ctx,
                    squareName, ySuffix); //se instancia casillero

                addSquare.createSquare();         //se dibuja el casillero
                nextY += addSquare.getSquareHeight();   //deslizamos punto dibujo de columna
                
            }
            nextY = this.getCoords().yCoord;                           //deslizamos columna a posicion inicial
            nextX += addSquare.getSquareWidth();        //deslizamos el punto de dibujo fila 
       
        }
     
    }

    proportions() {                    //retorna medidas proporcionales para casilleros
        return {
            width: (this.boardWidth / this.columns),
            height: (this.boardHeight / this.rows)
        };
    }

    getCoords(){
        let centerX = this.boardWidth/2;
        let centerY = this.boardHeight/2;
    
        return {
            xCoord:centerX - ((this.boardWidth*0.85)/2),
            yCoord:centerY - ((this.boardHeight*0.85)/2)
        };
    }

    



}