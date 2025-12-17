import { useTheme } from './ThemeContext';
import { useUser } from './UserContext';

// Using Multiple Contexts in one component
function MultipleContexts() {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  return (
    <div style={{ 
      background: theme === 'dark' ? '#222' : '#f0f0f0',
      padding: '20px',
      borderRadius: '8px'
    }}>
      <h3>Multiple Contexts Example</h3>
      <p>Theme from ThemeContext: {theme}</p>
      <p>User from UserContext: {user ? user.name : 'None'}</p>
      <button className="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button className="button" onClick={() => login({ name: 'Jane', email: 'jane@example.com' })}>
        Login User
      </button>
    </div>
  );
}

export default MultipleContexts;

