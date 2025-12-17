import { Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';

// Nested Routes - Routes within routes
function Layout() {
  return (
    <div>
      <nav>
        <Link to="/routing/nested">Home</Link> | 
        <Link to="/routing/nested/about">About</Link> | 
        <Link to="/routing/nested/contact">Contact</Link>
      </nav>
      {/* Outlet renders child routes */}
      <Outlet />
    </div>
  );
}

function Home() {
  return <div>Home Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function Contact() {
  return <div>Contact Page</div>;
}

function NestedRoutes() {
  return (
    <div>
      <Routes>
        <Route path="nested" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default NestedRoutes;

