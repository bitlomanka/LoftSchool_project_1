
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

// image_project_form

function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }
    var filename = str.slice(i);
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}
