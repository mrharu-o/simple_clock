function Time() {
    var realTime = new Date();
    var hour = realTime.getHours();
    var minutes  = realTime.getMinutes();
    var seconds  = realTime.getSeconds();
    var time = hour + ":" + minutes + ":" + seconds;
    document.getElementById("Time-view").innerHTML = time;
 }
 setInterval('Time()',1000);