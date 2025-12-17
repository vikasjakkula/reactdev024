import UseStateBasic from '../examples/state/UseStateBasic';
import MultipleState from '../examples/state/MultipleState';
import ImmutableUpdates from '../examples/state/ImmutableUpdates';
import UseReducerExample from '../examples/state/UseReducerExample';
import LiftingStateUp from '../examples/state/LiftingStateUp';

function State() {
  return (
    <div>
      <h1>State Management</h1>
      
      <div className="card">
        <h2>1. useState Hook - Basic</h2>
        <UseStateBasic />
      </div>

      <div className="card">
        <h2>2. Multiple State Variables</h2>
        <MultipleState />
      </div>

      <div className="card">
        <h2>3. Immutable State Updates</h2>
        <ImmutableUpdates />
      </div>

      <div className="card">
        <h2>4. useReducer - Complex State</h2>
        <UseReducerExample />
      </div>

      <div className="card">
        <h2>5. Lifting State Up</h2>
        <LiftingStateUp />
      </div>
    </div>
  );
}

export default State;

