import { useRef } from 'react';

// Uncontrolled Components - DOM handles form input values
// Use refs to access values when needed
function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Access values via refs
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    
    alert(`Name: ${name}, Email: ${email}`);
    
    // Reset form
    nameRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            className="input"
            type="text"
            ref={nameRef}
            defaultValue="" // Default value (not controlled)
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            className="input"
            type="email"
            ref={emailRef}
            defaultValue=""
          />
        </label>
      </div>

      <button className="button" type="submit">
        Submit
      </button>

      <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>
        Use uncontrolled for: simple forms, file inputs, when you don't need real-time validation
      </p>
    </form>
  );
}

export default UncontrolledForm;

