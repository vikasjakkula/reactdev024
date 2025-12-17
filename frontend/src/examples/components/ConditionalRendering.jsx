import { useState } from 'react';

// Conditional Rendering - Show/hide content based on conditions
function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Method 1: Ternary Operator */}
      {isLoggedIn ? (
        <p>Welcome back! You are logged in.</p>
      ) : (
        <p>Please log in to continue.</p>
      )}

      {/* Method 2: Logical AND (&&) */}
      {count > 0 && <p>Count is greater than 0: {count}</p>}

      {/* Method 3: Early Return */}
      {count === 0 && <p>Count is zero</p>}

      <button className="button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>
      <button className="button" onClick={() => setCount(count + 1)}>
        Increment: {count}
      </button>
    </div>
  );
}

export default ConditionalRendering;

