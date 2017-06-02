var reuser=document.querySelector("#reuser");
var rephone=document.querySelector("#rephone");
var repwd1=document.querySelector("#repwd1");
var repwd2=document.querySelector("#repwd2");
var htis=document.querySelectorAll(".htis");
var reg=document.querySelector("#reg")
var flagu=false;
var flagp=false;
var retp=[];
var tetu=[];
var log=[];

function useblur(event){
    var use=reuser.value;
    console.log(1)
    var use=reuser.value;
    //判断邮箱
    var reg=/^[a-zA-Z0-9]\w+@[a-zA-Z]+\.(com|cc|org|net|cn|com.cn)$/;
    var star=reg.test(use);
    //判断用户名
    var regu=/^\W{6}$/;
    var staru=regu.test(use);
    //去除空白 \S
    var regk=/^\s$/;
    var stark=regk.test(use);
    if(use.indexOf(" ")>=0){
        flagu=false;
        htis[0].style.opacity=1;
        htis[0].innerHTML="用户名不能输入空格";

    }else{
        if(star){
            flagu=true;
            htis[0].style.opacity=0;
        }else if(staru){
            flagu=true;
            htis[0].style.opacity=0;
        }else{
            flagu=false;
            htis[0].style.opacity=1;
            htis[0].innerHTML="请输入正确格式";
        }



    }
    retu=[flagu,use];
    return retu;
}


function phoblur(event){
    var usep=rephone.value;
    //验证手机
    var regp=/^\d{11}$/;
    var starp=regp.test(usep);
    if(usep.indexOf(" ")>=0){
        flagp=false;
        htis[1].style.opacity=1;
        htis[1].innerHTML="手机号码不能输入空格";
    }else{
        if(starp){
            flagp=true;
            htis[1].style.opacity=0;

        }else{
            flagp=false;
            htis[1].style.opacity=1;
            htis[1].innerHTML="请输入正确格式";
        }

    }
    retp=[flagp,usep];
    return retp;
}
reg.addEventListener("touchstart",function () {
    var usew=repwd1.value;
    var usew2=repwd2.value;
    if(!(retp[1]&&retu[1]&&usew)){
        htis[0].style.opacity=1;
        htis[0].innerHTML="未输入内容";
        htis[1].style.opacity=1;
        htis[1].innerHTML="未输入内容";
        htis[2].style.opacity=1;
        htis[2].innerHTML="未输入内容";
        return ;
    }else{
        if(retp[0]&&retu[0]){

            if(usew==usew2){

                log.push({"user":retu[1],"pwd":usew,"phone":retp[1]})
                localStorage.setItem('login',JSON.stringify(log[0]));
                reuser.value="";
                rephone.value="";
                repwd1.value="";
                repwd2.value="";
                location.href="hmf-denl.html";
            }else{
                htis[2].style.opacity=1;
                htis[2].innerHTML="两次密码输入不一致";
            }
        }
    }


})

