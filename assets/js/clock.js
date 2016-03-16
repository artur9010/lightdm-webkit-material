startTime();

function startTime() {
    var date = new Date();

    var hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        suffix = "";

    //12-hour clock support :)
    if (settings['clockStyle'] === "1") {
        if (hour > 12) {
            suffix = "p.m.";
            hour = hour - 12;
        } else {
            suffix = "a.m.";
        }
    }

    //Add "0" before minutes, if minute is smaller than 10
    if (minute < 10) {
        minute = "0" + minute;
    }

    //Add "0" before seconds, if seconds is smaller than 10
    if (second < 10) {
        second = "0" + second;
    }

    //Update clock!
    $("#clock").html(hour + ":" + minute + ":" + second + " " + suffix);
}

setInterval(startTime, 1000);