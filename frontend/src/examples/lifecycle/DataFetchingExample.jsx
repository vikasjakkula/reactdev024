import { useState, useEffect } from 'react';

// Data Fetching with useEffect
function DataFetchingExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    // Reset states
    setLoading(true);
    setError(null);

    // Fetch data
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });

    // Cleanup: Cancel fetch if component unmounts (using AbortController in real apps)
  }, [userId]); // Re-fetch when userId changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <input
        className="input"
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
        placeholder="User ID (1-100)"
      />
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default DataFetchingExample;

