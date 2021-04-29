import React from "react";
import Digit from "./digit";
import { splitSeconds, formatTime } from "../utils/time";

function Timer({ value, onClick }) {
  const [hours, minutes, seconds] = splitSeconds(value);
  const [hoursTime, minutesTime, secondsTime] = formatTime(
    hours,
    minutes,
    seconds
  );

  return (
    <div onClick={onClick}>
      {hours !== 0 && <Digit filled>{hoursTime}h</Digit>}
      {(minutes !== 0 || hours !== 0) && <Digit filled>{minutesTime}m</Digit>}
      {(seconds !== 0 || minutes !== 0 || hours !== 0) && (
          <Digit filled>{secondsTime}s</Digit>
      )}
      {value === 0 && <Digit filled>0s</Digit>}
    </div>
  );
}

export default Timer;
