import { useState, useEffect } from 'react';

// Dependency Array - Control when effect runs
function UseEffectDependencies() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');

  // Runs only when 'count' changes
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]); // Dependency array

  // Runs when 'name' or 'count' changes
  useEffect(() => {
    console.log('Name or count changed');
  }, [name, count]);

  // Runs only once (empty array)
  useEffect(() => {
    console.log('Mounted once');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button className="button" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <button className="button" onClick={() => setName('React Hooks')}>
        Change Name
      </button>
      <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>
        Check console to see when effects run
      </p>
    </div>
  );
}

export default UseEffectDependencies;

