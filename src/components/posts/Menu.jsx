// // import axios from "axios";
// // import React, { useEffect, useState } from "react";

// // const Menu = ({cat}) => {
// //   const [posts, setPosts] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const res = await axios.get(`https://api.staysafeaa.org/posts/?cat=${cat}`);
// //         setPosts(res.data);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };
// //     fetchData();
// //   }, [cat]);

// //   return (
// //     <div className="menu">
// //       <h1>Other posts you may like</h1>
// //       {posts.map((post) => (
// //         <div className="post" key={post.id}>

// //           <h2 className="text-2xl font-bold">{post.title}</h2>
// //           {/* <button className="btn-1">Read More</button> */}
// //           <img src={`../upload/${post?.img}`} alt="" />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Menu;
// import axios from "axios";
// import { useEffect, useState } from "react";

// const PostImage = ({ cat }) => {
//   const [posts, setPosts] = useState([]);

//   const getText = (html) => {
//     const doc = new DOMParser().parseFromString(html, "text/html");
//     return doc.body.textContent;
//   };


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`https://api.staysafeaa.org/posts/?cat=${cat}`);
//         setPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [cat]);

//   return (
//     <>
//       {posts.map((post) => (
//         <div
//           className=""
//           key={post.id}
//         >
//           <img
//             className="lg:w-[50%] object-cover rounded-md mb-4 "
//             src={`../upload/${post?.img}`}
//             alt={post.title}
//           />
//         </div>
//       ))}
//     </>
//   );
// };

// export default PostImage;


import axios from "axios";
import { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.staysafeaa.org/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu my-6">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Your Posts</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            className="post bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl hover:shadow-none transform transition duration-200 cursor-pointer border border-[#afafafa6] "
            key={post.id}
          >
            <img
              className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-200 ease-in-out "
              src={`../upload/${post?.img}`}
              alt={post.title}
            />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 truncate">{post.desc}</p>
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md transition-colors duration-300 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
