import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

const UseRefExample = () => {
  const [name, setName] = useState('');

  const count = useRef(0);
  console.log(count);

  useEffect(() => {
    count.current = count.current + 1;
  });

  //! useEffect runs,and once it renders, due to a change, it renders again
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // });

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Name : {name}</h2>
      <h2>Renders: {count.current}</h2>
    </div>
  );
};

export default UseRefExample;
