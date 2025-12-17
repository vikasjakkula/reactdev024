import UseEffectBasic from '../examples/lifecycle/UseEffectBasic';
import UseEffectDependencies from '../examples/lifecycle/UseEffectDependencies';
import UseEffectCleanup from '../examples/lifecycle/UseEffectCleanup';
import DataFetchingExample from '../examples/lifecycle/DataFetchingExample';
import ClassLifecycle from '../examples/lifecycle/ClassLifecycle';

function Lifecycle() {
  return (
    <div>
      <h1>Component Lifecycle & Side Effects</h1>
      
      <div className="card">
        <h2>1. useEffect Hook - Basic</h2>
        <UseEffectBasic />
      </div>

      <div className="card">
        <h2>2. useEffect with Dependencies</h2>
        <UseEffectDependencies />
      </div>

      <div className="card">
        <h2>3. Cleanup Functions</h2>
        <UseEffectCleanup />
      </div>

      <div className="card">
        <h2>4. Data Fetching with useEffect</h2>
        <DataFetchingExample />
      </div>

      <div className="card">
        <h2>5. Class Component Lifecycle</h2>
        <ClassLifecycle />
      </div>
    </div>
  );
}

export default Lifecycle;

