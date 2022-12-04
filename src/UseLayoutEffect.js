import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';

// * useLayoutEffect prints before the react elements.
// * It is synchronous (in order) and waits before moving
// * Usually do it when editing DOM, since useEffect prints after every elemetn is printed

const UseLayoutEffectExample = () => {
  const [toggle, setToggle] = useState(false);

  const textRef = useRef();

  // useEffect(() => {
  //   if (textRef.current != null) {
  //     const dimension = textRef.current.getBoundingClientRect();
  //     console.log(dimension);
  //     textRef.current.style.paddingTop = `${dimension.height}px`;
  //   }
  // }, [toggle]);

  useLayoutEffect(() => {
    if (textRef.current != null) {
      const dimension = textRef.current.getBoundingClientRect();
      console.log(dimension);
      textRef.current.style.paddingTop = `${dimension.height}px`;
    }
  }, [toggle]);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h4 ref={textRef}>Code Bless You!</h4>}
    </>
  );
};

export default UseLayoutEffectExample;
