// 选项卡
	var but=document.querySelectorAll(".jl-but");
	var one=document.querySelectorAll(".jl-one");
	for(var i=0;i<but.length;i++){
		but[i].index=i;
		but[i].addEventListener("touchstart",function(){
	        for(var j=0;j<one.length;j++){
	        	one[j].style.display="none";
	        }
	        one[this.index].style.display="block";
		},false)
	}

var jclinput=document.querySelectorAll(".jcl-zfbinput input");console.log(jclinput)
var jclline=document.querySelectorAll('.jcl-zfbline span');
	for(var i=0;i<jclinput.length;i++){
		var t=jclinput[i];
		t.index=i;
		t.onkeyup=function(){
	        var next=this.index+1;
			if(next > jclinput.length -1) return;
	        jclinput[next].focus();
			this.value=this.value(/^[1-9]\d*$/);
            }
		t.addEventListener("focus",function(){
	            for(var j=0;j<jclline.length;j++){
	                jclline[j].style.background="#DCDCDC";
	            }
	            var nexts=this.index;
	                jclline[nexts].style.background="#25B9FF";
	           
        },false)
	}
	
