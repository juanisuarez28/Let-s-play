class Ficha{
    constructor(x, y, ctx){
        this.x=x;
        this.y=y;
        this.ctx=ctx;
        this.w=50;
        thish=50;
        this.selected=false;
    }

    draw(){
        this.ctx.fillStyle="";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    checkSelected(x, y){
        return x>this.x && x< this.x + this.w
        && y>this.y&& y < this.y+this.h;
    }

    move(x,y){

    }

    isSelected(){
        return this.selected;
    }

    setSelected(selected){
        this.selected=selected;
    }
}