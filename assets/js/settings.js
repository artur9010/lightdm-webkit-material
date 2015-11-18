var settings = {};
load_settings();

function save_settings(){
    localStorage.setItem("settings.language", $("#language").val());
    localStorage.setItem("settings.layout", $("#layout").val());
    load_settings();
}

function load_settings(){
    set_default_settings();
    settings['language'] = localStorage.getItem("settings.language");
    settings['layout'] = localStorage.getItem("settings.layout");
    set_default_settings();
}

function set_default_settings(){
    if(localStorage.getItem("settings.language") == null || localStorage.getItem("settings.language") == ""){
        localStorage.setItem("settings.language", $("#language").val());
    }
    if(localStorage.getItem("settings.layout") == null || localStorage.getItem("settings.layout") == ""){
        localStorage.setItem("settings.layout", "en");
    }
}

function settings_fill_inputs(){
    $("#language").val(settings['language']);
    $("#layout").val(settings['layout']);
}
