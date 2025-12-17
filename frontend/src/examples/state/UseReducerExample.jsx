import { useReducer } from 'react';

// useReducer - Better for complex state logic
// Similar to Redux pattern but local to component

// Reducer function - pure function that takes state and action
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET_VALUE':
      return { count: action.payload };
    default:
      return state;
  }
};

function UseReducerExample() {
  // useReducer(reducer, initialState)
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      
      {/* Dispatch actions to update state */}
      <button className="button" onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      <button className="button" onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
      <button className="button" onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
      <button className="button" onClick={() => dispatch({ type: 'SET_VALUE', payload: 10 })}>
        Set to 10
      </button>

      <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
        Benefits: Centralized state logic, easier to test, better for complex updates
      </p>
    </div>
  );
}

export default UseReducerExample;

