function startTime(){
    var date = new Date();
    
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    if(window.login_settings['clock_style'] == 1){
        if(hour > 12){
            hour = hour - 12;
        }
    }
    
    if(minute < 10){
        minute = "0" + minute;
    }
    
    if(second < 10){
        second = "0" + second;
    }
    
    $("#clock").html(hour + ":" + minute + ":" + second);
}

setInterval(startTime, 500);