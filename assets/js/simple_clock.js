function Time() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var clock = hours + ":" + minutes + ":" + seconds;
    document.getElementById("Time-view").innerHTML = clock;
    }
    setInterval('Time()',1000);