
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
            positionStyle: 'absolute',
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
    
    $('form').validate({
        rules:{
            name_project_form:'required',
            image_project_form:'required',
            url_project_form:{
                required: true,
                url: true
            },
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
        },
        errorPlacement: function(error, element) {
            error.appendTo( element.closest(".input_container") );
        }        
    });
    
    // image_project_form

    $('.fileform .upload').on('change', function() {    
        if ($(this).val()) {
            $(this).siblings('.fileformlabel').text($(this).val());    
        } else {
            $(this).siblings('.fileformlabel').text('Загрузите изображение');    
        }
    });
    
    //ie placeholder
    
    $('input, textarea').placeholder();
});