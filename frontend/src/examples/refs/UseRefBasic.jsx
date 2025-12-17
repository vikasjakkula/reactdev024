import { useRef, useState, useEffect } from 'react';

// useRef - Access DOM elements or store mutable values
// Refs don't trigger re-renders when changed
function UseRefBasic() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0); // Store value that persists across renders

  // Increment render count without causing re-render
  renderCount.current += 1;

  // Store previous value
  const prevCountRef = useRef();
  
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <p>Component rendered {renderCount.current} times</p>
      <button className="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>
        Refs persist across renders but don't cause re-renders
      </p>
    </div>
  );
}

export default UseRefBasic;

