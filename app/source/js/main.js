
$(document).ready(function(){
    
    console.log(1);
    $(".mobile_menu").on("click", function(){
        $(this).children('.navigation_mob').toggleClass("open");
    });
//    $(".mobile_menu").on("click", function(){
//        $('.navigation_mob').toggleClass("open");      
//        return false; 
//    });
    
   
    
  });