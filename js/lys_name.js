var lysNamewc=document.querySelector(".lys_namewc");
var lysNameinput=document.querySelector(".lys_nameinput");
var lysNamets=document.querySelector(".lys_namets");
// 字数限制
lysNameinput.oninput=function(){
	if (lysNameinput.value.length>8) {
		lysNameinput.value = lysNameinput.value.substring(0,8);
			lysNamets.innerHTML="*字数已达上限";
			var s=setTimeout(function(){
				lysNamets.innerHTML=""
			},3000)
		};
}

//本地存储.
lysNamewc.addEventListener("touchstart",function(){
	if (lysNameinput.value.trim()) {
		add(lysNameinput.value)
		lysNameinput.value="";
		console.log(lysNameinput.value.length)
	
	}else{
		lysNamets.innerHTML="*输入为空";
		var t=setTimeout(function(){
		lysNamets.innerHTML=""
		},3000)
	}
})
lysNamewc.addEventListener("touchend",function(){
     // lysQmspan.innerHTML="30"
     location.href="../html/lys_grzx.html";
})
function add(data){
	localStorage.setItem("text",JSON.stringify(data));
}