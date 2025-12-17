import { useState } from 'react';

// Lifting State Up - Moving state to common ancestor
// When multiple components need to share state

// Child component - receives state and callback as props
function TemperatureInput({ temperature, scale, onTemperatureChange }) {
  return (
    <div>
      <label>
        Temperature ({scale}):
        <input
          className="input"
          type="number"
          value={temperature}
          onChange={(e) => onTemperatureChange(e.target.value, scale)}
        />
      </label>
    </div>
  );
}

// Parent component - holds the state
function LiftingStateUp() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Convert between Celsius and Fahrenheit
  const handleTemperatureChange = (value, scale) => {
    if (scale === 'C') {
      setCelsius(value);
      setFahrenheit(value ? ((parseFloat(value) * 9) / 5 + 32).toFixed(2) : '');
    } else {
      setFahrenheit(value);
      setCelsius(value ? (((parseFloat(value) - 32) * 5) / 9).toFixed(2) : '');
    }
  };

  return (
    <div>
      <h3>Temperature Converter</h3>
      <p>State is lifted to parent, shared between child components</p>
      <TemperatureInput
        scale="C"
        temperature={celsius}
        onTemperatureChange={handleTemperatureChange}
      />
      <TemperatureInput
        scale="F"
        temperature={fahrenheit}
        onTemperatureChange={handleTemperatureChange}
      />
    </div>
  );
}

export default LiftingStateUp;

