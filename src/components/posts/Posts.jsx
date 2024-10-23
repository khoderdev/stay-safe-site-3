// import { useEffect, useState, useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AuthContext } from "../../hooks/authContext";
// import axios from "axios";
// import moment from "moment";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const cat = useLocation().search;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {

//         const res = await axios.get(`http://localhost:8800/posts${cat}`, {
//           withCredentials: true,
//         });
//         setPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [cat]);

//   const getText = (html) => {
//     const doc = new DOMParser().parseFromString(html, "text/html");
//     return doc.body.textContent;
//   };

//   return (
//     <div className="home p-6 dark:bg-black text-black dark:text-[#f0f0fe] transition-all duration-300">
//       <div className="posts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {posts.map((post) => (
//           <Link
//             to={`/post/${post.id}`}
//             className="post bg-[#f0f0ee] dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105"
//             key={post.id}
//           >
//             <div className="img">
//               <img
//                 src={`../upload/${post.img}`}
//                 alt=""
//                 className="w-full h-48 object-cover transition-transform duration-200 hover:scale-110"
//               />
//             </div>
//             <div className="content p-4">
//               <div className="" >
//                 <h1 className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 transition-colors duration-200">
//                   {post.title}
//                 </h1>
//               </div>
//               <p className="mt-2 text-gray-600 dark:text-gray-300">{getText(post.desc)}</p>
//               <div className="flex items-center gap-4 ">
//                 <p className="text-sm">Posted {moment(post.date).fromNow()}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Posts;
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/posts${cat}`, {
          withCredentials: true,
        });
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="flex h-full p-6 dark:bg-black text-black dark:text-[#f0f0fe] transition-all duration-300 overflow-y-scroll">
      <div className="posts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            to={`/post/${post.id}`}
            className="post bg-[#f0f0ee] dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105"
            key={post.id}
          >
            <div className="img">
              <img
                src={`../upload/${post.img}`}
                alt=""
                className="w-full h-48 object-cover transition-transform duration-200 hover:scale-110"
              />
            </div>
            <div className="content p-4">
              <h1 className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 transition-colors duration-200">
                {post.title}
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{getText(post.desc)}</p>

              {/* Displaying Post User */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Posted by <span className="font-semibold">{post.username || 'Unknown'}</span>
              </p>

              <div className="flex items-center gap-4 mt-2">
                <p className="text-sm">Posted {moment(post.date).fromNow()}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
