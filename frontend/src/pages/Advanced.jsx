import CustomHooks from '../examples/advanced/CustomHooks';
import Memoization from '../examples/advanced/Memoization';
import ErrorBoundaryExample, { ErrorBoundary } from '../examples/advanced/ErrorBoundary';
import CodeSplitting from '../examples/advanced/CodeSplitting';

function Advanced() {
  return (
    <div>
      <h1>Advanced React Patterns</h1>
      
      <div className="card">
        <h2>1. Custom Hooks</h2>
        <CustomHooks />
      </div>

      <div className="card">
        <h2>2. Memoization (useMemo, useCallback, React.memo)</h2>
        <Memoization />
      </div>

      <div className="card">
        <h2>3. Error Boundaries</h2>
        <ErrorBoundaryExample />
      </div>

      <div className="card">
        <h2>4. Code Splitting</h2>
        <CodeSplitting />
      </div>
    </div>
  );
}

export default Advanced;

