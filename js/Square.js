class Square {

    constructor(x, y, squareWidth, squareHeight, content, context, squareName, style) {
        this.x = x;
        this.y = y;
        this.squareWidth = squareWidth;
        this.squareHeight = squareHeight;
        this.content = content;
        this.ctx = context;
        this.squareName = squareName;
        this.style = style;
    }


    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getSquareHeight() {
        return this.squareHeight;
    }

    getSquareWidth() {
        return this.squareWidth;
    }

    getContent() {
        return this.content;
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
        if (this.content == "entrada") {
            this.drawEntry(img,borderWidth, offset, context); //METODOS PARA CASILLAS DE ENTRADA
        } else {
            this.drawSquare(name,img,borderWidth,offset,context); //METODOS PARA CASILLAS DE JUEGO
        }
    }

    drawEntry(img,borderWidth, offset, context) {
        //SE DIBUJA RECUADRO CELESTE DE FONDO
        let descripcion = "Insertar";
        context.fillStyle = "lightblue";
        context.fillRect(this.x - borderWidth, this.y - borderWidth, this.squareWidth + offset, this.squareHeight + offset);
        context.fillStyle = 'rgba(10, 70, 5, 0.1)';
        context.fillRect(this.x, this.y, this.squareWidth, this.squareHeight);
        context.fillStyle = "black";

        //SE CARGA LA IMAGEN DE LA FLECHA QUE SENIALA LA ENTRADA
        img.src = "img/insertar.png";
        context.drawImage(img, this.x + this.squareWidth / 4, this.y + this.squareHeight / 3, this.squareWidth / 2, this.squareHeight / 2);
        context.font = "16px Arial";
        context.fillText(descripcion, (this.x - 30) + this.squareWidth / 2, (this.y - 20) + this.squareHeight / 2);
    }

    drawSquare(name,img,borderWidth,offset,context) {
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

    



}