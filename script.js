const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const birtday = '24 May 2022';

function countdown() {
    const birtdayDate = new Date(birtday);
    const currentDate = new Date();

    const totalseconds = (birtdayDate - currentDate) / 1000;

    const seconds = Math.floor(totalseconds) %60;
    const mins = Math.floor(totalseconds / 60) %60;
    const hours = Math.floor(totalseconds / 3600) %24;
    const days = Math.floor(totalseconds / 3600 / 24);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time  : time;
}

countdown();

setInterval(countdown, 1000)

