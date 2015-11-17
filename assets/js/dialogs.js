var animation_time = 500;

function show_shutdown_dialog(){
    $(".card:visible").fadeOut(animation_time, function(){
        $("#shutdown-dialog").fadeIn(animation_time);
    });
}

function show_restart_dialog(){
    $(".card:visible").fadeOut(animation_time, function(){
        $("#restart-dialog").fadeIn(animation_time);
    });
}

function show_suspend_dialog(){
    $(".card:visible").fadeOut(animation_time, function(){
        $("#suspend-dialog").fadeIn(animation_time);
    });
}

function show_hibernate_dialog(){
    $(".card:visible").fadeOut(animation_time, function(){
        $("#hibernate-dialog").fadeIn(animation_time);
    });
}

function show_signin_dialog(){
    $(".card:visible").fadeOut(animation_time, function(){
        $("#signin").fadeIn(animation_time);
    });
}