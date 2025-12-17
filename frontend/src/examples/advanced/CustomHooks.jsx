import { useState, useEffect } from 'react';

// Custom Hook 1: useLocalStorage - Persist state to localStorage
function useLocalStorage(key, initialValue) {
  // Get from localStorage or use initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Update localStorage when state changes
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Custom Hook 2: useDebounce - Delay value updates
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Custom Hook 3: useWindowSize - Track window dimensions
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// Using Custom Hooks
function CustomHooks() {
  const [name, setName] = useLocalStorage('name', '');
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { width, height } = useWindowSize();

  return (
    <div>
      <h3>1. useLocalStorage Hook</h3>
      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type name (saved to localStorage)"
      />
      <p>Saved name: {name}</p>

      <h3>2. useDebounce Hook</h3>
      <input
        className="input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search (debounced)"
      />
      <p>Search term: {searchTerm}</p>
      <p>Debounced value (updates after 500ms): {debouncedSearch}</p>

      <h3>3. useWindowSize Hook</h3>
      <p>Window size: {width} x {height}</p>
    </div>
  );
}

export default CustomHooks;

