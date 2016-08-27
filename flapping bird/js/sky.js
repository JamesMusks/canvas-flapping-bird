
(function (w) {

    function Sky(x,y) {
        if(!Sky.isInit){
            throw "«Î≥ı ºªØ";
        }
        this.x=x;
        this.y=y;
        this.speed=-10;
    };

    Sky.init= function (canvas,ctx,img) {
        Sky.canvas=canvas;
        Sky.ctx=ctx;
        Sky.img=img;
        Sky.imgWidth=img.width;
        Sky.imgHeight=img.height;

        if(canvas&&ctx&&img){
            Sky.isInit=true;
        }
    };

    Sky.prototype={
        constructor:Sky,
        draw:function(){
            Sky.ctx.drawImage(Sky.img,this.x,this.y)
        },
        update:function(){
            this.x += this.speed;

            if(this.x<=-Sky.imgWidth){
                this.x+= 2*Sky.imgWidth;
            }
        }
    }

    w.Sky=Sky;
}(window));