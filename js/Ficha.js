class Ficha{
    constructor(x, y, ctx,player, estilo){
        this.x=x;
        this.y=y;
        this.ctx=ctx;
        this.player = player;
        this.estilo = estilo;
        this.radio=25; //reemplace Width por radio!!!!!!!!!!!!!!!
        this.h=50;
        this.selected=false;

    }

    draw(){
        this.ctx.beginPath();
        if(this.player=="jugador1"){
            this.ctx.fillStyle= "green";
        }else{
            this.ctx.fillStyle= "red";
        }
        this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI, false);
        this.ctx.fill();
        this.ctx.fillStyle="00FF00";
        this.ctx.stroke();
    
        let diametro = this.radio*2;
        let img = new Image();
            img.ctx = this.ctx;
            if(this.player == "jugador1"){
                img.src = this.estilo.j1;
            }else if (this.player == "jugador2"){
                img.src = this.estilo.j2;
            }
            this.ctx.drawImage(img ,this.x - this.radio , this.y - this.radio ,diametro,diametro);
    }

    checkSelected(x, y){
        let _x = this.x - x;
        let _y = this.y - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radio;
    }

    move(x,y){
        this.x=x - (this.radio/2);
        this.y=y - (this.radio/2);
    }

    isSelected(){
        return this.selected;
    }

    setSelected(selected){
        this.selected=selected;
    }




    
    /*checkSelected(x, y){   rectangulo
        return x>this.x && x< this.x + this.radio //reemplace Width por radio!!!!!!!!!!!!!!!
        && y>this.y && y < this.y+this.radio;
    }*/
}