// ----------------------------------------------------
// 轮播图
	var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
// ----------------------------------------------------
// 选择支付
	var selectbtn=document.querySelector('.bjl_select_paybtn');
	var selectoption=document.querySelector('.bjl_select_paybtn ul')
	selectbtn.addEventListener('touchstart',function(){
		// selectoption.style.display='block';
		selectoption.style.height='0.94rem';
	})
// ----------------------------------------------------
// 短信消息
    var dxcxbtn=document.querySelector('.dxcxbtn');
    var yanzhengma=document.querySelector('.yanzhengma');
    dxcxbtn.addEventListener('touchstart',function(){
        yanzhengma.innerHTML="￥5,500.00"
    });
// ----------------------------------------------------
// 切换支付方式
    var qiehuanbtn=document.querySelector('.qiehuan');
    var qiehuanopt=document.querySelector('.qiehuanopt');
    var arr=['指纹支付','密码支付','人脸识别'];
    var num=0;
    qiehuanbtn.addEventListener('touchstart',function(){
        num++
        if(num>=3){
            num=0;   
        } 
        qiehuanopt.innerHTML=arr[num]; 
    });
// ----------------------------------------------------
// 解除绑定
    var bangdingbtn=document.querySelector('.bangding');
    var weibangding=document.querySelector('.weibangding');
    var flag=true;
    bangdingbtn.addEventListener('touchstart',function(){
        if(flag){
            weibangding.innerHTML='未绑定'
            this.style.background="#2BD2FC";
            flag=false;
        }else{
            weibangding.innerHTML='已绑定'
            this.style.background="#4B4B4B";
            flag=true;
        }      
    });
// ----------------------------------------------------
