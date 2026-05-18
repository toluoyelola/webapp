import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './teamSlice';

export default function TeamDirectory() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.team);

  // Dispatch fetch action on mount
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  // Handle Loading
  if (status === 'loading') {
    return <h2>Loading team...</h2>;
  }

  // Handle Error
  if (status === 'failed') {
    return <h2 style={{ color: 'red' }}>Error: {error}</h2>;
  }

  // Handle Success
  return (
    <div>
      <h2>Team Directory</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}