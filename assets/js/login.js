var login = (function (lightdm, $) {
    var selected_user = null;
    var password = null;
    var $user = $('#user');
    var $session = $('#session');
    var $pass = $('#pass');
    var $lang = $("#language");
    var $layout = $("#layout");
    var inSubmit = false;

    // private functions
    var setup_users_list = function () {
        $.each(lightdm.users, function (i, user) {
            $user.append('<option value="' + user.name + '">' + user.display_name + '</option>');
        });
    };
    var select_user_from_list = function (idx) {
        var idx = idx || 0;

        find_and_display_user_picture(idx);

	lightdm.cancel_authentication();

        selected_user = lightdm.users[idx].name;
        if(selected_user !== null) {
	   
            window.start_authentication(selected_user);
            
            if(lightdm.users[idx].logged_in){
                $session.hide();
            }else{
                $session.show();
            }
            
            //Set language and layout for user
            lightdm.users[idx].language = settings['language'];
            lightdm.users[idx].layout = settings['layout'];
        }
    };
    
    var setup_sessions_list = function() {
        $.each(lightdm.sessions, function(i, session) {
            $session.append('<option value="' + session.key + '">' + session.name + '</option>');
        });
    };
    
    var setup_language_list = function(){
        $.each(lightdm.languages, function(i, lang) {
            $lang.append('<option value="' + lang.code + '">' + lang.name + '</option>');
        });
    };
    
    var setup_layout_list = function(){
        $.each(lightdm.layouts, function(i, layout) {
            $layout.append('<option value="' + layout.name + '">' + layout.name + '</option>');
        });
    };
    
    var find_and_display_user_picture = function(idx){
        if(lightdm.users[idx].image == "" || lightdm.users[idx].image == null){
            $('.profile-img').attr("src", "assets/ui/avatar.png");
        }else{
            $('.profile-img').attr("src", lightdm.users[idx].image);
        
            $('.profile-img').error(function(){
                $('.profile-img').attr("src", "assets/ui/avatar.png");
            })
        }
    };

    // Functions that lightdm needs
    window.start_authentication = function (username) {
        lightdm.cancel_timed_login();
        lightdm.start_authentication(username);
    };
    
    window.provide_secret = function () {
        lightdm.provide_secret($pass.val());
    };
    
    window.authentication_complete = function () {
        if (inSubmit && lightdm.is_authenticated) {
            lightdm.login(lightdm.authentication_user, $session.val());
        }
	else {
	    inSubmit = false;
	}
    };
    
    // These can be used for user feedback
    window.show_error = function (e) {
        console.log('Error: ' + e);
    };
    
    window.show_prompt = function (e) {
        $pass.val(""); //clear the password input
        $pass.focus(); //focus the password input
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
		inSubmit = true;
                window.provide_secret();
                e.preventDefault();
            });
        });
    };

    return {
        init: init
    };
} (lightdm, jQuery));

login.init();
