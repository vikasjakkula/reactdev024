import { useRef, forwardRef, useImperativeHandle } from 'react';

// useImperativeHandle - Expose specific methods to parent
// Control what parent can access from child component

// Child component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // Expose only specific methods to parent
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    },
    getValue: () => {
      return inputRef.current.value;
    }
    // Parent can't access inputRef directly, only these methods
  }));

  return <input ref={inputRef} className="input" {...props} />;
});

// Parent component
function ImperativeHandle() {
  const inputRef = useRef(null);

  return (
    <div>
      <h3>useImperativeHandle</h3>
      <p>Parent can only access exposed methods, not the DOM directly</p>
      
      <CustomInput ref={inputRef} placeholder="Type something..." />
      
      <button className="button" onClick={() => inputRef.current.focus()}>
        Focus
      </button>
      <button className="button" onClick={() => inputRef.current.clear()}>
        Clear
      </button>
      <button className="button" onClick={() => alert(inputRef.current.getValue())}>
        Get Value
      </button>
    </div>
  );
}

export default ImperativeHandle;

