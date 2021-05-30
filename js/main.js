 //var myObj = document.getElementById("#myfile");

// if(myObj.isEmpty()) {
//   alert("no Infrotmation to share");
// } 
//   else {
//     alert("no  to share")
//   }

  $(document).ready(function(){
     
    
 $(".fa-comment-alt").on("click",function(){
        // $(".comAria").slideToggle(500);
     })
    $(".mansor").on("click",function(){

     

      if($(".post").val() == ""){
        alert("no commint to share")

      }else{

        

 $(".my-comment").fadeIn(500).css("display","flex");
 
        $(".appendd").prepend('<div class="my-comment row border bg-light h-50">'+
              '<div class="col-sm ">'+
                  '<div class="row mt-3">'+
              '<img src="../imag/prof.jpg" class="my-auto border img-block img img-responsiv rounded-circle ml-1" width="50" height="50">'+
              
              '<div class="col-sm">'+
                  '<p>islam raslan</p>'+
                  '<p class="text-dark"> '+ $(".post").val() +' </p>'+
              '</div>'+
          '</div>'+
      '</div>'+
  '</div>');
      }
      $(".post").val("");
    });





    $(".share").on("click",function(){

      var x = $(".my-caption-of-post").val();

     if(x == ""){
       alert("no Infrotmation to share");

      
     }
     else{

        $(".ariaofpost").prepend('<div class="card promoting-card cardMyPost" >'+

        '<div class="card-body d-flex flex-row">'+
      
          '<img src="../imag/prof.jpg" class="rounded-circle mr-3" height="50px" width="50px" alt="avatar">'+
      
          '<div>'+
      
            '<h4 class="card-title font-weight-bold mb-2">New spicy meals</h4>'+
            '<p class="card-text"><i class="far fa-clock pr-2"></i>07/7/2020</p>'+
      
          '</div>'+
      
        '</div>'+
      
        '<div class="view overlay imgofpost">'+
    
            '<a href="#!">'+
            '<div class="mask rgba-white-slight">' +
            
            '</div>'+
          '</a>'+
        '</div>'+
      
        '<div class="card-body d-flex  flex-column justify-content-center">'+

          '<div class="collapse-content">'+
      
            '<p class="card-text caption-of-post  shadow-lg" id="collapseContent"> '+ x +'</p>'+
            '<div class="explor  red-text p-1 my-1 mr-0 mml-1 " >'+
                '<button class="btn btn-flat"> <i class="fa-2x mx-3 far fa-heart"></i></button>'+
                '<button class="btn  btn-flat"> <i class="fa-2x mx-3 far fa-comment-alt"></i></button>'+
                '<button class="btn btn-flat"> <i class="fa-2x mx-3 fas fa-share-alt-square"></i> </button>'+

            '</div>'+
            '<div class="comAria card-footer text-muted">'+
                '<textarea class="col-sm" name="" id="post" cols="30" rows="5" style="resize: none;"></textarea>'+
                '<button class="mansor btn btn-primary">comment</button>'+ 
    
             '</div>'+
    
                '<div class="appendd  bg-dark container " style="height: 200px;">'+
                     '<p class="w-100  ">'+ 

                        '<div class="my-comment row border bg-light">'+
                            '<div class="col-sm ">'+
                                '<div class="row ">'+
                
                            '<img src="../imag/prof.jpg" class="my-auto border img-block img img-responsiv rounded-circle ml-1" width="50" height="50">'+
                            
                            '<div class="col-sm">'+
                                '<p>islam raslan</p>'+
                                '<p class=""> </p>'+
                            '</div>'+
                            '</div>'+
                            '</div>'+
                            '</div>'+
                     '</p>'+
                '</div>'+        
        '</div>'+
    '</div>'+
    '</div>');

        //$(".caption-of-post").prepend(x + '</br>');
         
         
        //var y = $("#myfile").val();
        // console.log('../' + y)
        //  $(".imgofpost").prepend('<img class=" card-img-top rounded-0" src="'+ '../' + y + '" alt="Card image cap" height="300">');

     }
     $(".my-caption-of-post").val("");
     
    });

    
   
    


        // $(".allComment").append("<div class='col-5'>" + InputDeviceInfo.val() + "</div>" + "<br/>")

    
    
    $(".sit ").on("click",function(){
     $(".mysitng ").slideToggle(500)

    })

    $(" .game").on("click",function(){
     $(" .mygame").slideToggle(500)

    })

    $(" .live").on("click",function(){
     $(" .mylive").slideToggle(500)

    })
   
   
  






  



  //  $(window).on("resize",function(){
  //      $(".rightside").css({"width":$(document).width(),
  //                 "height":$(document).height()});
  



  //  });
  //  $(".rightside").css({"width":$(document).width(),
  //  "height":$(document).height()});

   
})
  

