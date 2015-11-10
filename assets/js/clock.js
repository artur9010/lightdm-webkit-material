function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    if(window.login_settings['clock_style']==1){
        h=makeHourTwelveBased(h);
    }
    m=checkTime(m);
    document.getElementById('clock').innerHTML=h+":"+m;

    t=setTimeout('startTime()', 500)
}
function makeHourTwelveBased(i) {
    if (i > 12) {
        i = i-12;
    }
    return i;
}
function checkTime(i) {
    if (i<10) {
        i="0" + i;
    }
    return i
}
window.onload=startTime;
