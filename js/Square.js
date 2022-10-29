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



    drawSquare(image) {              //se dibuja casillero
        let name = this.squareName;
        let borderWidth = 3;
        var offset = borderWidth * 2;
        let context = this.ctx
        context.beginPath();
        if(this.content=="entrada"){
            context.fillStyle = 'rgba(10, 70, 5, 0.3)';
            context.fillRect(this.x - borderWidth, this.y - borderWidth, this.squareWidth + offset, this.squareHeight + offset);
            context.fillStyle = 'rgba(10, 70, 5, 0.1)';
            context.fillRect(this.x, this.y, this.squareWidth, this.squareHeight);
            context.fillStyle = "black";
            context.font = "20px Arial";
            context.fillText(name,this.x + this.squareWidth/2,this.y + this.squareHeight/2);
        }else{
            image.src = "img/casillero_vacio.png";
            image.onload = function(){
                context.drawImage(image,this.x, this.y, 400, 400);
            }
            context.fillStyle = "black"
            context.fillRect(this.x - borderWidth, this.y - borderWidth, this.squareWidth + offset, this.squareHeight + offset);
            context.fillStyle = "#3C4F3B";
            context.fillRect(this.x, this.y, this.squareWidth, this.squareHeight);
            context.fillStyle = "bisque"
            context.font = "14px Arial";
            context.fillText(name,this.x + this.squareWidth/2,this.y + this.squareHeight/2);
        } 
    }


    
}