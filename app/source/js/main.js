
$(document).ready(function(){
    
    // nav
    
    $(".mobile_menu").on("click", function(){
        $(this).children('.navigation_mob').toggleClass("open");
    });

    // popup
    
    $('.new_project').on('click', function(){
        $('.pop_up').bPopup({
            speed:500,
            opasity:.3,
            positionStyle: 'fixed',
            transition: 'slideDown'
        })
        return false;
    });
    
    $('.b-closse').on('click', function(){
        var bPopup = $('.pop_up').bPopup();
        bPopup.close();
        reset_validate();
    });
    
    //validate
    
    $('form').validate({
        rules:{
            name_project_form:'required',
            image_project_form:'required',
            url_project_form:'required',
            message_project:'required',
            username:'required',
            mail:'required',
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
    
//    (function err_left(){
//        $('.form_float_block').find('.error').addClass('error_left');
//        console.log(1);
//    });
    
    function reset_validate(){
        $('.pop_up').find("label.error").remove();
        $('.pop_up').find('.error').removeClass('error');
        
    };
    
    
    
    

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


