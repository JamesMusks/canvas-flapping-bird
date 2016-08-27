/**
 * Created by Administrator on 2016/8/11.
 */
(function (w) {

    function Land(x,y){
        if(!Land.isInit){
            throw "请初始化大地";
        }
        this.x=x;
        this.y=y;
        this.speed=-10;
    }

    Land.init= function (canvas,ctx,img) {
        Land.canvas=canvas;
        Land.ctx=ctx;
        Land.img=img;
        Land.imgWidth=img.width;
        Land.imgHeight=img.height;
        if(canvas&&ctx&&img){
            Land.isInit=true;
        }
    }

    Land.prototype={
        constructor:Land,
        draw: function () {
            Land.ctx.drawImage(Land.img,this.x,this.y);
        },

        update: function () {

            this.x+=this.speed;
            if(this.x<=-Land.imgWidth){
                this.x+=Land.imgWidth*4;
            }
        }

    }

    w.Land=Land;
}(window));