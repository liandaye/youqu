
// 底部导航切换
var list = $(".gh-lists");
$(list).each(function(){
	$(this).on("touchstart",function(){
  		$(list).each(function(){
  			$(list).removeClass('active')
  		})
  		$(this).addClass('active');
	})	
})