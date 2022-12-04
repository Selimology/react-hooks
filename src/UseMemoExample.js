import React, { useState, useMemo } from 'react';

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //* Similar to useEffect, but can be assign to variable
  //* Only runs a new render if variable is in array of useMemo()
  //* Can also return a result from function
  //* Increases performance!

  const memoCalculation = useMemo(() => {
    return expensiveFunction(number);
  }, [number]);

  const cssStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div style={cssStyle}>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.valueAsNumber)}
        value={number}
      />

      <h2>Calculation : {memoCalculation}</h2>
      <button onClick={() => setDark(!dark)}> Toggle</button>
    </div>
  );
};

export default UseMemoExample;

function expensiveFunction(num) {
  console.log('Loop Started');
  for (let i = 0; i < 1000000000000000; i++) {
    return num;
  }
}
