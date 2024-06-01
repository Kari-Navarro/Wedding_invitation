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
    <section className='section-countdown'>
      <h2 className='text-faltan'>FALTAN:</h2>
      <div className='counter1'>{timeLeft.days}</div>
      <div className='counter2'>{timeLeft.hours}</div>
      <div className='counter3'>{timeLeft.minutes}</div>
      <div className='counter4'>{timeLeft.seconds}</div>
      <p className='dias'>Dias</p>
      <p className='horas'>Horas</p>
      <p className='min'>Min.</p>
      <p className='seg'>Seg</p>
    </section>
  );
};

export default Countdown;
