const header = document.getElementById('header');
const minuteDisplay = document.getElementById('time-left');

let updateTimerDisplay = (minutes, seconds) => {
    let minutesStr = minutes.toString().padStart(2,'0');
    let secondsStr = seconds.toString().padStart(2, '0');
    minuteDisplay.textContent = minutesStr + ":" + secondsStr;
    console.log(minuteDisplay);
}

function startTimer (duration) {
    
}

updateTimerDisplay(3, 2);
startTimer(13)