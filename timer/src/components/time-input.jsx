import React from "react";
import { splitSeconds, formatTime } from "../utils/time";
import Digit from "../components/digit"

function TimeInput({ value, onChange, onBlur }) {
  const [hours, minutes, seconds] = splitSeconds(value);
  const [hoursTime, minutesTime, secondsTime] = formatTime(
    hours,
    minutes,
    seconds
  );
  const timeString = `${hoursTime}${minutesTime}${secondsTime}`.replace(
    /^0+/,
    ""
  );

  return (
    <div>
      <Digit filled={hours !== 0}>{hoursTime}h</Digit>
      <Digit filled={minutes !== 0}>{minutesTime}m</Digit>
      <Digit filled={seconds !== 0 || minutes !== 0 || seconds !== 0}>{secondsTime}s</Digit>
      <input
        type="text"
        className="time-input"
        value={timeString}
        onBlur={onBlur}
        onChange={(event) => {
          const timeString = event.target.value.padStart(6, "0");
          const hours = parseInt(timeString.substr(0, 2));
          const minutes = parseInt(timeString.substr(2, 2));
          const seconds = parseInt(timeString.substr(4, 2));
          const totalSeconds = hours * 3600 + minutes * 60 + seconds;
          onChange(totalSeconds);
        }}
      />
    </div>
  );
}

export default TimeInput;
