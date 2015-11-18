var settings = {};
load_settings();

function save_settings(){
    localStorage.setItem("settings.language", $("#language").val());
    localStorage.setItem("settings.layout", $("#layout").val());
    localStorage.setItem("settings.background", $("#background").val());
    load_settings();
}

function load_settings(){
    set_default_settings();
    settings['language'] = localStorage.getItem("settings.language");
    settings['layout'] = localStorage.getItem("settings.layout");
    settings['background'] = localStorage.getItem("settings.background");
    set_default_settings();
    
    //Update background
    $("body").css("background-image", "url(\"assets/ui/background-" + settings['background'] + ".jpg\")");
}

function set_default_settings(){
    if(localStorage.getItem("settings.language") == null || localStorage.getItem("settings.language") == ""){
        localStorage.setItem("settings.language", $("#language").val());
    }
    if(localStorage.getItem("settings.layout") == null || localStorage.getItem("settings.layout") == ""){
        localStorage.setItem("settings.layout", "en");
    }
    if(localStorage.getItem("settings.background") == null){
        localStorage.setItem("settings.background", "blue");
    }
}

function settings_fill_inputs(){
    $("#language").val(settings['language']);
    $("#layout").val(settings['layout']);
    $("#background").val(settings['background']);
}

/*
var settings = (function ($) {
    var $settings_card = $('#settings');
    var $signin_card = $('#login');
    var animation_time = 500; //in miliseconds
    window.login_settings = window.login_settings || {};

    var setup_settings_bind = function () {
        $('#action-settings, #settings .cancel').on(
            'click',
            function (e) {
                e.preventDefault();

                if($settings_card.is(':hidden')){
                    show_settings_form();
                }else{
                    hide_settings_form();
                }
            }
        );
    };
    var show_settings_form = function(){
        $signin_card.fadeOut(animation_time, function(){
            $settings_card.fadeIn(animation_time);
            load_settings_from_localstorage();
        });
    };
    
    var hide_settings_form = function(){
        $settings_card.fadeOut(animation_time, function(){
            $signin_card.fadeIn(animation_time);
        });
    };
    
    var load_settings_from_localstorage = function () {
        var formdata = localStorage.getItem('login_settings');
            formdata = JSON.parse(formdata);

        if(formdata) {
            $.each(formdata, function(index, data) {
                console.log(data.name, data.value);
                $('#'+data.name).val(data.value);
            });
        }

        assign_stored_settings();
        check_stored_settings();
    };
    var save_settings_to_localstorage = function ($form) {
        var formdata = $form.serializeArray();
            formdata = JSON.stringify(formdata);

        localStorage.setItem('login_settings', formdata);

        assign_stored_settings();
        check_stored_settings();
    };
    
    var assign_stored_settings = function () {
        var stored_setings = JSON.parse(
            localStorage.getItem('login_settings')
        );
        if(stored_setings) {
            $.each(stored_setings, function(index, data) {
                window.login_settings[data.name] = data.value;
            });
        }
    };
    
    var check_stored_settings = function () {

        if (window.login_settings['show_photo'] == 0) {
            $('.profile-img').hide();
        } else {
            $('.profile-img').show();
        }
    };

    // exposed outside of closure
    var init = function () {
        $(function () {
            setup_settings_bind();
            assign_stored_settings();
            check_stored_settings();

            $settings_card.find('form').on('submit', function(e) {
                e.preventDefault();
                save_settings_to_localstorage($settings_card);
                hide_settings_form();
            });
        });
    };

    return {
        init: init
    };
} (jQuery));

settings.init();
*/