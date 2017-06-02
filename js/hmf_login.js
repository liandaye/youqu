

var div2=document.getElementById("div2");
var div1=document.getElementById("div1");

div2.addEventListener("touchstart",function(){
    div1.className=(div1.className=="close1")?"open1":"close1";
    div2.className=(div2.className=="close2")?"open2":"close2";
})
//表单
var logForm=[];
    logForm[0]=document.querySelector(".hmf-form>input");
    logForm[1]=document.querySelector(".visible>input");
    console.log(logForm[1])
//头像
var Head=document.querySelector(".hmf-Head");
var userv='';
var psdv='';
var flag=false;
var flag2=false;
for(var i=0;i<logForm.length;i++){
    logForm[i].addEventListener("focus",function(){
        Head.style.width="3rem";
        Head.style.height="3rem";
        Head.style.left="75%";
        Head.style.top="-2rem";
        prompt.style.opacity=0;
        this.style.background="#C5D8E7";
    })
    logForm[i].addEventListener("blur",function(){
        this.style.background="#F3F3F3";
        userv=logForm[0].value.trim();
        psdv=logForm[1].value.trim();
    })
}




//提示框
var prompt=document.querySelector(".prompt");
//提示信息
var information=document.querySelector(".information");
//后缀名
var suffix=document.querySelector(".suffix");
var sufa=document.querySelectorAll(".suffix>a");
var hyinx=document.querySelectorAll(".yinx-suf");
var hmfcolor=document.querySelector(".hmf-color");
var hmfhui=document.querySelector(".hmf-hui");
hmfcolor.style.display="none";
hmfhui.style.display="block";
//本地存储
var log=[];
log.push({"user":"123@qq.com","pwd":"123456"})
log.push({"user":"456@qq.com","pwd":"456789"})

localStorage['login']=JSON.stringify(log);

var getlogin=JSON.parse(localStorage.getItem("login"));


logForm[1].addEventListener("focus",function(){
    suffix.style.opacity=0;
    if(!userv){
        prompt.style.opacity="1";
        information.innerHTML="请输入用户名";
        return ;
    }
})

function inputs(event){
    var use=myform.name.value;
    //获取用户焦点，那个小圆圈后缀消失
    if(userv==""){
        suffix.style.opacity=0;
    }

    //判断邮箱
    var reg=/^[a-zA-Z0-9]\w+@$/;
    var star=reg.test(use);
    //判断用户名
    var regu=/^\W{6}$/;
    var staru=regu.test(use);
    //去除空白 \S
    var regk=/^\s$/;
    var stark=regk.test(use);
    //use.charAt(use.length-1)==" "
    // stark==" "||
    //验证手机
    var regp=/^\d{11}$/;
    var starp=regp.test(use);
    if(use.indexOf(" ")>=0){
        flag=false;
        prompt.style.opacity=1;
        information.innerHTML="用户名不能输入空格";
        return ;

    }else{
        if(star){
            flag=true;
            suffix.style.opacity=1;
            for(var i=0;i<sufa.length;i++){
                sufa[i].index=i;
                sufa[i].addEventListener("touchstart",function () {
                    var hytext=hyinx[this.index].innerText;
                    use+=hytext;
                    logForm[0].value=use;
                    suffix.style.opacity=0;
                })
            }
        }else if(staru||starp){
            flag=true;

        }else{
            flag=false;
            prompt.style.opacity=1;
            information.innerHTML="请输入正确格式";


        }
        prompt.style.opacity=0;
        return flag;
    }
}
//img  眼睛，点击后密码可见或不可见
var hidd=document.querySelector(".hidd");
var show=document.querySelector(".show");
//两个定位的大盒子
var visible=document.querySelector(".visible");
var hidde=document.querySelector(".hidde");
var visa=document.querySelectorAll(".visible>a");
var hidin=document.querySelector(".hidde>input");
visa[0].style.display="none";
visa[1].style.display="none";
logForm[1].addEventListener("focus",function () {
    visa[0].style.display="block";
    visa[1].style.display="block";

})


    //眼睛密码
    hidd.addEventListener("touchstart",function () {
        flage=true;
        visible.style.display="none";
        hidde.style.display="block";
        hidin.value=logForm[1].value;
    hidin.addEventListener("blur",function () {
        logForm[1].value=hidin.value;
    })


})



    show.addEventListener("touchstart",function () {

        visible.style.display="block";
        hidde.style.display="none";


    })


var hmfdis=document.querySelectorAll(".hmf-dis");
console.log(hmfdis)
//    点击密码清空
for(var i=0;i<hmfdis.length;i++){
    hmfdis[i].addEventListener("touchstart",function () {
        logForm[1].value="";
        hidin.value="";
    })
}


var log=document.querySelector("#login");

function blurs(event) {
    var pwd = myform.pwd.value;
    var reg=/^[a-zA-Z0-9]\w{5}$/;
    var star = reg.test(pwd);
    if(pwd.indexOf(" ")>=0){
        flag2=false;
        prompt.style.opacity=1;
        information.innerHTML="用户名不能输入空格";


    }else {
        if(star) {
            prompt.style.opacity = 0;
            flag2 = true;
        }else if (pwd.length<6&&pwd.length>5){
            flag2 = true;
            prompt.style.opacity = 0;
        }else if(pwd.length>6||pwd.length<6){
            flag2 = false;
            prompt.style.opacity = 1;
            information.innerHTML = "密码为6位";
            hmfcolor.style.display="none";
            hmfhui.style.display="block";

        }


    }
    prompt.style.opacity=0;
    console.log(flag)
    console.log(flag2)
    hmfcolor.style.display="none";
    hmfhui.style.display="block";
    if(flag&&flag2){
        //颜色变
        console.log(flag&&flag2)
        hmfcolor.style.display="block";
        hmfhui.style.display="none";
        //和本地对接
        log.addEventListener("touchstart",function () {
            prompt.style.opacity = 0;
            // console.log(userv)
            // console.log(pwd)
            for(var i=0;i<getlogin.length;i++){
                // getuser[i].index=i;
                if((userv==getlogin[i].user||getlogin[i].usew)&&pwd==getlogin[i].pwd){
                    console.log(1.5)
                    location.href="../index.html"

                }else{
                    prompt.style.opacity = 1;
                    information.innerHTML = "用户名与密码不匹配";

                }


            }


        })

    }

}







