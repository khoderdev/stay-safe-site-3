// // import { useState, useEffect } from "react";
// // import ReactQuill from "react-quill";
// // import "react-quill/dist/quill.snow.css";
// // import axios from "axios";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import moment from "moment";

// // const Write = () => {
// //   const state = useLocation().state;
// //   const [value, setValue] = useState(state?.desc || "");
// //   const [title, setTitle] = useState(state?.title || "");
// //   const [file, setFile] = useState(null);
// //   const [cat, setCat] = useState(state?.cat || "");
// //   const [previewImgUrl, setPreviewImgUrl] = useState("");
// //   const [, setError] = useState();

// //   const navigate = useNavigate();

// //   const upload = async () => {
// //     try {
// //       const formData = new FormData();
// //       formData.append("file", file);

// //       const res = await axios.post("http://localhost:8800/upload", formData, {
// //         withCredentials: true,
// //       });

// //       return res.data;
// //     } catch (err) {
// //       console.error(
// //         "File upload error:",
// //         err.response ? err.response.data : err.message
// //       );
// //       throw new Error("File upload failed.");
// //     }
// //   };

// //   const handleClick = async (e) => {
// //     e.preventDefault();

// //     let imgUrl;
// //     try {
// //       imgUrl = await upload();
// //     } catch (uploadError) {
// //       console.error(uploadError.message);
// //       return;
// //     }

// //     try {
// //       const postData = {
// //         title,
// //         desc: value,
// //         cat,
// //         img: file ? imgUrl.filename : "",
// //         date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
// //       };

// //       navigate("/");

// //       if (state) {
// //         await axios.put(`http://localhost:8800/posts/${state.id}`, postData, {
// //           withCredentials: true,
// //         });
// //       } else {
// //         await axios.post(`http://localhost:8800/posts/`, postData, {
// //           withCredentials: true,
// //         });
// //       }

// //       navigate("/posts");
// //     } catch (err) {
// //       console.error(
// //         "Post creation error:",
// //         err.response ? err.response.data : err.message
// //       );
// //       if (err.response?.status === 401) {
// //         setError("You are not authenticated! Please log in again.");
// //       }
// //     }
// //   };

// //   useEffect(() => {
// //     if (file) {
// //       const imgPreviewUrl = URL.createObjectURL(file);
// //       setPreviewImgUrl(imgPreviewUrl);

// //       return () => URL.revokeObjectURL(imgPreviewUrl);
// //     }
// //   }, [file]);

// import { useState, useEffect } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { useLocation, useNavigate } from "react-router-dom";
// import moment from "moment";
// import { uploadFile, createPost, updatePost } from '../../services/api';
// import { useAuth } from '../../hooks/useAuth';


// const Write = () => {

//   const state = useLocation().state;
//   const [value, setValue] = useState(state?.desc || "");
//   const [title, setTitle] = useState(state?.title || "");
//   const [file, setFile] = useState(null);
//   const [cat, setCat] = useState(state?.cat || "");
//   const [previewImgUrl, setPreviewImgUrl] = useState("");
//   const [, setError] = useState();

//   const navigate = useNavigate();

//   const handleClick = async (e) => {
//     e.preventDefault();

//     let imgUrl;
//     try {
//       if (file) {
//         imgUrl = await uploadFile(file);
//       }
//     } catch (uploadError) {
//       console.error(uploadError.message);
//       return;
//     }

//     try {
//       const postData = {
//         title,
//         desc: value,
//         cat,
//         img: file ? imgUrl.filename : "",
//         date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
//       };

//       navigate("/");

//       if (state) {
//         await updatePost(state.id, postData);
//       } else {
//         await createPost(postData);
//       }

//       navigate("/posts");
//     } catch (err) {
//       console.error("Post creation error:", err.response ? err.response.data : err.message);
//       if (err.response?.status === 401) {
//         setError("You are not authenticated! Please log in again.");
//       }
//     }
//   };




//   return (
//     <div className="flex w-full justify-between p-6 bg-white dark:bg-[#000] overflow-x-hidden overflow-y-hidden ">
//       <div className="content rounded-lg p-4 shadow-md transition-all duration-300 bg-[#f0f0fe] dark:bg-black text-black dark:text-[#f0f0fe]">
//         <input
//           type="text"
//           placeholder="Post Title"
//           required
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#000] dark:border-black dark:text-white transition-all duration-200"
//         />
//         <div className="editorContainer mb-4 ">
//           <ReactQuill
//             className="editor transition-all duration-300 dark:bg-[#000] dark:border-black text-black dark:text-[#f0f0fe]"
//             theme="snow"
//             placeholder='description'
//             value={value}
//             onChange={setValue}
//             required
//           />
//         </div>
//       </div>

//       <div className="preview border w-96 p-4 rounded-lg bg-white dark:bg-black shadow-md">
//         <h1 className="text-xl font-semibold mb-2 text-black dark:text-[#f0f0fe]">
//           {title || "Preview Title"}
//         </h1>
//         <div
//           className="quill-preview-content text-black dark:text-[#f0f0fe]"
//           dangerouslySetInnerHTML={{ __html: value || "<p>Preview Content</p>" }}
//         />
//         {previewImgUrl && (
//           <img
//             src={previewImgUrl}
//             alt="Selected"
//             className="mt-4 rounded-lg"
//           />
//         )}
//       </div>

//       <div className="menu grid grid-cols-1 gap-6  border-red-500">
//         <div className="flex flex-col w-72 justify-center bg-[#f0f0fe] dark:bg-black text-black dark:text-[#f0f0fe] p-4 pt-2 rounded-md shadow-sm space-y-2">
//           <h1 className="font-bold text-xl mb-6 dark:text-white">Actions</h1>
//           <span className="block">
//             <b>Status: </b> Draft
//           </span>
//           <span className="block">
//             <b>Visibility: </b> Public
//           </span>

