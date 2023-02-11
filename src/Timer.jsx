import React from "react";
import { useState } from "react";
let adjestTimer = undefined;
export default function Timer() {
  const [watch, setWatch] = useState(0);
  const [timer, setTimer] = useState(false);
  const startTimer = () => {
    adjestTimer = setInterval(() => {
      setWatch((x) => x + 1);
    }, 1000);
    setTimer(true);
  };
  const stopTimer = () => {
    clearInterval(adjestTimer);
    setTimer(false);
  };
  const resetTimer = () => {
    clearInterval(adjestTimer);
    setTimer(false);
    setWatch(0);
  };
  return (
    <div className="max-w-[1640px] flex justify-center">
      <div className="">
        <h1 className="text-4xl">START STOP RESET WATCH</h1>
        <h1 className="text-center text-3xl p-4">{watch}</h1>
        <div className="flex gap-3 justify-center">
          <button
            disabled={timer}
            onClick={startTimer}
            className="border-4 rounded-lg p-4 bg-green-500 text-white"
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            className="border-4 rounded-lg p-4 bg-red-500 text-white"
          >
            Stop
          </button>
          <button
            onClick={resetTimer}
            className="border-4 rounded-lg p-4 bg-purple-500 text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
