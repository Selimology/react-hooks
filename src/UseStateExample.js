import React, { useState } from 'react';

const UseStateExample = () => {
  const [name, setName] = useState('');
  const [click, setClick] = useState(0);

  function increaseCounter() {
    setClick(click + 1);
  }
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>
        {name} has clicked times {click}
      </h1>
      <button onClick={increaseCounter}>Increase</button>
    </>
  );
};

export default UseStateExample;
