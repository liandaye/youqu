// ------------------------------------------------------------
// 密码输入完成跳转成功页面
	var inputs=document.querySelectorAll('.bjl_password_info .password-box .inputs')
	var sucesspage=document.querySelector('.bjl_facepay_sucess');
	inputs[0].focus();
	// var num=0;
	var reg=/\d/;
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].index=i;
		inputs[i].addEventListener('keyup',function(e){
			var key=e.keyCode;
			if (key==8) {
				if(this.index<1){
					return;
				}
				inputs[this.index-1].focus();
			};
			if(reg.test(inputs[this.index].value)){
				if(this.index+1==6){
					sucesspage.style.display='block';
					return;
				}
				
				inputs[this.index+1].focus();
			}
		})
	};
// ------------------------------------------------------------
// 成功页面跳转
	var lingqu=document.querySelector('.bjl_facepay_sucess .lingqubtn a');
	lingqu.addEventListener('touchstart',function(){
		lingqu.innerHTML='领取时间已过';
		lingqu.parentNode.style.background='#58595A';
	});
// ------------------------------------------------------------
