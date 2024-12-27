// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useAuth } from "../../hooks/useAuth"; 
// const Menu = ({ cat }) => {
//   const { token, user: currentUser } = useAuth(); 
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`https://api.staysafeaa.org/posts/?cat=${cat}`, {
//           headers: {
//             Authorization: `Bearer ${token}`, // Use the token for the request
//           },
//           withCredentials: true,
//         });
//         setPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [cat]);

//   return (
//     <div className="menu">
//       <h1>Other posts you may like</h1>
//       {posts.map((post) => (
//         <div className="post" key={post.id}>

//           <h2 className="text-2xl font-bold">{post.title}</h2>
//           {/* <button className="btn-1">Read More</button> */}
//           <img src={`../upload/${post?.img}`} alt="" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Menu;


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const Menu = ({ postId }) => {
  const { token } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Use the token for the request
          },
          withCredentials: true,
        });
        
        // Check if res.data is an array and set posts, or set an empty array
        setPosts(Array.isArray(res.data) ? res.data : []);
        
      } catch (err) {
        console.log(err);
      }
    };

    if (postId) {
      fetchData();
    }
  }, [postId, token]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <img src={`../upload/${post?.img}`} loading="lazy" alt={post.title} />
          </div>
        ))
      ) : (
        <p>No related posts available.</p>
      )}
    </div>
  );
};

export default Menu;
