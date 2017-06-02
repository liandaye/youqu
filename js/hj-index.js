$(function(){

    var splash = new Swiper('.splash', {
        effect : 'fade',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
    })

    var hmfflag=true;
    var hjGlobal;


    var splash = document.querySelector('.splash')||null;
    if(splash){
        function resize(){
            var hmfwidth=document.documentElement.clientWidth;
            var hmfheight=document.documentElement.clientHeight;
            splash.style.height=hmfheight+"px";
            splash.style.width=hmfwidth+"px";
        }
        resize();
        window.addEventListener('resize',resize);
    	hjGlobal = false;
    	var login=document.querySelector('.login');
	    var skip=$(".skip");

	    skip.on("touchstart",function () {
	       location.href="html/hmf-denl.html";
	        splash.style.display="none"
	        $("html")[0].style.overflow="auto";
	    })
        login.addEventListener("touchstart",function () {
            splash.style.display="none"
            $("html")[0].style.overflow="auto";
        })
	    if(localStorage.getItem('fgfgfg' +
				'')){
	    	console.log(1);
	        splash.style.display="none";
	        $("html")[0].style.overflow="auto";
	    }else{
	    	console.log(2);
	        localStorage.setItem('fgfgfg','diyici');
	         $("html")[0].style.overflow="hidden";
	         splash.style.display="block";
	    }
    }else{
    	hjGlobal = true;
    	document.documentElement.style.overflow = 'auto';
    }
   

  
var inss=document.querySelector(".hj-search>input");
    var insf=document.querySelector(".hj-sss>input");
   if(inss){
       inss.onfocus=function () {
           location.href="wxl-index.html"
       }
   }else if(insf){
       insf.onfocus=function () {
           location.href="html/wxl-index.html"
       }
   }










// 首页
	var leftTick = $('.hj-leftTicket');
	var rightTick  = $('.hj-rightTicket');
function cardRotate(nowCard){
	var flag = 1;
	var cardObj = $('a',nowCard);
	if (nowCard==rightTick) {
		flag=-1;
	};
	nowCard.on('touchstart',function(e){
		var sy = e.targetTouches[0].clientY;
		var sx = e.targetTouches[0].clientX;
		nowCard.on('touchmove',function(e){
			e.preventDefault();
			var my = e.targetTouches[0].clientY;
			var mx = e.targetTouches[0].clientX;
			var b = my-sy;
			var a = mx;
			var c = Math.sqrt(Math.pow(b,2)+Math.pow(a,2));
			var radina = Math.acos(b/c);
			var angle = 90-Math.floor(180/(Math.PI/radina));
			cardObj.css({
				transition:'all 0s'
			})
			$(cardObj[0]).css({
				transform:"rotateZ("+(flag*angle)+"deg)"
			})
			$(cardObj[1]).css({
				transform:"rotateZ("+(flag*angle*0.6)+"deg)"
			})
			$(cardObj[2]).css({
				transform:"rotateZ("+(flag*angle*0.3)+"deg)"
			})
		});
		nowCard.on('touchend',function(e){
			cardObj.css({
				transition:'all 0.5s'
			})
			$(cardObj[0]).css({
				transform:"rotateZ("+0+"deg)"
			})
			$(cardObj[1]).css({
				transform:"rotateZ("+(-3)+"deg)"
			})
			$(cardObj[2]).css({
				transform:"rotateZ("+(-6)+"deg)"
			})
		})
	})
}

cardRotate(rightTick);
cardRotate(leftTick);

// *********************************************************************

	// 底部Tab栏选项卡
	var hjPageContain = $('.hj-pageContain');
	//外部大容器
	var hjPageContainSon = hjPageContain.children();
	var hjViews = $('.hj-views');
	//栏目div

	var hjI;
	var hjHomePage = $('.hj-homePage');
	var Hcx = hjHomePage.width();
	window.addEventListener('resize',function(){
		Hcx = hjHomePage.width();
		hjPageContain.css({
			transform:"translateX("+hjI*-Hcx+"px)"
		})
	})
	var hjFootItems = $('.hj-footItems li');
	hjFootItems.on('touchstart',function(){
		var index = $(this).index();
		var nowPageHeight = hjPageContainSon[index].offsetHeight;
		hjViews.css({
			height:nowPageHeight+'px'
		});
		hjFootItems.removeClass('active');
		$(this).addClass('active');
		hjI = $(this).index();
		hjNum = hjI;
		hjPageContain.css({
			transform:"translateX("+hjI*-Hcx+"px)"
		})
	});

	// 左右滑动更换栏目
	// var hjNum = 0;
	// hjPageContain.on('touchstart',function(e){
	// 	var targetS = e.targetTouches[0];
	// 	var cx = targetS.clientX;
	// 	var mx;
	// 	hjPageContain.on('touchmove',function(e){
	// 		targetM = e.targetTouches[0];
	// 		mx = targetM.clientX;
	// 		var runX = (-hjNum*Hcx)+(mx-cx);
	// 		hjPageContain.css({
	// 			transition:'all 0s',
	// 			transform:"translateX("+runX+"px)"
	// 		});
	// 	});
	// 	hjPageContain.on('touchend',function(e){

				
	// 		if(mx-cx<0){
	// 			if(Math.abs(mx-cx)>100){
	// 				hjNum++;
	// 				if(hjNum>3){
	// 					hjNum=3;
	// 				}
	// 				hjPageContain.css({
	// 					transition:'all 1s',
	// 					transform:"translateX("+Hcx*-hjNum+"px)"
	// 				})
	// 			}else{
	// 				hjPageContain.css({
	// 					transition:'all 1s',
	// 					transform:"translateX("+Hcx*-hjNum+"px)"
	// 				})
	// 			}
	// 		}else if(mx-cx>0){
	// 			if(Math.abs(mx-cx)>100){
	// 				hjNum--;
	// 				if(hjNum<0){
	// 					hjNum=0;
	// 				}
	// 				hjPageContain.css({
	// 					transition:'all 1s',
	// 					transform:"translateX("+Hcx*-hjNum+"px)"
	// 				})
	// 			}else{
	// 				hjPageContain.css({
	// 					transition:'all 1s',
	// 					transform:"translateX("+Hcx*-hjNum+"px)"
	// 				})
	// 			}
	// 		}
	// 		hjI = hjNum;
	// 		hjFootItems.removeClass('active');
	// 		hjFootItems[hjI].classList.add('active');
	// 		var nowPageHeight = hjPageContainSon[hjI].offsetHeight;
	// 			hjViews.css({
	// 				height:nowPageHeight+'px'
	// 			});
	// 		hjPageContain.off('touchmove');
	// 		hjPageContain.off('touchend');
	// 	})
	// })
// 栏目滑动结束


// ******************************************
// 热门游记滑动
var hjShowItems = $('.hj-showItems');
// 视口容器
var hjSshowItemsSild = $('.hj-showItemsSild');
// 滑动容器
var hjSshowItemsCon = $('li',hjSshowItemsSild);
var hjSshowItemsConNum = hjSshowItemsCon.length;
hjSshowItemsSild.css('width',(hjSshowItemsConNum/1.8)*100+'%')
var itemsConW = hjSshowItemsCon.width();
hjSshowItemsSild.css({
	marginLeft:-itemsConW/1.7+'px'
})
window.addEventListener('resize',function(){
	itemsConW = hjSshowItemsCon.width();
	hjSshowItemsSild.css({
		marginLeft:-itemsConW/1.7+'px'
	})
})
var hjNumT = 0;
hjSshowItemsSild.on('touchstart',function(e){
	var targetS = e.targetTouches[0];
	var cx = targetS.clientX;
	var mx;
	hjSshowItemsSild.on('touchmove',function(e){
		targetM = e.targetTouches[0];
		mx = targetM.clientX;
		var runX = (-hjNumT*Hcx/1.84)+(mx-cx);
		hjSshowItemsSild.css({
			transition:'all 0s',
			transform:"translateX("+runX+"px)"
		});
	});
	hjSshowItemsSild.on('touchend',function(e){				
			if(mx-cx<0){
				if(Math.abs(mx-cx)>100){
					hjNumT++;
					if(hjNumT>hjSshowItemsConNum-2){
						hjNumT=hjSshowItemsConNum-2;
					}
					hjSshowItemsSild.css({
						transition:'all 1s',
						transform:"translateX("+Hcx/1.84*-hjNumT+"px)"
					})
				}else{
					hjSshowItemsSild.css({
						transition:'all 1s',
						transform:"translateX("+Hcx/1.84*-hjNumT+"px)"
					})
				}
			}else if(mx-cx>0){
				if(Math.abs(mx-cx)>100){
					hjNumT--;
					if(hjNumT<0){
						hjNumT=0;
					}
					hjSshowItemsSild.css({
						transition:'all 1s',
						transform:"translateX("+Hcx/1.84*-hjNumT+"px)"
					})
				}else{
					hjSshowItemsSild.css({
						transition:'all 1s',
						transform:"translateX("+Hcx/1.84*-hjNumT+"px)"
					})
				}
			}
			
			$(hjSshowItemsCon).css({
				transform:'scale(1,1)'
			})
			$(hjSshowItemsCon[hjNumT+1]).css({
				transform:'scale(1.1,1.1)'
			})
			hjSshowItemsSild.off('touchmove');
			hjSshowItemsSild.off('touchend');
		})
	
})












// ******************************************
// 转发页面开始

	if(hjGlobal){
		var hjShareTab = $('.hj-shareTab');
		var hjShareTabA = $('a',hjShareTab);
		// 分享转发Tab栏下的a标签
		var hjShareMask = $('.hj-shareMask');
		// 遮罩
		$(hjShareTabA[2]).on('touchstart',function(e){
			console.log(1);
			hjShareMask.show();
			hjShareMask.css({
				opacity:0
			})
			setTimeout(function(){
					hjShareMask.css({
						opacity:1
					})
					hjShareMaskeCon.css({
						bottom:0+'rem'
					})
				},0)		
		})
		var hjBH = document.documentElement.offsetHeight;
		console.log(hjBH)
		window.addEventListener('resize',function(){
			hjBH = document.documentElement.offsetHeight;
			hjShareMask.css({
				height:hjBH+'px'
			})
		})
		// 获取页面高度
		hjShareMask.css({
			height:hjBH+'px'
		})
		var hjShareMaskeCon = $('.hj-shareMaskeCon');
		// 分享栏整体
		var hjshareBack = $('.hj-shareMaskH a');
		hjshareBack.on('touchstart',function(e){
			
			hjShareMask.css({
				opacity:0
			})
			hjShareMaskeCon.css({
				bottom:-3.5+'rem'
			})
			setTimeout(function(){
				hjShareMask.hide();
			},1000)
		})
	}else{

	}
	
	// 触摸遮罩，遮罩消失


})