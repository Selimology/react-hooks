import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(5);

  //run only when changes are made to specific variable
  useEffect(() => {
    document.title = `${otherCount} new messages`;
    console.log('run + 1 ');
  }, [otherCount]);

  return (
    <div>
      <h3>{count} new messages!</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h3>Other Count : {otherCount}</h3>
      <button onClick={() => setOtherCount(otherCount + 5)}>
        Increase by 5{' '}
      </button>
    </div>
  );
};

export default UseEffectExample;
