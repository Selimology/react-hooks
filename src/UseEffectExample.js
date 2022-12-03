import React, { useState, useEffect, useContext } from 'react';
import { LoginContext } from './App';

const UseEffectExample = () => {
  //3. UseContext to import the value
  const login = useContext(LoginContext);
  console.log(login + 1);
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
