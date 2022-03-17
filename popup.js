var min;
var hr;
var sec;
var timer_hr =0;
var timer_min =0;
var timer_sec =0;
const countupElmt = document.getElementById('time_counter');
let bg = chrome.extension.getBackgroundPage();
setInterval(updateCountdown,1000);
function updateCountdown()
{
    min = bg.minutes;
    hr = bg.hours;
    sec = bg.seconds;
    countupElmt.innerHTML = `${hr}:${min}:${sec}`;
    console.log(`${hr}:${min}:${sec}`);
}

document.getElementById("timer_button").onclick = function()
    {
        var timer_hr = document.getElementById("hr").value;
        var timer_min = document.getElementById("min").value;
        var timer_sec = document.getElementById("sec").value;
        let timer_time = +(timer_hr*3600) + +(timer_min*60) + +(timer_sec);
        console.log(timer_hr);
        console.log(timer_min);
        console.log(timer_sec);
        console.log(timer_time);
        chrome.runtime.sendMessage({
            from: "popup",
            tt : timer_time
        })
    };
