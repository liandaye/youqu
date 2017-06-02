// ------------------------------------------------------C
// 导航
	var lis=document.querySelectorAll('.bjl-nav-box li');
	var uls=document.querySelector('.bjl-content-category')
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].addEventListener('touchstart',function(){
			for (var i = 0; i < lis.length; i++) {
				lis[i].classList.remove('active');
			};
			lis[this.index].classList.add('active');
			uls.style.webkitTransform='translate3d('+(-this.index)*33+'%,0,0)';
			uls.style.transform='translate3d('+(-this.index)*33+'%,0,0)';
		})
	};
// ------------------------------------------------------C
