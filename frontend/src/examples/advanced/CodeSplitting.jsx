import { lazy, Suspense, useState } from 'react';

// Code Splitting - Load components only when needed
// Reduces initial bundle size, improves performance

// Lazy load component (loaded on demand)
const LazyComponent = lazy(() => import('./LazyLoadedComponent'));

function CodeSplitting() {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div>
      <h3>Lazy Loading Components</h3>
      <button className="button" onClick={() => setShowLazy(!showLazy)}>
        {showLazy ? 'Hide' : 'Show'} Lazy Component
      </button>

      {/* Suspense provides fallback while component loads */}
      {showLazy && (
        <Suspense fallback={<div>Loading component...</div>}>
          <LazyComponent />
        </Suspense>
      )}

      <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>
        Check Network tab - component only loads when shown
      </p>
    </div>
  );
}

export default CodeSplitting;

