
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
            transition: 'slideDown'
        })
        return false;
    });
    
    
    $('.b-close').bind('click', function(){
        $('.pop_up').find("label.error").remove();
        $('.pop_up').find('.error').removeClass('error');
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
        },
        
    });
    
    
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


