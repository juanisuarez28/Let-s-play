class Square {

    constructor(x, y, squareWidth, squareHeight, content, context) {
        this.x = x;
        this.y = y;
        this.squareWidth = squareWidth;
        this.squareHeight = squareHeight;
        this.content = content;
        this.ctx = context;
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

    draw()
    {
        
    }

}