//           <label className="file underline py-1 text-blue" htmlFor="file">
//             Upload Image
//             <input
//               style={{ display: "none" }}
//               type="file"
//               id="file"
//               onChange={(e) => setFile(e.target.files[0])}
//               required
//             />
//           </label>

//           <div className="flex mt- space-x-2">
//             <button className="btn-1" onClick={handleClick}>
//               Publish
//             </button>

//             <button className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors duration-200 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
//               Save as a draft
//             </button>
//           </div>
//         </div>

//         <div className="item bg-[#f0f0fe] dark:bg-black text-black dark:text-[#f0f0fe] p-4 rounded-md shadow-sm">
//           <h1 className="font-semibold text-lg dark:text-white mb-4">Category</h1>
//           <div className="cat">
//             {["art", "science", "technology", "cinema", "design", "food"].map(
//               (category) => (
//                 <div key={category} className="flex items-center mb-2">
//                   <input
//                     type="radio"
//                     checked={cat === category}
//                     name="cat"
//                     value={category}
//                     id={category}
//                     onChange={(e) => setCat(e.target.value)}
//                     className="mr-2 accent-blue-500 dark:accent-blue-300 cursor-pointer transition-colors duration-200"
//                   />
//                   <label
//                     htmlFor={category}
//                     className="text-black dark:text-[#f0f0fe]"
//                   >
//                     {category.charAt(0).toUpperCase() + category.slice(1)}
//                   </label>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Write;




import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { uploadFile, createPost, updatePost } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

const Write = () => {
  const state = useLocation().state;
  const { token } = useAuth();
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [previewImgUrl, setPreviewImgUrl] = useState("");
  const [, setError] = useState();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    let imgUrl;
    try {
      if (file) {
        imgUrl = await uploadFile(file);
      }
    } catch (uploadError) {
      console.error(uploadError.message);
      return;
    }

    try {
      const postData = {
        title,
        desc: value,
        cat,
        img: file ? imgUrl.filename : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      };

      // Perform create/update action based on whether state is present
      if (state) {
        await updatePost(state.id, postData, token); // Pass token if required in your API function
      } else {
        await createPost(postData, token); // Pass token if required in your API function
      }

      navigate("/posts");
    } catch (err) {
      console.error("Post creation error:", err.response ? err.response.data : err.message);
      if (err.response?.status === 401) {
        setError("You are not authenticated! Please log in again.");
      }
    }
  };

  return (
    <div className="flex w-full justify-between p-6 bg-white dark:bg-[#000] overflow-x-hidden overflow-y-hidden ">
      <div className="content rounded-lg p-4 shadow-md transition-all duration-300 bg-[#f0f0fe] dark:bg-black text-black dark:text-[#f0f0fe]">
        <input
          type="text"
          placeholder="Post Title"
          required
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#000] dark:border-black dark:text-white transition-all duration-200"
        />
        <div className="editorContainer mb-4 ">
          <ReactQuill
            className="editor transition-all duration-300 dark:bg-[#000] dark:border-black text-black dark:text-[#f0f0fe]"
            theme="snow"
            placeholder='description'
            value={value}
            onChange={setValue}
            required
          />
        </div>
      </div>

      <div className="preview border w-96 p-4 rounded-lg bg-white dark:bg-black shadow-md">
        <h1 className="text-xl font-semibold mb-2 text-black dark:text-[#f0f0fe]">
          {title || "Preview Title"}
        </h1>
        <div
          className="quill-preview-content text-black dark:text-[#f0f0fe]"
          dangerouslySetInnerHTML={{ __html: value || "<p>Preview Content</p>" }}
        />
        {previewImgUrl && (
          <img
            src={previewImgUrl}
            alt="Selected"
            className="mt-4 rounded-lg"
          />
        )}
      </div>

      <div className="menu grid grid-cols-1 gap-6 border-red-500">
        <div className="flex flex-col w-72 justify-center bg-[#f0f0fe] dark:bg-black text-black dark:text-[#f0f0fe] p-4 pt-2 rounded-md shadow-sm space-y-2">
          <h1 className="font-bold text-xl mb-6 dark:text-white">Actions</h1>
          <span className="block">
            <b>Status: </b> Draft
          </span>
          <span className="block">
            <b>Visibility: </b> Public
          </span>

          <label className="file underline py-1 text-blue" htmlFor="file">
            Upload Image
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </label>

          <div className="flex mt- space-x-2">
            <button className="btn-1" onClick={handleClick}>
              Publish
            </button>

            <button className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors duration-200 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
              Save as a draft
            </button>
          </div>
        </div>

        <div className="item bg-[#f0f0fe] dark:bg-black text-black dark:text-[#f0f0fe] p-4 rounded-md shadow-sm">
          <h1 className="font-semibold text-lg dark:text-white mb-4">Category</h1>
          <div className="cat">
            {["art", "science", "technology", "cinema", "design", "food"].map(
              (category) => (
                <div key={category} className="flex items-center mb-2">
                  <input
                    type="radio"
                    checked={cat === category}
                    name="cat"
                    value={category}
                    id={category}
                    onChange={(e) => setCat(e.target.value)}
                    className="mr-2 accent-blue-500 dark:accent-blue-300 cursor-pointer transition-colors duration-200"
                  />
                  <label
                    htmlFor={category}
                    className="text-black dark:text-[#f0f0fe]"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </label>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
