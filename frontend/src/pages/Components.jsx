import FunctionalComponent from '../examples/components/FunctionalComponent';
import ClassComponent from '../examples/components/ClassComponent';
import ComponentComposition from '../examples/components/ComponentComposition';
import ConditionalRendering from '../examples/components/ConditionalRendering';
import PropsExample from '../examples/components/PropsExample';

function Components() {
  return (
    <div>
      <h1>React Components</h1>
      
      <div className="card">
        <h2>1. Functional Component</h2>
        <FunctionalComponent />
      </div>

      <div className="card">
        <h2>2. Props: Passing Data</h2>
        <PropsExample name="John" age={25} />
      </div>

      <div className="card">
        <h2>3. Conditional Rendering</h2>
        <ConditionalRendering />
      </div>

      <div className="card">
        <h2>4. Component Composition</h2>
        <ComponentComposition />
      </div>

      <div className="card">
        <h2>5. Class Component (Legacy)</h2>
        <ClassComponent />
      </div>
    </div>
  );
}

export default Components;

