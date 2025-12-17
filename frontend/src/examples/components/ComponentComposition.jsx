// Component Composition - Building complex UIs from simple components
// Better than inheritance - React's recommended pattern

// Small, reusable components
function Button({ children, onClick }) {
  return <button className="button" onClick={onClick}>{children}</button>;
}

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

// Composing components together
function ComponentComposition() {
  return (
    <div>
      <Card title="Composition Example">
        <p>This card is built using composition.</p>
        <Button onClick={() => alert('Button clicked!')}>
          Click Me
        </Button>
      </Card>
      
      <Card title="Another Card">
        <p>Reusing the same Card component with different content.</p>
        <Button onClick={() => console.log('Another button')}>
          Another Button
        </Button>
      </Card>
    </div>
  );
}

export default ComponentComposition;

