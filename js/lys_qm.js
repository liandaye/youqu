var lysQminput=document.querySelector(".lys_qminput");
var lysQmspan=document.querySelector(".lys_qmspan");
var lysQmjg=document.querySelector(".lys_qmjg");
var lysQmover=document.querySelector(".lys_qmover");
lysQminput.oninput=function(){
	if (lysQminput.value.length >30){
	lysQminput.value = lysQminput.value.substring(0,30);
	lysQmjg.innerHTML="*已达字数上限";
	var t=setTimeout(function(){
		lysQmjg.innerHTML=""
	},3000)
	
	}
	lysQmspan.innerHTML = lysQminput.value.length;
}
//本地存储.
lysQmover.addEventListener("touchstart",function(){
	if (lysQminput.value.trim()) {
		add(lysQminput.value)
		lysQminput.value="";
	}else{
		lysQmjg.innerHTML="*输入为空";
		var t=setTimeout(function(){
		lysQmjg.innerHTML=""
		},3000)
	}
})
lysQmover.addEventListener("touchend",function(){
     lysQmspan.innerHTML="30"
     // if (lysQminput.value.length<=0) {
     // 	console.log(1)
     // }else{
     location.href="../html/lys_grzx.html";
     // 	console.log(2)
     // }
})
function add(data){
	localStorage.setItem("name",JSON.stringify(data));
}

// 获取存储

