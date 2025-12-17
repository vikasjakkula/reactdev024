import { useState, useEffect } from 'react';

// useEffect - Handle side effects in functional components
// Runs after render, similar to componentDidMount + componentDidUpdate
function UseEffectBasic() {
  const [count, setCount] = useState(0);

  // Runs after every render (no dependency array)
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log('Effect ran - count changed');
  });

  // Runs only once on mount (empty dependency array)
  useEffect(() => {
    console.log('Component mounted - runs once');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Check document title - it updates with count!</p>
      <button className="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UseEffectBasic;

