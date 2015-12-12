var animation_time = 300;

function show_shutdown_dialog() {
    $(".card:visible").fadeOut(animation_time, function(){
        $("#shutdown-dialog").fadeIn(animation_time);
    });
}

function show_restart_dialog() {
    $(".card:visible").fadeOut(animation_time, function(){
        $("#restart-dialog").fadeIn(animation_time);
    });
}

function show_suspend_dialog() {
    $(".card:visible").fadeOut(animation_time, function(){
        $("#suspend-dialog").fadeIn(animation_time);
    });
}

function show_hibernate_dialog() {
    $(".card:visible").fadeOut(animation_time, function(){
        $("#hibernate-dialog").fadeIn(animation_time);
    });
}

function show_login_dialog() {
    $(".card:visible").fadeOut(animation_time, function(){
        $("#login").fadeIn(animation_time);
    });
}

function show_settings_dialog() {
    $(".card:visible").fadeOut(animation_time, function(){
        settings_fill_inputs();
        $("#settings").fadeIn(animation_time);
    });
}

function show_help_dialog() {
    $(".card:visible").fadeOut(animation_time, function(){
        $("#help-dialog").fadeIn(animation_time);
    });
}

//setup buttons
$("#action-settings").click(function(){
    show_settings_dialog();
})
$("#action-shutdown").click(function(){
    show_shutdown_dialog();
})
$("#action-reboot").click(function(){
    show_restart_dialog();
})
$("#action-suspend").click(function(){
    show_suspend_dialog();
})
$("#action-hibernate").click(function(){
    show_hibernate_dialog();
})