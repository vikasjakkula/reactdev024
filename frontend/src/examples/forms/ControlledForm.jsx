import { useState } from 'react';

// Controlled Components - React controls form input values
// Single source of truth: state controls input value
function ControlledForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value // Update specific field
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log('Form submitted:', formData);
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            className="input"
            type="text"
            name="name"
            value={formData.name} // Controlled by state
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Message:
          <textarea
            className="input"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </label>
      </div>

      <button className="button" type="submit">
        Submit
      </button>

      <p>Current form data: {JSON.stringify(formData)}</p>
    </form>
  );
}

export default ControlledForm;

