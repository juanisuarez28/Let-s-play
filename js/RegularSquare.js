class RegularSquare extends Square {
    constructor(x, y, squareWidth, squareHeight, context, squareName, style) {
        super(x, y, squareWidth, squareHeight, context);
        this.squareName = squareName;
        this.style = style.url;
        this.fontColor = style.textColor;
        this.content = "vacio";
    }


    getContent(){
        return this.content;
    }
    
    setContent(content){
        this.content = content;
    }

    insertarFicha(ficha){
        //Segun la url de ficha que le llega, se cambia la url original del casillero por la de la ficha insertada
        if(ficha=="img/planta.png"){
            this.style="img/casillero_planta.png";
        }else if(ficha=="img/girasol.png"){
            this.style="img/casillero_girasol.png";
        }else if(ficha=="img/zombie.png"){
            this.style="img/casillero_zombie.png";
        }else{
            this.style="img/casillero_soldado.png";
        }
    }


    draw() {              //se dibuja casillero
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
        img.src = this.style;
        //DIBUJA LA IMAGEN
        context.drawImage(img, this.x, this.y, this.squareWidth, this.squareHeight);

    }

    estaOcupado(){
        if(this.content!="vacio"){
            return true;
        }
    }

}