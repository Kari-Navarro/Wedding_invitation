import React, { useState, useEffect } from 'react';

interface CountdownProps {
  weddingDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ weddingDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div>{timeLeft.days} days</div>
      <div>{timeLeft.hours} hours</div>
      <div>{timeLeft.minutes} minutes</div>
      <div>{timeLeft.seconds} seconds</div>
    </div>
  );
};

export default Countdown;
