import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  //   console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT": {
      return state - 1;
    }

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      UseReducer
      <p>{state}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
    </div>
  );
};

export default UseReducer;
