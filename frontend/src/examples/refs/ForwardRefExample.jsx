import { useRef, forwardRef } from 'react';

// Forwarding Refs - Pass ref from parent to child component
// Child component receives ref as second parameter

// Child component with forwardRef
const Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className="input"
      {...props}
    />
  );
});

// Parent component
function ForwardRefExample() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Parent can access child's DOM element
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>Forwarding Refs</h3>
      <p>Parent component can access child's DOM element</p>
      
      {/* Pass ref to child */}
      <Input ref={inputRef} placeholder="This input can be focused from parent" />
      
      <button className="button" onClick={handleFocus}>
        Focus Input from Parent
      </button>
    </div>
  );
}

export default ForwardRefExample;

