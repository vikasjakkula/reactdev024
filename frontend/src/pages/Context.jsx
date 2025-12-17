import { ThemeProvider, useTheme } from '../examples/context/ThemeContext';
import { UserProvider, useUser } from '../examples/context/UserContext';
import MultipleContexts from '../examples/context/MultipleContexts';

function ContextDemo() {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000', padding: '20px', borderRadius: '8px' }}>
      <h2>Context API Demo</h2>
      <p>Current Theme: {theme}</p>
      <p>User: {user ? user.name : 'Not logged in'}</p>
      <button className="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button className="button" onClick={() => login({ name: 'John Doe', email: 'john@example.com' })}>
        Login
      </button>
      <button className="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

function Context() {
  return (
    <div>
      <h1>Context API</h1>
      
      <div className="card">
        <h2>1. Basic Context Usage</h2>
        <ThemeProvider>
          <UserProvider>
            <ContextDemo />
          </UserProvider>
        </ThemeProvider>
      </div>

      <div className="card">
        <h2>2. Multiple Contexts</h2>
        <ThemeProvider>
          <UserProvider>
            <MultipleContexts />
          </UserProvider>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Context;

