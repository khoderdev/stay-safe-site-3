// import { useEffect, useState } from "react";
// import Edit from "../img/edit.png";
// import Delete from "../img/delete.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Menu from "../components/Menu";
// import axios from "axios";
// import moment from "moment";
// import { useContext } from "react";
// import { AuthContext } from "../hooks/authContext";
// import DOMPurify from "dompurify";

// const Single = () => {
//   const [post, setPost] = useState({});

//   const location = useLocation();
//   const navigate = useNavigate();

//   const postId = location.pathname.split("/")[2];

//   const { currentUser } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8800/posts/${postId}`);
//         setPost(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [postId]);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:8800/posts/${postId}`, {
//         withCredentials: true,
//       });
//       navigate("/")
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   const getText = (html) => {
//     const doc = new DOMParser().parseFromString(html, "text/html")
//     return doc.body.textContent
//   }

//   return (
//     <div className="single">
//       <div className="content">
//         <img src={`../../../api/upload/${post?.img}`} alt="" />
//         <div className="user">
//           {post.userImg && <img
//             src={post.userImg}
//             alt=""
//           />}
//           <div className="info">
//             <span>{post.username}</span>
//             <p>Posted {moment(post.date).fromNow()}</p>
//           </div>
//           {currentUser.username === post.username && (
//             <div className="edit">
//               <Link to={`/write?edit=2`} state={post}>
//                 <img src={Edit} alt="" />
//               </Link>
//               <img onClick={handleDelete} src={Delete} alt="" />
//             </div>
//           )}
//         </div>
//         <h1>{post.title}</h1>
//         <p
//           dangerouslySetInnerHTML={{
//             __html: DOMPurify.sanitize(post.desc),
//           }}
//         ></p>      </div>
//       <Menu cat={post.cat} />
//     </div>
//   );
// };

// export default Single;
import { useEffect, useState } from "react";
import Edit from "./img/edit.png";
import Delete from "./img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PostImage from "./PostImage";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../../hooks/authContext";
import DOMPurify from "dompurify";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/posts/${postId}`, {
        withCredentials: true,
      });
      navigate("/posts");
    } catch (err) {
      console.log(err);
    }
  };

  // const getText = (html) => {
  //   const doc = new DOMParser().parseFromString(html, "text/html");
  //   return doc.body.textContent;
  // };

  return (
    <div className="single w-full h-screen flex flex-col space-y-6 lg:space-y-0 lg:flex-row p-4 lg:p-8 lg:gap-16 text-gray-800 dark:text-[#f0f0fe] animate-fade-in border border-red-500">

      <div className="content lg:w-[35%] p-1 space-y-4 border">
        <h1 className="text-3xl font-bold">Details</h1>

        <div className="user flex flex-col items-start">User:
          <div className="flex items-center gap-4 ">
            {post.userImg && (
              <img
                src={post.userImg}
                alt=""
                className="w-12 h-12 rounded-full object-cover border-2 border-transparent shadow-sm"
              />
            )}

            <div className="info flex flex-col">
              <span className="font-semibold text-lg ">{post.username}</span>
              <p className="text-sm">Posted {moment(post.date).fromNow()}</p>
            </div>
            {currentUser?.username === post?.username && (
              <div className="edit flex items-center gap-2 ml-auto">
                <Link to={`/write?edit=2`} state={post} className="hover:opacity-80">
                  <img src={Edit} alt="Edit" className="w-6 h-6 cursor-pointer" />
                </Link>
                <img
                  onClick={handleDelete}
                  src={Delete}
                  alt="Delete"
                  className="w-6 h-6 cursor-pointer hover:opacity-80"
                />
              </div>
            )}
          </div>
        </div>
        <div className=" lg:mt-10 ">
          <h1 className="text-xl font-bold">Post:</h1>
          <h1 className="text-3xl font-bold animate-fade-down">{post.title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.desc),
            }}
            className="text-lg leading-relaxed"
          ></p>
        </div>
      </div>
      <div className="">
        <PostImage 
        cat={post.cat}
         />
      </div>
    </div>
  );
};

export default Single;
