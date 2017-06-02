var zby_lun=document.querySelectorAll('.zby_lun');
var zby_MeDtai=document.querySelectorAll('.zby_MeDtai');
var zby_Fnb=document.querySelector('.zby_Fnb');
var zby_Fbox=document.querySelector('.zby_Fbox');
var zby_brtop=document.querySelector('.zby_brtop');
var zby_boxtop=document.querySelectorAll('.zby_boxtop');
var zby_Dcontent=document.querySelectorAll('.zby_Dcontent');
var zby_lunbo=document.querySelectorAll('.zby_lunbo');



zby_brtop.addEventListener('touchstart',function () {
    zby_Fnb.classList.remove('zby_active');
    var op=zby_Fbox.style.opacity=0;
    if(op==0){
        zby_Fbox.style.zIndex=-1;
    }
});
// for(var i=0;i<zby_Dcontent.length;i++) {
//     zby_Dcontent[i].indexs=i;
//     touch.on(zby_Dcontent, 'doubletap', function (a) {
//         console.log(a);
//         for (var j = 0; j < zby_lunbo.length; j++) {
//             zby_lunbo[j].index=j;
//             zby_lunbo[j].classList.add("zby_hidden");
//             console.log(j)
//         }
//         zby_lunbo[index].classList.add("zby_hidden")
//
//     });
// }
// 获取图片
// var flag=false

for(var i=0;i<zby_Dcontent.length;i++){
    zby_Dcontent[i].indexs=i;
    zby_Dcontent[i].addEventListener('touchstart',function () {
        non=this.indexs;
        var num=0;
        Zbyt=setInterval(function () {
            num++;
            if(num==2){
                // console.log(non);
                for (var j = 0; j < zby_lunbo.length; j++) {
                    // zby_lunbo[j].indexss=j
                    zby_lunbo[j].classList.add("zby_hidden");
                    // console.log(j)

                }
                zby_lunbo[non].classList.remove("zby_hidden")

            }

        },1000);


    });

    zby_Dcontent[i].addEventListener('touchend',function () {
        clearInterval(Zbyt);
    });
    // console.log(start);
}


// console.log(zby_boxtop);
var zby_boxbotm=document.querySelectorAll('.zby_boxbotm');
for(var j=0;j<zby_boxtop.length;j++) {
    zby_boxtop[j].num = j;
    zby_boxtop[j].addEventListener(['touchstart'], function () {
        for (var j=0;j<zby_lunbo.length;j++){
            zby_lunbo[j].classList.add("zby_hidden")
        }


    })
}
for(var j=0;j<zby_boxbotm.length;j++) {
    zby_boxbotm[j].num = j;
    zby_boxbotm[j].addEventListener(['touchstart'], function () {
        for (var j=0;j<zby_lunbo.length;j++){
            zby_lunbo[j].classList.add("zby_hidden")
        }


    })
}
//长按
var zby_Dtop=document.querySelectorAll('.zby_Dtop');
for(var i=0;i<zby_lun.length;i++){
	zby_lun[i].index=i;
	touch.on(zby_lun[i],'hold',function(){
        console.log(this)
        zby_Fnb.classList.remove('zby_active');
        var zi=zby_Fbox.style.zIndex=999999999;

        if(zi==999999999){
            op=zby_Fbox.style.opacity=1;
        }
	})
}
