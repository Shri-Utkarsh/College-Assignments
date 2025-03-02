import React, { useReducer, useState } from "react";

const LearnReduce = () => {

    const initialState = {
        count: 0,
    }
    
  const reducer = (state, action) => {
    // if(action.type === "INCREMENT")
    //     return state + 1 ;
    // if(action.type === "DRECEMENT")
    //     return state - 1;
    // if(action.type === "RESET")
    //     return state = 0;

    switch (action.type) {
      case "INCREMENT":
        return {count: state.count + 1};
      case "DRECEMENT":
        return {count: state.count - 1};
      case "RESET":
        return {count: 0};
      default:
        return state;
    }
  };

  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DRECEMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
};

export default LearnReduce;
