// Props: Passing data from parent to child components
// Props are read-only and flow downward

function PropsExample({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Props are immutable - child cannot modify parent's data</p>
    </div>
  );
}

// Default props (alternative to destructuring with defaults)
PropsExample.defaultProps = {
  name: 'Guest',
  age: 0
};

export default PropsExample;

