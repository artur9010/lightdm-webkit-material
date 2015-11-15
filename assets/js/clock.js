function startTime(){
    var date = new Date();
    
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    if(window.login_settings['clock_style'] == 1){
        hour = makeHourTwelveBased(hour);
    }
    
    if(minute < 10){
        minute = "0" + minute;
    }
    
    if(second < 10){
        second = "0" + second;
    }
    
    $("#clock").html(hour + ":" + minute + ":" + second);
}
    
function makeHourTwelveBased(i) {
    if (i > 12) {
        i = i-12;
    }
    return i;
}

setInterval(startTime, 500);