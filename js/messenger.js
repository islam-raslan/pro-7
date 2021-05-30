
$(document).ready(function(){

    //for height if bodymesseg
     $(window).on("resize",function(){
        $(".messeg-aria").css(
                    "height",$(document).height());

     });
     $(".messeg-aria").css(
     "height",$(document).height());


     /////////////////////////////////

     $("a").on("click",function(){

          $(".messeg-body").append('div')
     })


     /////////////////////////////////////
     $(".send-messeg").click(function(){
 var d = new Date();
          var chattTxt = $(".my-send").val(); 
          if(chattTxt == ("")){
               console.log("nomesseg")

          }else{ 
               $(".chat").append( '<div class="my-messeg d-flex flex-row justify-content-start align-items-center w-100" style="height: 100px;">'+
          '<div class=" d-flex flex-column justify-content-start align-items-center h-100">'+
           '<img src="../imag/islam.jpg" class="mr-4 img-block img-responsiv rounded-circle" width="50" height="50">'+
          '</div>'+
          '<div class=""><p class="bg-light  px-1 h5 rounded"> '+chattTxt+'</p>'+
               '<p class="mb-2 text-muted">'+d+'</p>'+
       '</div>'+
       '</div>'+
       '<div class="w-100"></div>');
          
         };
         
     });
        $(".my-send").val(""); 
     
})