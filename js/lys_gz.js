var lysFslis=document.querySelectorAll(".lys_fslis");
var lysFsbgbox=document.querySelector(".lys_fsbgbox");
var lyswid=lysFslis[0].offsetWidth;
var lysFsbtinner=document.querySelector(".lys_fsbtinner");
var lysFsbt=document.querySelector(".lys_fsbt");
var lysFssecli=document.querySelectorAll(".lys_fssecli")
console.log(lysFsbgbox)
	for (var i=0;i<lysFslis.length;i++){
		lysFslis[i].index=i;
		// lysFsbt.innerHTML=lysFssecli.length;
		lysFslis[i].addEventListener("touchstart",function(){
		lysFsbtinner.innerHTML=lysFslis[this.index].innerHTML;
		lysFsbgbox.style.transform="translate3d("+this.index*-50+"%,0,0)"
			for(var j=0;j<lysFslis.length;j++){
				lysFslis[j].classList.remove("lys_fsbgcolor")
			}
			lysFslis[this.index].classList.add("lys_fsbgcolor")
		})
	}

// 点击弹窗出现
var lysFssjli=document.querySelectorAll(".lys_fssj>li");

var lysFsid=document.querySelectorAll(".lys_fsid")
var lysaa=[];
var lysFsyiimg=document.querySelectorAll(".lys_fsyiimg ");

var lysFserimg=document.querySelectorAll(".lys_fserimg");
var lysFsmask=document.querySelector(".lys_fsmask");
var lysFsqx=document.querySelector(".lys_fsqx");
var lysFsqd=document.querySelector(".lys_fsqd");
for (var i=0;i<lysFsyiimg.length;i++){
	lysFsyiimg[i].active=i;
	lysFsyiimg[i].addEventListener("touchstart",function(){
		lysFsyiimg[this.active].style.display="none";
		lysFserimg[this.active].style.display="block";
		lysFssjli[this.active].style.background='#80D3FF';
		lysFsmask.style.WebkitTransition="left 1s"
		lysFsmask.style.left=0;
	})
	
	lysFsqd.addEventListener("touchstart",function(){
		lysFsmask.style.left='100%';
		for (var j=0;j<lysFssjli.length;j++){
			lysFssjli[j].style.background='#fff';
		}
	})
	lysFsqx.addEventListener("touchstart",function(){
		lysFsmask.style.left='100%';
		for (var j=0;j<lysFssjli.length;j++){
			lysFssjli[j].style.background='#fff';
		}
	})
	
}
// for (var i=0;i<lysFssjli.length;i++){
// 	lysFssjli[i].index=i;
// 	lysFssjli[i].addEventListener("touchstart",function(){
// 		lysFssjli[this.index].style.background='#80D3FF';
// 	})
// 	// for (var j=0;j<lysFssjli.length;j++){
// 	// 	lysFssjli[j].style.background='#fff';
// 	//  }

// }


for (var i=0;i<lysFserimg.length;i++){
	lysFserimg[i].ops=i;
	lysFserimg[i].addEventListener("touchstart",function(){
		lysFserimg[this.ops].style.display="none";
		lysFsyiimg[this.ops].style.display="block";
	})
}
	
// 粉丝

var lysFsfslist=document.querySelectorAll(".lys_fsfslist>li");
var lysFsAimg=document.querySelectorAll(".lys_fsAimg");
var lysFsBimg=document.querySelectorAll(".lys_fsBimg");
console.log(lysFsAimg)
for (var i=0;i<lysFsBimg.length;i++){
	lysFsBimg[i].xian=i;
	lysFsBimg[i].addEventListener("touchstart",function(){
		console.log(this.xian)
		lysFsBimg[this.xian].style.display="none";
		lysFsAimg[this.xian].style.display="block";
	})
}




