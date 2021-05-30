

$(document).ready(function(){
    $(".posts").css("display","flex")
    $(".mypage1").on("click",function(){
     

        $(".posts").fadeIn(1000);
        $(".posts").siblings().fadeOut();

    })
    $(".mypage2").on("click",function(){
        

        $(".saved").fadeIn(1000).css("display","flex");
        $(".saved").siblings().fadeOut();

    })
    $(".mypage3").on("click",function(){
         

        $(".taged").fadeIn(1000).css("display","flex");
        $(".taged").siblings().fadeOut();

    });
 
})

  