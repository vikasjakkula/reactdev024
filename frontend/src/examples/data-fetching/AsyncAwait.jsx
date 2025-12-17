import { useState } from 'react';

// Async/Await - Modern way to handle promises
// Cleaner syntax than .then() chains
function AsyncAwait() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sequential async operations
  const sequentialFetch = async () => {
    setLoading(true);
    try {
      // Wait for first request
      const userResponse = await fetch('http://localhost:5000/api/users/1');
      const user = await userResponse.json();
      
      // Then wait for second request
      const postsResponse = await fetch('http://localhost:5000/api/posts');
      const posts = await postsResponse.json();
      
      setResult({ user, posts });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Parallel async operations
  const parallelFetch = async () => {
    setLoading(true);
    try {
      // Execute both requests simultaneously
      const [usersRes, postsRes] = await Promise.all([
        fetch('http://localhost:5000/api/users'),
        fetch('http://localhost:5000/api/posts')
      ]);
      
      const users = await usersRes.json();
      const posts = await postsRes.json();
      
      setResult({ users, posts });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Error handling with try/catch
  const fetchWithErrorHandling = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/999');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: error.message });
    }
  };

  return (
    <div>
      <button className="button" onClick={sequentialFetch}>
        Sequential Fetch
      </button>
      <button className="button" onClick={parallelFetch}>
        Parallel Fetch
      </button>
      <button className="button" onClick={fetchWithErrorHandling}>
        Error Handling
      </button>
      
      {loading && <p>Loading...</p>}
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default AsyncAwait;

