let hr = 0;
let min= 0;
let sec = 0;
let ms = 0;
let timer = "stop";
function start(){
    timer = "start";
    working ();
}

function stop(){
    timer = "stop";
    working ();
}
function reset(){
    timer = "stop";
    hr = 0;
    min= 0;
    sec = 0;
    ms = 0;
    document.getElementById("hr").innerText= hr
    document.getElementById("min").innerText= min
    document.getElementById("sec").innerText= sec
    document.getElementById("ms").innerText= ms;
}
function working(){
    if (timer == "start"){
        ms = ms + 1;
        if (ms == 100){
            sec = sec + 1;
            ms = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
        }
        document.getElementById("hr").innerText= hr
        document.getElementById("min").innerText= min;
        document.getElementById("sec").innerText= sec;
        document.getElementById("ms").innerText= ms;
        setTimeout("working()", 10);
    }

}