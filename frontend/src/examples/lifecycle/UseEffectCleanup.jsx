import { useState, useEffect } from 'react';

// Cleanup Functions - Clean up side effects
// Runs before component unmounts or before effect runs again
function UseEffectCleanup() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    // Set up interval
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function - runs when:
    // 1. Component unmounts
    // 2. Before effect runs again (if dependencies change)
    return () => {
      clearInterval(intervalId); // Clean up interval
      console.log('Interval cleaned up');
    };
  }, [isRunning]); // Re-run when isRunning changes

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
      <button className="button" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button className="button" onClick={() => setSeconds(0)}>
        Reset
      </button>
      <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>
        Cleanup prevents memory leaks by clearing intervals/subscriptions
      </p>
    </div>
  );
}

export default UseEffectCleanup;

