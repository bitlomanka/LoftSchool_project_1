
$(document).ready(function(){
    
    // nav
    
    $(".mobile_menu").on("click", function(){
        $(this).children('.navigation_mob').toggleClass("open");
    });

    // popup
    
    $('.new_project').on('click', function(){        
        $('.pop_up').bPopup({
            speed:500,
            opacity:0.3,
            positionStyle: 'fixed',
            transition: 'slideDown',
            onClose:function(){                
                $('.pop_up').find("label.error").remove();
                $('.pop_up').find('.error').removeClass('error');
            }
        })
    });
    
    
    $('.clean').on('click', function(){ 
        $('.form_of_communication ').find("label.error").remove();
        $('.form_of_communication ').find('.error').removeClass('error');
        
    });

    
    (function(){
        $('.upload').parent('.fileform').addClass('error')
    })
    
    //validate
    
    $('form').validate({
        rules:{
            name_project_form:'required',
            image_project_form:'required',
            url_project_form:'required',
            message_project:'required',
            username:'required',
            mail:{
                required:true,
                minlength:5,
                email:true
            },
            message:'required',
            captcha:'required'
        },messages:{
            name_project_form:'введите название',
            image_project_form:'изображение',
            url_project_form:'ссылка на проект',
            message_project:'описание проекта',
            username:'введите имя',
            mail:'введите email',
            message:'ваш вопрос',
            captcha:'код капчи'
        }
        
    });
    
    
    

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


