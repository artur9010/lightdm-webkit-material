var login = (function (lightdm, $) {
    var selected_user = null;
    var password = null
    var $user = $('#user');
    var $pass = $('#pass');

    // private functions
    var setup_users_list = function () {
        var $list = $user;
        var to_append = null;
        $.each(lightdm.users, function (i) {
            var username = lightdm.users[i].name;
            var dispname = lightdm.users[i].display_name;
            $list.append(
                '<option value="' +
                username +
                '">' +
                dispname +
                '</option>'
            );
        });
    };
    var select_user_from_list = function (idx) {
        var idx = idx || 0;

        find_and_display_user_picture(idx);

        if(lightdm._username){
            lightdm.cancel_authentication();
        }

        selected_user = lightdm.users[idx].name;
        if(selected_user !== null) {
            window.start_authentication(selected_user);
        }

        $pass.trigger('focus');
    };
    var find_and_display_user_picture = function (idx) {
        $('.profile-img').attr(
            'src',
            lightdm.users[idx].image
        );
    };

    // Functions that lightdm needs
    window.start_authentication = function (username) {
        lightdm.cancel_timed_login();
        lightdm.start_authentication(username);
    };
    window.provide_secret = function () {
        password = $pass.val() || null;

        if(password !== null) {
            lightdm.provide_secret(password);
        }
    };
    window.authentication_complete = function () {
        if (lightdm.is_authenticated) {
            show_prompt('Logged in');
            lightdm.login(
                lightdm.authentication_user,
                lightdm.default_session
            );
        }
    };
    // These can be used for user feedback
    window.show_error = function (e) {
        console.log('Error: ' + e);

    };
    window.show_prompt = function (e) {
        console.log('Prompt: ' + e);
    };

    // exposed outside of the closure
    var init = function () {
        $(function () {
            setup_users_list();
            select_user_from_list();

            $user.on('change', function (e) {
                e.preventDefault();
                var idx = e.currentTarget.selectedIndex;
                select_user_from_list(idx);
            });

            $('form').on('submit', function (e) {
                e.preventDefault();
                window.provide_secret();
            });
        });
    };

    return {
        init: init
    };
} (lightdm, jQuery));

login.init();
