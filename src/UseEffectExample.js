import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [time, setTime] = useState(0);

  //clears after each run.
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h3>{time} in seconds</h3>
    </div>
  );
};

export default UseEffectExample;
