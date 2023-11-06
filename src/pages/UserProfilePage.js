// import React, { useState } from 'react';

// function UserProfilePage() {
//   const user = {
//     username: 'musiclover123',
//     playlists: ['My Favorites', 'Party Mix', 'Chill Vibes'],
//   };

//   const [newPlaylist, setNewPlaylist] = useState('');
//   const [playlists, setPlaylists] = useState(user.playlists || []); 

//   return (
//     <div>
//       <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '60px' }}>
//         {user.username}'s Playlists
//       </h2>
//       {playlists.length === 0 ? (
//         <p>No playlists yet.</p>
//       ) : (
//         <div>
//           {playlists.map((playlist, index) => (
//             <p key={index}>{playlist}</p>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserProfilePage;
