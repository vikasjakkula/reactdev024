import { Component } from 'react';

// Class Component - Legacy approach (still supported)
// Use functional components with hooks instead for new code
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from Class Component'
    };
  }

  handleClick = () => {
    this.setState({ message: 'State updated in class component!' });
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button className="button" onClick={this.handleClick}>
          Update State
        </button>
        <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>
          Note: Prefer functional components with hooks for new projects
        </p>
      </div>
    );
  }
}

export default ClassComponent;

