var div2=document.getElementById("lys_div2");
var div1=document.getElementById("lys_div1");
div2.addEventListener("touchstart",function(){
    div1.className=(div1.className=="close1")?"open1":"close1";
    div2.className=(div2.className=="close2")?"open2":"close2";
    if (div2.className=="close2") {
    	div2.innerHTML="男"
    }else if (div2.className=="open2") {
    	div2.innerHTML="女"
    };
})

// 相册
var lysGrtxhq=document.querySelector(".lys_grtxhq");
var lysGrxcmask=document.querySelector(".lys_grxcmask");
var lysGrxc=document.querySelector(".lys_grxc");
var lysTxlis=document.querySelectorAll(".lys_txlis")
lysGrtxhq.addEventListener('touchstart',function(e){
    lysGrxc.style.transition='transform 1s .2s'
    lysGrxcmask.style.height='100%'
    lysGrxc.style.transform='translateY(0)';
})
lysTxlis[2].addEventListener('touchstart',function(e){
    lysGrxc.style.transition='transform .5s'
    lysGrxcmask.style.transition='height 0s .5s';
    lysGrxcmask.style.height='0'
    lysGrxc.style.transform='translateY(100%)'
})
// lysGrxcmask.addEventListener('touchstart',function(e){
//     lysGrxc.style.transition='transform .5s'
//     lysGrxcmask.style.transition='height 0s .5s';
//     lysGrxcmask.style.height='0'
//     lysGrxc.style.transform='translateY(100%)'
// })
var lysPz=document.querySelector(".lys_pz");
console.dir(lysPz)
//昵称获取
var lysNcText=document.querySelector(".lys_ncText");
var lysb = localStorage.getItem("text");
var lysas=JSON.parse(lysb);
lysNcText.innerHTML=lysas;

// 获取签名
var lysGrqma=document.querySelector(".lys_grqma")
var lysQmname=document.querySelector(".lys_qmname")
var lysnn=localStorage.getItem("name");
var lysnb=JSON.parse(lysnn);
lysQmname.innerHTML=lysnb;
lysGrqma.title=lysnb;
