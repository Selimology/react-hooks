import React, { useState, useCallback } from 'react';
import PrintTable from './PrintTable';

const UseCallbackExample = () => {
  const [number, setNumber] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  // * Memoization of a function basically.
  // * You can pass value as a parameter

  const calculateTable = useCallback(
    (value) => {
      let newNum = number + value;
      return [newNum * 1, newNum * 2, newNum * 3, newNum * 4, newNum * 5];
    },
    [number]
  );

  const cssStyle = {
    backgroundColor: darkTheme ? 'black' : 'white',
    color: darkTheme ? 'white' : 'black',
  };

  return (
    <div style={cssStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <PrintTable calculateTable={calculateTable} />
      <button onClick={() => setDarkTheme(!darkTheme)}> Toggle</button>
    </div>
  );
};

export default UseCallbackExample;
