var settings = {};

//settings-backgroundPath
function save_settings() {
    localStorage.setItem("settings.language", $("#settings-language").val());
    localStorage.setItem("settings.background", $("#settings-background").val());
    localStorage.setItem("settings.clockStyle", $("#settings-clockStyle").val());
    localStorage.setItem("settings.defaultSession", $("#settings-defaultSession").val());

    load_settings();
}

function setup_default_sessions_list() {
    var $defaultSession = $("#settings-defaultSession");
    $.each(lightdm.sessions, function (i) {
        var session = lightdm.sessions[i],
            sessionOption = $("<option/>");
        sessionOption.attr("value", session.key);
        sessionOption.html(session.name);
        $defaultSession.append(sessionOption);
        //$('#session').append('<option value="' + session.key + '">' + session.name + '</option>');
    });
    if (settings['defaultSession'] != null)
        $defaultSession.val(settings['defaultSession']);
}

function load_settings(load_background) {
    set_default_settings();
    settings['language'] = localStorage.getItem("settings.language");
    settings['background'] = localStorage.getItem("settings.background");
    settings['clockStyle'] = localStorage.getItem("settings.clockStyle");
    settings['defaultSession'] = localStorage.getItem("settings.defaultSession");
    set_default_settings();

    // Update background
    if (load_background) {
        var backgroundHeight = Math.max($(document).height(), $(window).height()) * 0.889;
        var backgroundWidth = Math.max($(document).width(), $(window).width()) * 0.889;
        var backgroundPattern = Trianglify({
            cell_size: 50,
            x_colors: settings['background'],
            height: backgroundHeight,
            width: backgroundWidth,
            variance: "1"
        });
        $("body").css("background-image", "url(\"" + backgroundPattern.png() + "\")");
    }

    /* Update selected session
     * This doesn't work because of (I think) a bug in MEYVN-digital/mdl-selectfield
     * So DON'T USE
     */
    /*
     console.log("setting default session field to", settings['defaultSession']);
     var $session = $("#session");
     $session.val(settings['defaultSession']);
     $session.find("option")
     .attr("selected", false);
     $session.find("option[value=" + settings['defaultSession'] + "]")
     .attr("selected", true);
     */

}

function set_default_settings() {
    if (localStorage.getItem("settings.language") === null
        || localStorage.getItem("settings.language") === ""
        || !localStorage.getItem("settings.language")) {
        localStorage.setItem("settings.language", $("#settings-language").val());
    }
    if (localStorage.getItem("settings.background") === null
        || !localStorage.getItem("settings.background")) {
        localStorage.setItem("settings.background", "random");
    }
    if (localStorage.getItem("settings.clockStyle") === null
        || localStorage.getItem("settings.clockStyle") === "" || !localStorage.getItem("settings.clockStyle")) {
        localStorage.setItem("settings.clockStyle", "0");
    }
    if (localStorage.getItem("settings.defaultSession") === null
        || localStorage.getItem("settings.defaultSession") === ""
        || !localStorage.getItem("settings.defaultSession")
        || localStorage.getItem("settings.defaultSession") === "null") {
        localStorage.setItem("settings.defaultSession", lightdm.sessions[0].key);
    }
}

function settings_fill_inputs() {
    $("#settings-language").val(settings['language']);
    $("#settings-background").val(settings['background']);
    $("#settings-clockStyle").val(settings['clockStyle']);
    $("#settings-defaultSession").val(settings['defaultSession']);
}

//setup buttons
$("#settings-save").click(function () {
    save_settings(true);
    show_login_dialog();
});

$("#settings-cancel").click(function () {
    load_settings(false);
    show_login_dialog();
});

load_settings(true);
setup_default_sessions_list();
