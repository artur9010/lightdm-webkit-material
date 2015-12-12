var settings = {};
load_settings(true);
//settings-backgroundPath
function save_settings(){
    localStorage.setItem("settings.language", $("#settings-language").val());
    localStorage.setItem("settings.background", $("#settings-background").val());
    localStorage.setItem("settings.clockStyle", $("#settings-clockStyle").val());
    load_settings();
}

function load_settings(load_background){
    set_default_settings();
    settings['language'] = localStorage.getItem("settings.language");
    settings['background'] = localStorage.getItem("settings.background");
    settings['clockStyle'] = localStorage.getItem("settings.clockStyle");
    set_default_settings();
    
    //Update background
    if(load_background){
        var backgroundHeight = Math.max($(document).height(), $(window).height()) * 0.889;
        var backgroundWidth = Math.max($(document).width(), $(window).width()) * 0.889;
        var backgroundPattern = Trianglify({cell_size: 50, x_colors: settings['background'], height: backgroundHeight, width: backgroundWidth, variance: "1"});
        $("body").css("background-image", "url(\"" + backgroundPattern.png() + "\")");
    }
}

function set_default_settings(){
    if(localStorage.getItem("settings.language") === null || localStorage.getItem("settings.language") === "" || !localStorage.getItem("settings.language")){
        localStorage.setItem("settings.language", $("#settings-language").val());
    }
    if(localStorage.getItem("settings.background") === null || !localStorage.getItem("settings.background")){
        localStorage.setItem("settings.background", "random");
    }
    if(localStorage.getItem("settings.clockStyle") === null || localStorage.getItem("settings.clockStyle") === "" || !localStorage.getItem("settings.clockStyle")){
        localStorage.setItem("settings.clockStyle", "0");
    }
}

function settings_fill_inputs(){
    $("#settings-language").val(settings['language']);
    $("#settings-background").val(settings['background']);
    $("#settings-clockStyle").val(settings['clockStyle']);
}

//setup buttons
$("#settings-save").click(function(){
    save_settings(true);
    show_login_dialog();
});

$("#settings-cancel").click(function(){
    load_settings(false);
    show_login_dialog();
})