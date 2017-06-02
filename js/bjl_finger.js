// -------------------------------------------------
// 导航
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
// -------------------------------------------------
// 点击画像跳转成功页面
    var sucessbtn=document.querySelector('.bjl_finger_info .images');
    var sucesspage=document.querySelector('.bjl_facepay_sucess');
    sucessbtn.addEventListener('touchstart',function(){
        sucesspage.style.display='block';
        var lingqu=document.querySelector('.bjl_facepay_sucess .lingqubtn a');
        lingqu.addEventListener('touchstart',function(){
            lingqu.innerHTML='领取时间已过';
            lingqu.parentNode.style.background='#58595A';
        });
    });
// -------------------------------------------------
// 成功页面跳转
    var lingqu=document.querySelector('.bjl_facepay_sucess .lingqubtn a');
    lingqu.addEventListener('touchstart',function(){
        lingqu.innerHTML='领取时间已过';
        lingqu.parentNode.style.background='#58595A';
    });
// ------------------------------------------------------------