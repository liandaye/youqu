var lysScxia=document.querySelectorAll(".lys_scxia");
var lysScmask=document.querySelector(".lys_scmask");
var lysScmaskBox=document.querySelector(".lys_scmask_box");
var lysScE=document.querySelector(".lys_scE");
console.log(lysScE.backgroundColor)
   var lys_aa = new Swiper('.lys_scmask_box', {
        pagination: '.lys_swiper_dian',
        paginationClickable: true
    });
for (var i=0;i<lysScxia.length;i++){
	lysScxia[i].addEventListener("touchend",function(e){
		lysScmask.style.transition="left 1s"
		lysScmaskBox.style.transition="left 1s"
		lysScmask.style.left="0px";
		lysScmaskBox.style.left="0px";
		// lysScmask.style.display="block";
	})
}

lysScmask.addEventListener("touchend",function(e){
	lysScmask.style.left="-100%";
	lysScmaskBox.style.left="-100%"
})


// doubletap