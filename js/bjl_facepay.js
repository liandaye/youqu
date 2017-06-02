// ------------------------------------------------------------
// 点击画像跳转成功页面
	var sucessbtn=document.querySelector('.bjl_facepay_info');
	var sucesspage=document.querySelector('.bjl_facepay_sucess');
	sucessbtn.addEventListener('touchstart',function(){
		sucesspage.style.display='block';
		var lingqu=document.querySelector('.bjl_facepay_sucess .lingqubtn a');
		lingqu.addEventListener('touchstart',function(){
			lingqu.innerHTML='领取时间已过';
			lingqu.parentNode.style.background='#58595A';
		});
	});
// ------------------------------------------------------------
