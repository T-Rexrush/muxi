$(function(){
    $(".navbar-default .nav a").click(function (){
        $(this).addClass("selected").parents().siblings().children().removeClass("selected");
    });
    var flag=1;
    $(".navbar-toggle").click(function(){
        if(flag==1){
             $(".down-up").animate({"margin-top":370});
             flag=0;
        }
        else{
            $(".down-up").animate({"margin-top":0});
            flag=1;
        }
       
    });
});