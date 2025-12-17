import { useState } from 'react';

// Multiple State Variables - Managing multiple independent states
function MultipleState() {
  // Separate useState for each piece of state
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  // Alternative: Single object state (use when states are related)
  const [user, setUser] = useState({
    username: '',
    email: '',
    age: 0
  });

  return (
    <div>
      <h3>Multiple Separate States</h3>
      <input
        className="input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <p>Username: {username}, Email: {email}, Age: {age}</p>

      <h3>Single Object State</h3>
      <input
        className="input"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        className="input"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <p>User: {JSON.stringify(user)}</p>
    </div>
  );
}

export default MultipleState;

