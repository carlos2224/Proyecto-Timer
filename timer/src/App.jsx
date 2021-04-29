import React, { useEffect, useState } from "react";
import Button from "./components/button";
import Timer from "./components/timer";
import TimeInput from "./components/time-input";
import ProgressBar from "./components/progress-bar";

function App() {
  const [paused, setPaused] = useState(true);
  const [focused, setFocused] = useState(false);
  const [selectedSeconds, setSelectedSeconds] = useState(10);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if (paused || secondsLeft === 0) {
      setPaused(true);
    } else {
      setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    }
  }, [paused, secondsLeft]);

  useEffect(() => {
    setSecondsLeft(selectedSeconds);
  }, [selectedSeconds]);

  useEffect(() => {
    if (focused) {
      document.querySelector("input").focus();
    }
  }, [focused]);

  return (
    <div className="container">
      <div className="app">
        {focused ? (
          <TimeInput
            value={selectedSeconds}
            onChange={setSelectedSeconds}
            onBlur={() => {
              setFocused(false);
            }}
          />
        ) : (
          <Timer
            value={secondsLeft}
            onClick={() => {
              setFocused(true);
            }}
          />
        )}
        <ProgressBar value={secondsLeft / selectedSeconds} />
        <footer className="control-footer">
          <Button
            variant="primary"
            disabled={secondsLeft === 0}
            onClick={() => {
              setPaused(!paused);
            }}
          >
            {paused ? "Start" : "Pause"}
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setPaused(true);
              setSecondsLeft(selectedSeconds);
            }}
          >
            Reset
          </Button>
        </footer>
      </div>
    </div>
  );
}

export default App;