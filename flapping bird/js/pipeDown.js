(function (w) {

    function Pipe(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.speed=-8;
    }

    Pipe.init= function (canvas,ctx,img) {
        Pipe.canvas=canvas;
        Pipe.ctx=ctx;
        Pipe.img=img;
        Pipe.imgWidth=img.width;
        Pipe.imgHeight=img.height;
    }

    Pipe.prototype= {
        constructor:Pipe,

        draw: function () {
            Pipe.ctx.drawImage(Pipe.img,this.x,this.y,this.w,this.h);
            Pipe.ctx.rect(this.x,this.y,this.w,this.h);

        },

        update: function () {
            if(this.x<=-Pipe.canvas.width/5){
                this.x+=Pipe.canvas.width*1.25;
            }
            this.x+=this.speed;
        }

    }

    w.Pipe=Pipe;
}(window));


(function (w) {


    function Pipe1(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.speed=-8;
    }

    Pipe1.init= function (canvas,ctx,img) {
        Pipe1.canvas=canvas;
        Pipe1.ctx=ctx;
        Pipe1.img=img;
        Pipe1.imgWidth=img.width;
        Pipe1.imgHeight=img.height;
    }

    Pipe1.prototype= {
        constructor:Pipe1,

        draw: function () {
            Pipe1.ctx.drawImage(Pipe1.img,this.x,this.y,this.w,this.h);
            Pipe1.ctx.rect(this.x,this.y,this.w,this.h);

        },

        update: function () {
            if(this.x<=-Pipe1.canvas.width/5){
                this.x+=Pipe1.canvas.width*1.25;
            }
            this.x+=this.speed;
        }

    }

    w.Pipe1=Pipe1;
}(window));