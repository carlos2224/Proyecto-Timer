function splitSeconds(value) {
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const seconds = Math.floor((value % 3600) % 60);
  return [hours, minutes, seconds];
}

function formatTime(hours, minutes, seconds) {
  const hoursTime = hours.toString().padStart(2, "0");
  const minutesTime = minutes.toString().padStart(2, "0");
  const secondsTime = seconds.toString().padStart(2, "0");
  return [hoursTime, minutesTime, secondsTime];
}

export { splitSeconds, formatTime };
