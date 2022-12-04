import React, { useRef } from 'react';

const UseRefExample = () => {
  //* UseRef is to edit the DOM element or update variable, without re-rendering
  const inputEl = useRef();
  const outputEl = useRef();

  const handleClick = () => {
    //* You can output inputEl , to see all the DOM element list
    console.log(inputEl);
    inputEl.current.style.width = '400px';
    outputEl.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputEl} />
      <button onClick={handleClick}>Click Here</button>
      <textarea name="" id="" cols="30" rows="10" ref={outputEl}></textarea>
    </div>
  );
};

export default UseRefExample;
