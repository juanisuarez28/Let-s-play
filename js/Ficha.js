class Ficha{
<<<<<<< HEAD
    constructor(x, y, ctx,player, estilo){
=======
    constructor(x, y, ctx, color,player, modo){
>>>>>>> 125f8b79f25b815c8e04d188d867d007ea0c045b
        this.x=x;
        this.y=y;
        this.ctx=ctx;
        this.player = player;
        this.estilo = estilo;
        this.radio=25; //reemplace Width por radio!!!!!!!!!!!!!!!
        this.h=50;
        this.selected=false;
        this.modo=modo;
    }

    draw(){
        this.ctx.beginPath();
<<<<<<< HEAD
        if(this.player=="jugador1"){
            this.ctx.fillStyle= "green";
        }else{
            this.ctx.fillStyle= "red";
        }
        this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI, false);
        this.ctx.fill();
=======
        this.ctx.fillStyle= "black";
        this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI, false);
        this.ctx.fill();
        //Rellenamos segun el modo de juego
        // if(this.modo==="plantas"){
        //     if(this.player==="player1"){
        //         img.src = "img/planta.png";
        //     }else{
        //         img.src = "img/zombie.png";
        //     }
        // }else if(this.modo==="girasoles"){
        //     if(this.player==="player1"){
        //         img.src = "img/girasol.png";
        //     }else{
        //         img.src = "img/soldado.png";
        //     }
        // }

>>>>>>> 125f8b79f25b815c8e04d188d867d007ea0c045b
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
        return x>this.x && x< this.x + this.radio //reemplace Width por radio!!!!!!!!!!!!!!!
        && y>this.y && y < this.y+this.radio;
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
}