function startTime(){
    var date = new Date();
    
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    if(minute < 10){
        minute = "0" + minute;
    }
    
    if(second < 10){
        second = "0" + second;
    }
    
    $("#clock").html(hour + ":" + minute + ":" + second);
}

setInterval(startTime, 1000);