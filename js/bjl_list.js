// ---------------------------------------------------------------------
// 设置初始状态JS 三个图片归位
	var images=document.querySelectorAll('.bjl-banner-box .image-box li');
	var imagesbox=$('.bjl-banner-box ul');
	imagesbox.find('li').first().css({'transform':'scale(0.95,0.95) translate3d(0.4rem,0,0)'});
	imagesbox.find('li').first().css({'webkitTransform':'scale(0.95,0.95) translate3d(0.4rem,0,0)'});
	imagesbox.find('li').last().css({'transform':'scale(1.05,1.05) translate3d(-0.4rem,0,0)'});
	imagesbox.find('li').last().css({'webkitTtransform':'scale(1.05,1.05) translate3d(-0.4rem,0,0)'});
// ---------------------------------------------------------------------
// 设置初始状态JS 拖拽事件
	var target = imagesbox.find('li').eq(2)[0];
	var parents=document.querySelector('.bjl-banner-box .image-box ul');
	var dx;
	function targetdrag(target){
		touch.on(target, 'touchstart', function(ev){
			ev.preventDefault();
		});
		touch.on(target, 'drag', function(ev){
			dx = dx || 0;
			var offx = dx + ev.x + "px";
			this.style.webkitTransform = "translate3d(" + offx + ",0,0)";
		});

		touch.on(target, 'dragend', function(){
			this.style.webkitTransform = "translate3d(0,0,0)";
			var midchild=$('.bjl-banner-box .image-box li').eq(0);
			parents.insertBefore(target,midchild[0]);
			for (var i = 0; i < images.length; i++) {
				images[i].style.webkitTransform='translate3d(0,0,0)';
			};
			imagesbox.find('li').first().css({'transform':'scale(0.95,0.95) translate3d(0.4rem,0,0)'});
			imagesbox.find('li').first().css({'webkitTransform':'scale(0.95,0.95) translate3d(0.4rem,0,0)'});
			imagesbox.find('li').eq(1).css({'transform':'scale(1,1) translate3d(0,0,0)'});
			imagesbox.find('li').eq(1).css({'webkitTransform':'scale(1,1) translate3d(0,0,0)'});
			imagesbox.find('li').last().css({'transform':'scale(1.05,1.05) translate3d(-0.4rem,0,0)'});
			imagesbox.find('li').last().css({'webkitTtransform':'scale(1.05,1.05) translate3d(-0.4rem,0,0)'});
			target = imagesbox.find('li').last()[0];
			targetdrag(target);
		});
	}
	targetdrag(target);
	function appendBefore(parent,node){
		var first=firstChild(parent);
		parent.insertBefore(node,first);
	}
// ---------------------------------------------------------------------
