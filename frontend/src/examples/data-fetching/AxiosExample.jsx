import { useState, useEffect } from 'react';
import axios from 'axios';

// Axios - Popular HTTP client library
// Benefits: Automatic JSON parsing, better error handling, interceptors
function AxiosExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // GET request
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data); // Axios automatically parses JSON
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  // POST request
  const createUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users', {
        name: 'Axios User',
        email: 'axios@example.com'
      });
      alert(`Created: ${response.data.name}`);
      fetchUsers();
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  // DELETE request
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <button className="button" onClick={fetchUsers}>
        Refresh
      </button>
      <button className="button" onClick={createUser}>
        Create User
      </button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button className="button" onClick={() => deleteUser(user.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosExample;

