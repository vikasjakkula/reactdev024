import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// Protected Route Component - Redirects if not authenticated
function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate protected content
  const ProtectedContent = () => {
    if (!isAuthenticated) {
      return <Navigate to="/routing" replace />; // Redirect if not auth
    }
    return <div>This is protected content!</div>;
  };

  return (
    <div>
      <p>Authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
      <button className="button" onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
      <ProtectedContent />
    </div>
  );
}

export default ProtectedRoute;

