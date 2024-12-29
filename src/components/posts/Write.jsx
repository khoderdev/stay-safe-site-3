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
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewImgUrl(objectUrl);

      // Clean up the object URL when the component unmounts or file changes
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  const handleClick = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    let imgUrl = "";
    try {
      if (file) {
        imgUrl = await uploadFile(file);
      }
    } catch (uploadError) {
      console.error(uploadError.message);
      setError("Image upload failed. Please try again.");
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
        await updatePost(state.id, postData, token);
      } else {
        await createPost(postData, token);
      }

      navigate("/posts");
    } catch (err) {
      console.error("Post creation error:", err.response ? err.response.data : err.message);
      if (err.response?.status === 401) {
        setError("You are not authenticated! Please log in again.");
      } else {
        setError("An error occurred while creating the post. Please try again.");
      }
    }
  };

  return (
    <div className="flex w-full justify-between p-6 bg-white-fg dark:bg-[#000] overflow-x-hidden overflow-y-hidden">
      <div className="content rounded-lg p-4 shadow-md transition-all duration-300 bg-white-bg dark:bg-black text-black dark:text-white-bg">
        <input
          type="text"
          placeholder="Post Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:bg-[#000] dark:border-black dark:text-white-bg transition-all duration-200"
        />
        <div className="editorContainer mb-4">
          <ReactQuill
            className="editor transition-all duration-300 dark:bg-[#000] dark:border-black text-black dark:text-white-bg"
            theme="snow"
            placeholder='description'
            value={value}
            onChange={setValue}
            required
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
      </div>

      <div className="preview border w-96 p-4 rounded-lg bg-white-fg dark:bg-black shadow-md">
        <h1 className="text-xl font-semibold mb-2 text-black dark:text-white-bg">
          {title || "Preview Title"}
        </h1>
        <div
          className="quill-preview-content text-black dark:text-white-bg"
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
        <div className="flex flex-col w-72 justify-center bg-white-bg dark:bg-black text-black dark:text-white-bg p-4 pt-2 rounded-md shadow-xs space-y-2">
          <h1 className="font-bold text-xl mb-6 dark:text-white-bg">Actions</h1>
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
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </label>

          <div className="flex mt- space-x-2">
            <button className="btn-1" onClick={handleClick}>
              Publish
            </button>

            <button className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors duration-200 dark:bg-gray-600 dark:text-white-bg dark:hover:bg-gray-500">
              Save as a draft
            </button>
          </div>
        </div>

        <div className="item bg-white-bg dark:bg-black text-black dark:text-white-bg p-4 rounded-md shadow-xs">
          <h1 className="font-semibold text-lg dark:text-white-bg mb-4">Category</h1>
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
                    className="text-black dark:text-white-bg"
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
