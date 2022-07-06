//Add a listener for the browser action
// chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked(tab){
//     // alert("Button clicked");
//     var msg = {
//         message: "user clicked!"
//     }
//     chrome.tabs.sendMessage()
// }

//const countdownEl = document.getElementById('time_counter');

/////////////////////////////////////////////////////////////////
//                   FOR BLOCKING SITES                         
/////////////////////////////////////////////////////////////////


// chrome.runtime API doest require any permission
chrome.runtime.onInstalled.addListener(function () {
// this addListenere calls a given callback any time the extension is installed or updated
    chrome.storage.local.get(["blocked", "enabled"], function (local) {
      if (!Array.isArray(local.blocked)) {
        chrome.storage.local.set({ blocked: [] });
      }
  
      if (typeof local.enabled !== "boolean") {
        chrome.storage.local.set({ enabled: false });
      }
    });
  });

  // chrome.tabs has many other options as well 
  // we are using tabs permission to get the access url and pendingUrl inside the onupdated event
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    const url = changeInfo.pendingUrl || changeInfo.url;
    if (!url || !url.startsWith("http")) {
      return;
    }
  
    const hostname = new URL(url).hostname;
  
    chrome.storage.local.get(["blocked", "enabled"], function (local) {
      const { blocked, enabled } = local;
      if (Array.isArray(blocked) && enabled && blocked.find(domain => hostname.includes(domain))) {
        chrome.tabs.remove(tabId);
      }
    });
  });

/////////////////////////////////////////////////////////////////
//                  BLOCKING SITES ENDS HERE
/////////////////////////////////////////////////////////////////


var timer_time =0;
var alarm_hour =0;
var alarm_minutes =0;
var alarm_seconds =0;

chrome.runtime.onMessage.addListener(function(abc){
    if(abc.from == "popup")
    {
        timer_time = abc.tt;
        console.log(timer_time);
    }
    setInterval(function()
    {
        timer_time--;
        if(timer_time==0)
        {
            alert("TIMER IS UP!")
        }    
    },1000)
    })

chrome.runtime.onMessage.addListener(function(alarm_check){
    if(alarm_check.from == "alarm")
    {
        alarm_hour = alarm_check.ala_hour;
        alarm_minutes = alarm_check.ala_minutes;
        alarm_seconds = alarm_check.ala_seconds;
        console.log(alarm_hour);
        console.log(alarm_minutes);
        console.log(alarm_seconds);
    } 
    setInterval(function()
    {
        var today = new Date;
        var present_hour = today.getHours();
        var present_min = today.getMinutes();
        var present_sec = today.getSeconds();
        console.log(present_hour);
        console.log(present_min);
        console.log(present_sec);
        if(present_hour==alarm_hour && present_min==alarm_minutes && present_sec==alarm_seconds)
        {
            alert("ALARM !!");
        }    
    },1000)
    })    


let time =0;

setInterval(updateCountdown,1000);

window.hours = 0;
window.minutes = 0;
window.seconds = 0;

function updateCountdown()
{
    window.minutes = Math.floor (time /60);
    window.hours = Math.floor (minutes/60);  
    window.seconds = time % 60;
    seconds = seconds<10 ?('0' + seconds): seconds 
    minutes = minutes<10 ?('0'+minutes):minutes
    hours = hours<10 ?('0'+hours):hours
    //countdownEl.innerHTML = `${hours}:${minutes}:${seconds}`
    time++;
    console.log(`${hours}:${minutes}:${seconds}`);
}