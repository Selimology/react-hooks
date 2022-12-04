import React, { useReducer } from 'react';

//* Step 3
// TO prevent spelling mistakes, we create object for actions
const ACTION = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
};

//* Step 2
//State is to current state,
// Action is to access different actions
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ACTION.INCREASE:
      return { count: state.count + 1 };
    case ACTION.DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

const UseReducerExample = () => {
  // * Step 1
  // reducer function, which we write the function
  //second argument, initial state. Object of all the variables
  // this hooks, returns array with 2 elements.
  // State to access the initial state, dispatch is to update the state.
  const [state, dispatch] = useReducer(reducer, initialState);

  // * Step 4
  // Dispatch to update the state using specific action command.
  const increaseCount = () => {
    dispatch({ type: ACTION.INCREASE });
  };

  const decreaseCount = () => {
    dispatch({ type: ACTION.DECREASE });
  };

  return (
    <div>
      <h2>Count:{state.count}</h2>
      <button onClick={increaseCount}> Increase </button>
      <button onClick={decreaseCount}> Decrease</button>
    </div>
  );
};

export default UseReducerExample;
