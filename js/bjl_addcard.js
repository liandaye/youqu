var btn=document.querySelector('.bjl_addcard_add .addbtn');
var btnbox=document.querySelector('.bjl_addcard_add');
var flag=true;
btn.addEventListener('touchstart',function(){
	if(flag){
		this.style.background='url(../image/bjl_67.png)no-repeat center top/contain';
		btnbox.style.height='2.9rem';
		this.innerHTML='';
		flag=false;
	}else{
		this.style.background='#CDCDCD';
		btnbox.style.height='1.12rem';
		this.innerHTML='+';
		flag=true;
	}
});
var btnimg=document.querySelectorAll(".inputs_img");
var changeimg=document.querySelectorAll('.change_img');
for(var i=0;i<btnimg.length;i++){
	btnimg[i].index=i;
	btnimg[i].addEventListener("focus",function(){
		changeimg[this.index].style.display='none';
	});
}
var changeteshu=document.querySelector('.changeimg_teshu');
var changeteshuimg=document.querySelector('.changeimg_teshu img');
var submitbtn=document.querySelector('.bjl_addcard_submit');
changeteshu.addEventListener("touchstart",function(){
	changeteshuimg.src='../image/bjl_48.png';
	submitbtn.style.background='#FFB21E';
});