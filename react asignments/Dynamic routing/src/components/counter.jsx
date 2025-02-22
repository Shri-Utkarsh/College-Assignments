// using useReducer hook

import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
    switch (action.type){

        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Invalid action');
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer,0)
    
    const increment = () => {
        dispatch({type: 'INCREMENT'})
    }

    const decrement = () => {
        dispatch({type: 'DECREMENT'})
    }

    return (
        <div>
           <h2> {state}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;
