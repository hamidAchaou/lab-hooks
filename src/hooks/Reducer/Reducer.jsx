import React, { useReducer } from "react";

// Define action types as constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Reducer function (outside the component for clarity and reusability)
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return action.payload; // Reset to initialState via payload
    default:
      return state; // Always return the current state if action is not recognized
  }
};

const ReducerExample = () => {
  const initialState = 0;

  // Use the useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Dispatch functions wrapped in an event handler for cleaner UI handling
  const increment = () => dispatch({ type: INCREMENT });
  const decrement = () => dispatch({ type: DECREMENT });
  const reset = () => dispatch({ type: RESET, payload: initialState });

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ReducerExample;
