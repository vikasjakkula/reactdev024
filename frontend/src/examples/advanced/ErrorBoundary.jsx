import { Component, useState } from 'react';

// Error Boundary - Catch errors in child components
// Must be a class component (no hook equivalent yet)
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Catch errors during render
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // Log error details
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', background: '#fee', border: '1px solid #fcc' }}>
          <h3>Something went wrong</h3>
          <p>{this.state.error?.message}</p>
          <button className="button" onClick={() => this.setState({ hasError: false, error: null })}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Component that throws error
function BuggyComponent({ shouldError }) {
  if (shouldError) {
    throw new Error('Intentional error for demonstration');
  }
  return <div>This component works fine!</div>;
}

// Example usage
function ErrorBoundaryExample() {
  const [shouldError, setShouldError] = useState(false);

  return (
    <ErrorBoundary>
      <BuggyComponent shouldError={shouldError} />
      <button className="button" onClick={() => setShouldError(true)}>
        Trigger Error
      </button>
    </ErrorBoundary>
  );
}

// Export both for different use cases
export { ErrorBoundary };
export default ErrorBoundaryExample;

