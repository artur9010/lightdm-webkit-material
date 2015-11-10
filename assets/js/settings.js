var settings = (function ($) {
    var $settings_card = $('.settings-card');
    var $signin_card = $('.signin-card');
    window.login_settings = window.login_settings || {};

    var setup_settings_bind = function () {
        $('.settings, .settings-card .cancel').on(
            'click',
            function (e) {
                e.preventDefault();

                if (!$settings_card.is(':visible')) {
                    show_settings_form();
                } else {
                    hide_settings_form();
                }
            }
        );
    };
    var show_settings_form = function () {
        $settings_card.show();
        $signin_card.hide();
        load_settings_from_localstorage();
    };
    var hide_settings_form = function () {
        $settings_card.hide();
        $signin_card.show();
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
        if(window.login_settings['background']) {
            $('body').css(
                'background-image',
                "url('"+window.login_settings['background']+"')"
            );
        }else{
            $('body').removeAttr('style');
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
                save_settings_to_localstorage($(this));
                hide_settings_form();
            });
        });
    };

    return {
        init: init
    };
} (jQuery));

settings.init();
