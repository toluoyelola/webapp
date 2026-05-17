import React, { useState } from 'react';

function AddMemberForm({ onAddMember }) {
  // 1. State variables for inputs
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [showError, setShowError] = useState(false);

  // 2. Submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // Bonus: Check if name is empty
    if (name.trim() === '') {
      setShowError(true);
      return;
    }
    
    setShowError(false); 

    const newMember = {
      id: Date.now(), 
      name: name,
      bio: bio,
      imageUrl: 'https://via.placeholder.com/100' 
    };

    onAddMember(newMember); 
    
    // Clear the form
    setName('');
    setBio('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '10px', background: '#f4f4f4' }}>
      <h3>Add a New Team Member</h3>
      <div style={{ marginBottom: '10px' }}>
        <label>Name: </label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Bio: </label>
        <input 
          type="text" 
          value={bio} 
          onChange={(e) => setBio(e.target.value)} 
        />
      </div>
      
      {showError && <p style={{ color: 'red' }}>Warning: Please enter a name before submitting!</p>}
      
      <button type="submit">Add Member</button>
    </form>
  );
}

export default AddMemberForm;