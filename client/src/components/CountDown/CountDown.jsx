import React, { useState, useEffect } from 'react';
import "./Count.css";
const Countdown = () => {
  const [countdown, setCountdown] = useState(100);
  const [minutecountdown, setMinuteCountdown] = useState(10);
  const [daycountdown, setDayCountdown] = useState(1); // Initial countdown value

  useEffect(() => {
    // Countdown logic
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    // Clean up the interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>{daycountdown} Days: {minutecountdown} Minutes : {countdown} Seconds</h2>
    </div>
  );
};

export default Countdown;
