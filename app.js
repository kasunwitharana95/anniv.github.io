const anniv = "10 June 2023";

const DaysEl = document.getElementById("days");
const HoursEl = document.getElementById("hours");
const MinutesEl = document.getElementById("minutes");
const SecondsEl = document.getElementById("seconds");

function timer() {
  const currentDate = new Date();
  const annivDate = new Date(anniv);
  const countDown = annivDate - currentDate;
  const totalSeconds = Math.floor(countDown / 1000);
  const days = Math.floor(totalSeconds / 60 / 60 / 24);
  const hours = Math.floor((totalSeconds / 60 / 60) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);
  console.log(days, hours, minutes, seconds);

  DaysEl.innerHTML = days;
  HoursEl.innerHTML = formatTime(hours);
  MinutesEl.innerHTML = formatTime(minutes);
  SecondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

timer();
setInterval(timer, 1000);
