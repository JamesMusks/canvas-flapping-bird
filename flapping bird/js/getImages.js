/**
 * Created by Administrator on 2016/8/11.
 */
(function (w) {
    var imgObj={},key,img,total= 0,callback;
    var imgPathObj={
        'bird': './images/birds.png',
        'land': './images/land.png',
        'pipeDown': './images/pipeDown.png',
        'pipeUp': './images/pipeUp.png',
        'sky': 'images/sky.png'
    };
    for(key in imgPathObj){
        img=new Image();

        img.src=imgPathObj[key];

        img.addEventListener("load", function () {
            total++;

            if(total>=5){
                callback(imgObj);
            }

        });
        // ���´�����ͼƬ����������������պ�ʹ��
        imgObj[key]=img;
    }
    w.getImgs= function (main) {
        callback=main;
    }

}(window));