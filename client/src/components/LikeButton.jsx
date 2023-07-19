// import React, { useState, useEffect } from 'react';

// const LikeButton = () => {
//   const [likes, setLikes] = useState(0);

//   useEffect(() => {
//     const storedLikes = localStorage.getItem('likes');
//     if (storedLikes) {
//       setLikes(parseInt(storedLikes, 10));
//     }
//   }, []);

//   const handleLike = () => {
//     const newLikes = likes + 1;
//     setLikes(newLikes);
//     localStorage.setItem('likes', newLikes.toString());
//   };

//   return (
//     <button onClick={handleLike}>
//       {likes} {likes === 1 ? 'Like' : 'Likes'}
//     </button>
//   );
// };

// export default LikeButton;
