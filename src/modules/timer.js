const timer = (deadLine) => {
    
    const timerHours = document.getElementById ('timer-hours');
    const timerMinutes = document.getElementById ('timer-minutes');
    const timerSeconds = document.getElementById ('timer-seconds');

    const getTimeRemaining = () => {
        const dateStop = new Date (deadLine).getTime();
        const dateNow = new Date ().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const hours = Math.floor(timeRemaining / 60 / 60);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const seconds = Math.floor(timeRemaining % 60); 
    
        return {timeRemaining, hours, minutes, seconds}
    };

    const updateClock = () => {    
        const getTime = getTimeRemaining ();          
            if (getTime.timeRemaining > 0) {
                timerHours.textContent = getTime.hours < 10 ? "0" + getTime.hours : getTime.hours;
                timerMinutes.textContent = getTime.minutes < 10 ? "0" + getTime.minutes : getTime.minutes;
                timerSeconds.textContent = getTime.seconds < 10 ? "0" + getTime.seconds : getTime.seconds;        
            } else if (getTime.timeRemaining <= 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(timerId);
            }
    };

    updateClock();
    let timerId = setInterval (() => {
        updateClock();
    }, 1000);
}

export default timer;