import { useState, useEffect } from 'react';

// Fetch API - Native browser API for HTTP requests
function FetchAPI() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Basic GET request
      const response = await fetch('http://localhost:5000/api/users');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // POST request example
  const createUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'New User',
          email: 'newuser@example.com'
        })
      });
      
      const newUser = await response.json();
      alert(`Created user: ${newUser.name}`);
      fetchData(); // Refresh list
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <button className="button" onClick={fetchData}>
        Refresh Data
      </button>
      <button className="button" onClick={createUser}>
        Create User
      </button>
      {data && (
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchAPI;

