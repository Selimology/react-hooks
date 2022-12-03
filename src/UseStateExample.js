import React, { useState } from 'react';
const UseStateExample = () => {
  // const [name, setName] = useState('');
  // const [click, setClick] = useState(0);
  const [details, setDetails] = useState({ name: '', click: 0 });

  const changeName = (e) => {
    setDetails((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  function increaseCounter() {
    // setClick(click + 1);
    setDetails((prev) => ({
      ...prev,
      click: prev.click + 1,
    }));
  }
  console.log(details);

  return (
    <>
      <input type="text" value={details.name} onChange={changeName} />
      <h1>
        {details.name} has clicked times {details.click}
      </h1>
      <button onClick={increaseCounter}>Increase</button>
    </>
  );
};

export default UseStateExample;
