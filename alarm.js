document.getElementById("alarm_set").onclick = function()
    {
        var alarm_hr = document.getElementById("ala_hr").value;
        var alarm_min = document.getElementById("ala_min").value;
        var alarm_sec = document.getElementById("ala_sec").value;
        console.log(alarm_hr);
        console.log(alarm_min);
        console.log(alarm_sec);
        chrome.runtime.sendMessage({
            from: "alarm",
            ala_hour:alarm_hr,
            ala_minutes:alarm_min,
            ala_seconds:alarm_sec
        })
    };