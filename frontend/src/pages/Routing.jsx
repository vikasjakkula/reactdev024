import { Routes, Route, Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import ProtectedRoute from '../examples/routing/ProtectedRoute';
import NestedRoutes from '../examples/routing/NestedRoutes';

// Basic Route Examples
function UserProfile() {
  const { id } = useParams(); // Get route parameters
  return <div>User Profile ID: {id}</div>;
}

function Dashboard() {
  const navigate = useNavigate(); // Programmatic navigation
  
  return (
    <div>
      <h2>Dashboard</h2>
      <button className="button" onClick={() => navigate('/routing/users/1')}>
        Go to User 1
      </button>
      <button className="button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

function Routing() {
  return (
    <div>
      <h1>React Router</h1>
      
      <div className="card">
        <h2>1. Basic Routes</h2>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users/:id" element={<UserProfile />} />
        </Routes>
        <Link to="/routing/dashboard">Dashboard</Link> | 
        <Link to="/routing/users/123">User 123</Link>
      </div>

      <div className="card">
        <h2>2. Protected Routes</h2>
        <ProtectedRoute />
      </div>

      <div className="card">
        <h2>3. Nested Routes</h2>
        <NestedRoutes />
      </div>
    </div>
  );
}

export default Routing;

