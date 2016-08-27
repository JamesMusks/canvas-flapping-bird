/**
 * Created by Administrator on 2016/8/11.
 */
(function (w) {

    function Bird(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.speed=1;
        this.accelerat= 0.2;
        this.frame=0;
    }

    //初始化鸟类
    Bird.init= function (canvas,ctx,img){
        Bird.canvas=canvas;
        Bird.ctx=ctx;
        Bird.img=img;
        Bird.imgWidth=img.width/3;
        Bird.imgHeight=img.height;
    }

    //给鸟类原型上加方法
    Bird.prototype={
        constructor:Bird,
        draw: function () {
            //先保存状态
            Bird.ctx.save();

            //计算小鸟的中心点
            var birdCoreX=this.x+1/2*Bird.imgWidth;
            var birdCoreY=this.y+1/2*Bird.imgHeight;

            //将坐标系平移到小鸟的中心点
            Bird.ctx.translate(birdCoreX,birdCoreY);

            //获取小鸟的速度并控制旋转角度
            var angle=this.speed*15;
            angle=angle>35?35:angle;

            //根据角度进行坐标系的旋转
            Bird.ctx.rotate(tool.changeAngle(angle));

            Bird.ctx.drawImage(Bird.img,this.frame*Bird.imgWidth,0,Bird.imgWidth,Bird.imgHeight,-this.w/2,-this.h/2,this.w,this.h);

            Bird.ctx.restore();
        },
        update: function () {
            this.frame=++this.frame>2?0:this.frame;
            this.y+=this.speed;
            this.speed+=this.accelerat;
        },

        bind: function () {
            var self=this;
            Bird.canvas.addEventListener("click", function () {
                self.speed=-3;
            })
        }

    }


    w.Bird=Bird;

}(window));
