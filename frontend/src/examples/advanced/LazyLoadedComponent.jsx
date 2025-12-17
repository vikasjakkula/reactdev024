// This component is lazy loaded
// Only downloaded when needed
function LazyLoadedComponent() {
  return (
    <div style={{ padding: '20px', background: '#e3f2fd', borderRadius: '8px', marginTop: '10px' }}>
      <h4>This component was lazy loaded!</h4>
      <p>It was not included in the initial bundle.</p>
      <p>Check the Network tab to see it loaded separately.</p>
    </div>
  );
}

export default LazyLoadedComponent;

