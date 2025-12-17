import { useRef } from 'react';

// Accessing DOM Elements with useRef
function DomRef() {
  const inputRef = useRef(null);
  const divRef = useRef(null);

  const focusInput = () => {
    // Access DOM element via .current
    inputRef.current.focus();
  };

  const changeColor = () => {
    // Direct DOM manipulation (use sparingly)
    divRef.current.style.backgroundColor = 'lightblue';
  };

  const getValue = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h3>DOM Element Access</h3>
      
      {/* Attach ref to element */}
      <input
        ref={inputRef}
        className="input"
        type="text"
        placeholder="Type something..."
      />
      
      <div
        ref={divRef}
        style={{
          padding: '20px',
          margin: '10px 0',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      >
        This div's color can be changed
      </div>

      <button className="button" onClick={focusInput}>
        Focus Input
      </button>
      <button className="button" onClick={getValue}>
        Get Input Value
      </button>
      <button className="button" onClick={changeColor}>
        Change Div Color
      </button>

      <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>
        Use refs for: focus, scroll, animations, third-party library integration
      </p>
    </div>
  );
}

export default DomRef;

