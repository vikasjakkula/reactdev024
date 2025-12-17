import { Component } from 'react';

// Class Component Lifecycle Methods (Legacy)
// Use hooks in functional components instead
class ClassLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. Constructor - Initialize state');
  }

  // Mounting Phase
  componentDidMount() {
    console.log('3. componentDidMount - Runs after first render');
    // Good for: API calls, subscriptions, DOM manipulation
  }

  // Updating Phase
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate - Runs after re-render');
    if (prevState.count !== this.state.count) {
      console.log('Count changed from', prevState.count, 'to', this.state.count);
    }
  }

  // Unmounting Phase
  componentWillUnmount() {
    console.log('componentWillUnmount - Cleanup before removal');
    // Good for: Clearing intervals, canceling requests, removing listeners
  }

  render() {
    console.log('2. Render - Returns JSX');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="button" onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>
          Check console for lifecycle logs. Use hooks for new code.
        </p>
      </div>
    );
  }
}

export default ClassLifecycle;

