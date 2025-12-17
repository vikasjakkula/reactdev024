import UseRefBasic from '../examples/refs/UseRefBasic';
import DomRef from '../examples/refs/DomRef';
import ForwardRefExample from '../examples/refs/ForwardRefExample';
import ImperativeHandle from '../examples/refs/ImperativeHandle';

function Refs() {
  return (
    <div>
      <h1>Refs and the DOM</h1>
      
      <div className="card">
        <h2>1. useRef Hook - Basic</h2>
        <UseRefBasic />
      </div>

      <div className="card">
        <h2>2. Accessing DOM Elements</h2>
        <DomRef />
      </div>

      <div className="card">
        <h2>3. Forwarding Refs</h2>
        <ForwardRefExample />
      </div>

      <div className="card">
        <h2>4. useImperativeHandle</h2>
        <ImperativeHandle />
      </div>
    </div>
  );
}

export default Refs;

