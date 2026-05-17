import React, { useState, useEffect } from 'react';

function UserDirectory() {
  // 1. Setup state for users and loading indicator
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. useEffect with empty dependency array runs once on mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data); // 3. Update state with fetched data
        setIsLoading(false); // Turn off loading state
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []); // <-- Empty array is crucial here!

  // 4. Early return for loading state
  if (isLoading) {
    return <p>Loading users...</p>;
  }

  // 5. Map over fetched data
  return (
    <div>
      <h2>User Directory (Fetched from API)</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDirectory;