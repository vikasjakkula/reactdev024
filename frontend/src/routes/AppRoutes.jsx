import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Components from '../pages/Components';
import State from '../pages/State';
import Lifecycle from '../pages/Lifecycle';
import Context from '../pages/Context';
import Refs from '../pages/Refs';
import Routing from '../pages/Routing';
import Forms from '../pages/Forms';
import DataFetching from '../pages/DataFetching';
import Advanced from '../pages/Advanced';

function AppRoutes() {
  return (
    <div className="app">
      <nav style={{ background: '#333', padding: '1rem', color: 'white' }}>
        <Link to="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</Link>
        <Link to="/components" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Components</Link>
        <Link to="/state" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>State</Link>
        <Link to="/lifecycle" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Lifecycle</Link>
        <Link to="/context" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Context</Link>
        <Link to="/refs" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Refs</Link>
        <Link to="/routing" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Routing</Link>
        <Link to="/forms" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Forms</Link>
        <Link to="/data-fetching" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Data Fetching</Link>
        <Link to="/advanced" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Advanced</Link>
      </nav>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/state" element={<State />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
          <Route path="/context" element={<Context />} />
          <Route path="/refs" element={<Refs />} />
          <Route path="/routing" element={<Routing />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/data-fetching" element={<DataFetching />} />
          <Route path="/advanced" element={<Advanced />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoutes;

