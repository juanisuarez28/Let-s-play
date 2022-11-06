class RegularSquare extends Square {
    constructor(x, y, squareWidth, squareHeight, content, context, squareName, style) {
        super(x, y, squareWidth, squareHeight, content, context);
        this.squareName = squareName;
        this.style = style;
    }


    


    draw() {              //se dibuja casillero
        let name = this.squareName;
        let borderWidth = 3;
        var offset = borderWidth * 2;
        let context = this.ctx;

        //SE GENERA UNA IMAGEN
        let img = new Image();
        img.context = context;

        context.beginPath();
         //SE RENDERIZAN CASILLEROS DE JUEGO
        //Se dibuja un fondo negro
        context.fillStyle = "black"
        context.fillRect(this.x - borderWidth, this.y - borderWidth, this.squareWidth + offset, this.squareHeight + offset);

        //SELECCIONA LA URL DE LA IMAGEN DE CASILLA
        img.src = this.style.url;
        //DIBUJA LA IMAGEN
        context.drawImage(img, this.x, this.y, this.squareWidth, this.squareHeight);
        context.fillStyle = this.style.textColor;
        context.font = "14px Arial";
        context.fillText(name, (this.x - 8) + this.squareWidth / 2, (this.y + 8) + this.squareHeight / 2);



    }




    /*
    estaOcupado(){
        if(this.content!="vacio"){
            return true;
        }
    }
    contieneFichaJugador(jugador){
        if(this.content == "jugador"){
            return true;
        }
    }
*/

}