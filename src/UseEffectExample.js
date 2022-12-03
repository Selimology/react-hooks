import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  //Run on every change
  useEffect(() => {
    document.title = `${count} new messages`;
  });

  return (
    <div>
      <h3>{count} new messages!</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default UseEffectExample;
