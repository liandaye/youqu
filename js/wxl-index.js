$(function () {
    var wxlInput=$(".wxl-center-input");
    var wxlSou=$(".wxl-right-a");
    var wxlZhe=$(".wxl-zhe");
    var flag=true;
    wxlInput.click(function () {
        $(".wxl-wei").css({"display":"none"});
        $(".wxl-lines").css({"display":"block"});
        $(".wxl-lishi").css({"display":"block"});
        $(".wxl-re").css({"marginTop":"0.4rem"});
        localStorage.setItem('area',"太原");
        var uv=localStorage.getItem('area');
        var wxlYesP=$("<li class='wxl-yes-p'><a href='wxl-ding.html'>" +
            "<i class='iconfont'>&#xe643;</i>" +
            "<span class='wxl-res-span'>"+uv+"</span>" +
            "</a>" +
            "</li>");
        if(flag){
            $(".wxl-yes-ul").append(wxlYesP);
            flag=false;
        }
        wxlZhe.css({"display":"block"});
    });
    wxlZhe.click(function () {
        wxlZhe.css({"display":"none"});
        var area=localStorage.getItem('area');
        $(".wxl-re").css({"marginTop":"0"});
        if(area==wxlInput[0].value){
            window.location.href="wxl-ding.html";
        }else{
            window.location.href="wxl-index.html";
        }
    });
    wxlSou.click(function () {
      wxlZhe.css({"display":"none"});
        $(".wxl-re").css({"marginTop":"0"});
        var area=localStorage.getItem('area');
        if(area==wxlInput[0].value){
            wxlInput[0].value="";
            window.location.href="wxl-ding.html";
        }else{
            wxlInput[0].value="";
            $(".wxl-wei").css({"display":"block"});
            $(".wxl-lines").css({"display":"none"});
            $(".wxl-lishi").css({"display":"none"});
        }
    })

//    删除记录
    var wxlSpan=$(".wxl-res-span");
    var wxlBlue=$(".wxl-res-blue");
    var wxlLi=$(".wxl-yes-p");
    var yes=$(".wxl-yes-on");
    var no=$(".wxl-no-on");
    wxlBlue.click(function (){
          wxlZhe.css({"display":"block"});
        $(".wxl-kuang").css({"display":"block"});
        wxlLi.remove();
        localStorage.setItem('area',"");
        yes.click(function () {
            localStorage.removeItem('area');
            wxlZhe.css({"display":"none"});
            $(".wxl-kuang").css({"display":"none"});
            $(".wxl-yes-p").remove();
        })
    })
});
