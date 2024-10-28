import { useEffect, useState } from "react";
import Edit from "./img/edit.png";
import Delete from "./img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../../services/api";
import axios from "axios";
import moment from "moment";
import { useAuth } from "../../hooks/useAuth";
import DOMPurify from "dompurify";

const Single = () => {
  const { token, user: currentUser } = useAuth();
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [postId, token]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      navigate("/posts");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="single w-full h-screen flex flex-col p-4 text-gray-800 dark:text-[#f0f0fe]  bg-white dark:bg-gray-800 overflow-y-auto animate-fade-in lg:p-8 lg:pt-2">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white animate-fade-in mb-8">Post Details</h1>


      <div className="content flex flex-col lg:flex-row space-y-8 w-full h-[100dvh] self-center p-4 border rounded-lg">

        <div className="user flex lg:flex-col lg:w-[20rem] items-start lg:border-r">

          <div className="w-full lg:w-fit flex space-x-3 ">
            {post.user?.img ? (
              <img
                src={post.user.img}
                alt="User Avatar"
                className="w-14 h-14 rounded-full object-cover border border-gray-300 shadow-sm"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-gray-300" />
            )}
            <div className="info flex flex-col ">
              <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">{post.user?.username}</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Posted {moment(post.date).fromNow()}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:w-full justify-center lg:mt-4">
            {currentUser?.id === post.uid && (
              <div className="edit flex flex-col lg:flex-row items-center space-x-2">
                <Link to={`/write?edit=2`} state={post} className="transition-opacity duration-200 hover:opacity-80">
                  <img src={Edit} alt="Edit" className="w-7 h-7 cursor-pointer" />
                </Link>
                <img
                  onClick={handleDelete}
                  src={Delete}
                  alt="Delete"
                  className="w-7 h-7 cursor-pointer transition-opacity duration-200 hover:opacity-80"
                />
              </div>
            )}
          </div>
        </div>

        <div className="contents-and-img flex justify-around post-content">

          <div className="w-[50%] flex flex-col items-center space-y-5">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 animate-fade-in">{post.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.desc),
              }}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            ></p>
          </div>

          <div className="flex justify-end border-green-500">
            <img
              src={`${API_URL}/upload/${post.img}`}
              alt="Post Image"
              className="max-w-[80%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
// import { useEffect, useState } from "react";
// import Edit from "./img/edit.png";
// import Delete from "./img/delete.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import moment from "moment";
// import { createPost, updatePost, getPostById, deletePost } from "../../services/api";
// import { useAuth } from "../../hooks/useAuth";
// import DOMPurify from "dompurify";

// const Single = () => {
//   const { token, user: currentUser } = useAuth();
//   const [post, setPost] = useState({});
//   const location = useLocation();
//   const navigate = useNavigate();
//   const postId = location.pathname.split("/")[2];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getPostById(postId, token); // Use the new service function
//         setPost(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, [postId, token]);

//   const handleDelete = async () => {
//     try {
//       await deletePost(postId, token); // Use the new service function
//       navigate("/posts");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="single w-full h-screen flex flex-col p-4 text-gray-800 dark:text-[#f0f0fe]  bg-white dark:bg-gray-800 overflow-y-auto animate-fade-in lg:p-8 lg:pt-2">
//       <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white animate-fade-in mb-8">Post Details</h1>


//       <div className="content flex flex-col lg:flex-row space-y-8 w-full h-[100dvh] self-center p-4 border rounded-lg">

//         <div className="user flex lg:flex-col lg:w-[20rem] items-start lg:border-r">

//           <div className="w-full lg:w-fit flex space-x-3 ">
//             {post.user?.img ? (
//               <img
//                 src={post.user.img}
//                 alt="User Avatar"
//                 className="w-14 h-14 rounded-full object-cover border border-gray-300 shadow-sm"
//               />
//             ) : (
//               <div className="w-14 h-14 rounded-full bg-gray-300" />
//             )}
//             <div className="info flex flex-col ">
//               <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">{post.user?.username}</span>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Posted {moment(post.date).fromNow()}
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row lg:w-full justify-center lg:mt-4">
//             {currentUser?.id === post.uid && (
//               <div className="edit flex flex-col lg:flex-row items-center space-x-2">
//                 <Link to={`/write?edit=2`} state={post} className="transition-opacity duration-200 hover:opacity-80">
//                   <img src={Edit} alt="Edit" className="w-7 h-7 cursor-pointer" />
//                 </Link>
//                 <img
//                   onClick={handleDelete}
//                   src={Delete}
//                   alt="Delete"
//                   className="w-7 h-7 cursor-pointer transition-opacity duration-200 hover:opacity-80"
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="contents-and-img flex justify-around post-content">

//           <div className="w-[50%] flex flex-col items-center space-y-5">
//             <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 animate-fade-in">{post.title}</h2>
//             <p
//               dangerouslySetInnerHTML={{
//                 __html: DOMPurify.sanitize(post.desc),
//               }}
//               className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
//             ></p>
//           </div>

//           <div className="flex justify-end border-green-500">
//             {post.img ? (
//               <img
//                 src={`http://localhost:8800/upload/${post.img}`}
//                 alt="Post Image"
//                 className="max-w-[80%] object-cover"
//               />
//             ) : (
//               <div className="w-full h-48 flex items-center justify-center bg-gray-200">
//                 <p>No Image Available</p>
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Single;
