var settings = {};
load_settings();
//settings-backgroundPath
function save_settings(){
    localStorage.setItem("settings.language", $("#settings-language").val());
    localStorage.setItem("settings.background", $("#settings-background").val());
    localStorage.setItem("settings.backgroundPath", $("#settings-backgroundPath").val());
    localStorage.setItem("settings.clockStyle", $("#settings-clockStyle").val());
    load_settings();
}

function load_settings(){
    set_default_settings();
    settings['language'] = localStorage.getItem("settings.language");
    settings['background'] = localStorage.getItem("settings.background");
    settings['backgroundPath'] = localStorage.getItem("settings.backgroundPath");
    settings['clockStyle'] = localStorage.getItem("settings.clockStyle");
    set_default_settings();
    
    //Update background
    if(settings['background'] == "custom"){
        if(settings['backgroundPath'] != ""){
            $("body").css("background-image", "url(\"" + settings['backgroundPath'] + "\")");
        }else{
            $("body").css("background-image", "url(\"assets/ui/background/background-blue.jpg\")");
        }
    }else{
        $("body").css("background-image", "url(\"assets/ui/background/background-" + settings['background'] + ".jpg\")");
        $("#settings-backgroundPath").val("");
    }
}

function set_default_settings(){
    if(localStorage.getItem("settings.language") == null || localStorage.getItem("settings.language") == "" || !localStorage.getItem("settings.language")){
        localStorage.setItem("settings.language", $("#settings-language").val());
    }
    if(localStorage.getItem("settings.background") == null || !localStorage.getItem("settings.background")){
        localStorage.setItem("settings.background", "blue");
    }
    if(localStorage.getItem("settings.clockStyle") == null || localStorage.getItem("settings.clockStyle") == "" || !localStorage.getItem("settings.clockStyle")){
        localStorage.setItem("settings.clockStyle", "0");
    }
}

function settings_fill_inputs(){
    $("#settings-language").val(settings['language']);
    $("#settings-background").val(settings['background']);
    $("#settings-backgroundPath").val(settings['backgroundPath']);
    $("#settings-clockStyle").val(settings['clockStyle']);
}