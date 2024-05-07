/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/signup");
    }

    fetch("http://localhost:5000/post/allposts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data)
        setData(data.data)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home">
      {/* card */}
      {Array.isArray(data) && data?.map((post, index) => (
        <div key={index} className="card">
          {/* card-header */}
          <div className="card-header">
            <div className="card-pic">
              <img
                src="https://media.istockphoto.com/id/1496615764/photo/cheerful-young-woman-with-eyeglasses-smiling-and-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=6lBkFoVEGPrC87iy4zNldvnCUPFY3ta1MGxmHyTJzIA="
                alt=""
              />
            </div>
            <h5>{post.postedBy.username}</h5>
          </div>
          {/* card-image */}
          <div className="card-image">
            <img src={post.image} alt="Post" />
          </div>
          {/* card content */}
          <div className="card-content">
            <span className="material-symbols-outlined">favorite</span>
            <p>1 Like</p>
            <p>{post.body}</p>
          </div>
          {/* add_comment */}
          <div className="add-comment">
            <span className="material-symbols-outlined">
              sentiment_satisfied
            </span>
            <input type="text" placeholder="add a comment" />
            <button className="comment">Post</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
