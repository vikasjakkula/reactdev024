import { useState } from 'react';

// useState Hook - Declaring and updating state in functional components
function UseStateBasic() {
  // Declare state variable with initial value
  const [count, setCount] = useState(0); // [state, setter] = useState(initialValue)
  const [name, setName] = useState('React');

  // Updating state - always use setter function
  const increment = () => {
    setCount(count + 1); // Direct update
  };

  // Functional update (when new state depends on previous)
  const incrementByTwo = () => {
    setCount(prevCount => prevCount + 2); // Use callback for async safety
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      
      <button className="button" onClick={increment}>
        Increment
      </button>
      <button className="button" onClick={incrementByTwo}>
        Increment by 2
      </button>
      <button className="button" onClick={() => setName('React Hooks')}>
        Update Name
      </button>
      <button className="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default UseStateBasic;

