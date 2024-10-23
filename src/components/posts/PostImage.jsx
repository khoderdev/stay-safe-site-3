import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>

          <h2 className="text-2xl font-bold">{post.title}</h2>
          {/* <button className="btn-1">Read More</button> */}
          <img src={`../upload/${post?.img}`} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Menu;