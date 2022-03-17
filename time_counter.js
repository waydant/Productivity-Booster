const countdownEl = document.getElementById('time_counter');

setInterval(updateCountdown,1000);

function updateCountdown()
{
    let minutes = Math.floor (time /60);
    let hours = Math.floor (minutes/60);  
    let seconds = time % 60;
    seconds = seconds<10 ?('0' + seconds): seconds 
    minutes = minutes<10 ?('0'+minutes):minutes
    hours = hours<10 ?('0'+hours):hours
    countdownEl.innerHTML = `${hours}:${minutes}:${seconds}`
    time++;
}