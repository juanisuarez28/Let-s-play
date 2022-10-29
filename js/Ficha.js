class Ficha{
    constructor(x, y, ctx){
        this.x=x;
        this.y=y;
        this.ctx=ctx;
        this.w=50;
        this.h=50;
        this.selected=false;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle="00FF00";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    checkSelected(x, y){
        return x>this.x && x< this.x + this.w
        && y>this.y&& y < this.y+this.h;
    }

    move(x,y){
        this.x=x - (this.w/2);
        this.y=y - (this.h/2);
    }

    isSelected(){
        return this.selected;
    }

    setSelected(selected){
        this.selected=selected;
    }
}