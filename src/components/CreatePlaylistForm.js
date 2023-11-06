import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePlaylistForm = ({ }) => {
  const [name, setName] = useState('');

  const navigate = useNavigate(); 

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCreatePlaylist = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/create-playlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      'credentials': 'include',
      body: JSON.stringify({ name}),
    });

    if (response.ok) {
      const data = await response.json();
      navigate(`/playlists`);
    } else {
      console.error('error')
    }
  };

  return (
    <div>
      <h2>Create Playlist</h2>
      <form onSubmit={handleCreatePlaylist}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
    
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default CreatePlaylistForm