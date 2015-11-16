var login = (function (lightdm, $) {
    var selected_user = null;
    var password = null
    var $user = $('#user');
    var $pass = $('#pass');
    var $session = $('#session');
    var $lang = $("#language");
    var $keyboard_layout = $("#keyboard_layout");

    // private functions
    var setup_users_list = function () {
        var $list = $user;
        var to_append = null;
        $.each(lightdm.users, function (i) {
            $list.append(
                '<option value="' +
                lightdm.users[i].name +
                '">' +
                lightdm.users[i].display_name +
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
        
        $pass.val(""); //clear the password input
        $pass.trigger('focus'); //focus the password input
    };
    
    var setup_sessions_list = function() {
        var $list = $session;
        var to_append = null;
        
        $.each(lightdm.sessions, function(i) {
            var session = lightdm.sessions[i];
            $list.append(
                '<option value="' +
                session.key +
                '">' +
                session.name +
                '</option>'
            );
        });
    };
    
    var setup_language_list = function(){
        $.each(lightdm.languages, function(i) {
            var lang = lightdm.languages[i];
            $lang.append('<option value="' + lang.code + '">' + lang.name + '</option>');
        });
    };
    
    var setup_layout_list = function(){
        var $list = $keyboard_layout;
        
        $.each(lightdm.layouts, function(i) {
            var lang = lightdm.layouts[i];
            $list.append('<option value="' + lang.name + '">' + lang.name + '</option>');
        });
    };
    
    var find_and_display_user_picture = function(idx){
        $('.profile-img').attr("src", lightdm.users[idx].image);
        
        $('.profile-img').error(function(){
            $('.profile-img').attr("src", "assets/ui/avatar_2x.png");
        })
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
                $session.val()
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
            // Setup select lists
            setup_users_list();
            select_user_from_list();
            setup_sessions_list();
            setup_language_list();
            setup_layout_list();
            
            // Hide usunsed/blocked/disabled options
            if(!lightdm.can_restart){
                $("#action-reboot").hide();
            }
            if(!lightdm.can_shutdown){
                $("#action-shutdown").hide();
            }
            if(!lightdm.can_hibernate){
                $("#action-hibernate").hide();
            }
            if(!lightdm.can_suspend){
                $("#action-suspend").hide();
            }

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
