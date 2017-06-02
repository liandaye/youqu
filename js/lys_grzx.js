var lysGrli=document.querySelectorAll(".lys_grli");
console.log(lysGrli)
for (var i=0;i<lysGrli.length;i++){
	lysGrli[i].index=i;

	lysGrli[i].addEventListener("touchstart",function(){
		lysGrli[this.index].classList.add("lys_gractive");
	})
    for (var j=0;j<lysGrli.length;j++){
	lysGrli[j].classList.remove("lys_gractive");
	}
}
