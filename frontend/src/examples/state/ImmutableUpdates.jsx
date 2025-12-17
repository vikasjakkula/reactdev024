import { useState } from 'react';

// Immutable State Updates - Never mutate state directly
// Always create new objects/arrays when updating state
function ImmutableUpdates() {
  const [user, setUser] = useState({ name: 'John', age: 25 });
  const [items, setItems] = useState(['apple', 'banana', 'orange']);

  // ❌ WRONG: Mutating state directly
  // const wrongUpdate = () => {
  //   user.age = 26; // Don't do this!
  // };

  // ✅ CORRECT: Create new object
  const updateUser = () => {
    setUser({ ...user, age: user.age + 1 }); // Spread operator
  };

  // ✅ CORRECT: Update nested object
  const updateNested = () => {
    setUser({
      ...user,
      address: { city: 'New York', country: 'USA' }
    });
  };

  // ✅ CORRECT: Add to array
  const addItem = () => {
    setItems([...items, 'grape']); // New array with new item
  };

  // ✅ CORRECT: Remove from array
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index)); // Filter creates new array
  };

  // ✅ CORRECT: Update array item
  const updateItem = (index) => {
    setItems(items.map((item, i) => 
      i === index ? item.toUpperCase() : item
    ));
  };

  return (
    <div>
      <h3>Object Updates</h3>
      <p>User: {JSON.stringify(user)}</p>
      <button className="button" onClick={updateUser}>
        Increment Age
      </button>
      <button className="button" onClick={updateNested}>
        Add Address
      </button>

      <h3>Array Updates</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className="button" onClick={() => removeItem(index)}>
              Remove
            </button>
            <button className="button" onClick={() => updateItem(index)}>
              Uppercase
            </button>
          </li>
        ))}
      </ul>
      <button className="button" onClick={addItem}>
        Add Item
      </button>
    </div>
  );
}

export default ImmutableUpdates;

