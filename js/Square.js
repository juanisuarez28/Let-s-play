class Square{

    constructor(x, y, squareWidth, squareHeight, content, context, squareName) {
        this.x = x;
        this.y = y;
        this.squareWidth = squareWidth;
        this.squareHeight = squareHeight;
        this.content = content;
        this.ctx = context;
        this.squareName = squareName;
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



    drawSquare() {              //se dibuja casillero
        let name = this.squareName;
        let borderWidth = 3;
        var offset = borderWidth * 2;
        let context = this.ctx
        context.beginPath();
        if(this.content=="entrada"){
            let nameEntry = name + ", lugar ficha";
            context.fillStyle = "lightblue";
            context.fillRect(this.x - borderWidth, this.y - borderWidth, this.squareWidth + offset, this.squareHeight + offset);
            context.fillStyle = 'rgba(10, 70, 5, 0.1)';
            context.fillRect(this.x, this.y, this.squareWidth, this.squareHeight);
            context.fillStyle = "black";
            if(this.getSquareWidth()<85){
                context.font = "12px Arial";
                context.fillText(nameEntry,(this.x - 35) + this.squareWidth/2,this.y + this.squareHeight/2);
            }else{
                context.font = "15px Arial";
                context.fillText(nameEntry,(this.x - 45) + this.squareWidth/2,this.y + this.squareHeight/2);
            }
            

        }else{
            //SE CARGA LA IMAGEN
            let img = new Image();
            img.context = context;
            img.src = "img/casillero_vacio.png";
            //SE RENDERIZAN CASILLEROS DE JUEGO
            context.drawImage(img ,this.x , this.y, this.squareWidth, this.squareHeight);
            context.fillStyle = "black"
            context.fillRect(this.x - borderWidth, this.y - borderWidth, this.squareWidth + offset, this.squareHeight + offset);
            context.fillStyle = "#3C4F3B";
            context.fillRect(this.x, this.y, this.squareWidth, this.squareHeight);
            context.drawImage(img ,this.x , this.y,  this.squareWidth,this.squareHeight);
            context.fillStyle = "black"
            context.font = "14px Arial";
            context.fillText(name,(this.x-8) + this.squareWidth/2,(this.y+8) + this.squareHeight/2);
        } 
    }


    
}