import { useState, useMemo, useCallback, memo } from 'react';

// Memoization - Optimize performance by preventing unnecessary recalculations

// Expensive calculation function
const expensiveCalculation = (num) => {
  console.log('Calculating...');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
};

// Child component that receives function as prop
const ChildComponent = memo(({ onClick, count }) => {
  console.log('ChildComponent rendered');
  return (
    <div>
      <p>Count: {count}</p>
      <button className="button" onClick={onClick}>
        Increment from Child
      </button>
    </div>
  );
});

function Memoization() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // useMemo - Memoize expensive calculations
  // Only recalculates when 'count' changes
  const expensiveValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  // useCallback - Memoize function references
  // Prevents child component from re-rendering unnecessarily
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // Empty deps - function never changes

  // Without useCallback, this function is recreated on every render
  const handleOther = () => {
    setOtherState(prev => prev + 1);
  };

  return (
    <div>
      <h3>useMemo - Expensive Calculations</h3>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <p>Other State: {otherState}</p>
      
      <button className="button" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <button className="button" onClick={handleOther}>
        Increment Other
      </button>

      <h3>useCallback - Stable Function References</h3>
      <ChildComponent onClick={handleIncrement} count={count} />

      <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>
        Check console - expensive calculation only runs when count changes
      </p>
    </div>
  );
}

export default Memoization;

