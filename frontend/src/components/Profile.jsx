/* eslint-disable no-unused-vars */
import React from "react";
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
      {/* profile-frame */}
      <div className="profile-frame">
        {/* profile-pic */}
        <div className="profile-pic">
          <img
          src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <div className="profile-data">
          <h1>Pia Dudhat</h1>
          <div className="profile-info">
            <p>40 posts</p>
            <p>40 folowwers</p>
            <p>40 following</p>
          </div>
        </div>
      </div>
      <hr style={{width:"90%",opacity:"0.8",margin:"25px auto"}}/>
      {/* gallery */}
      <div className="gallery">
      <img
          src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0&h=180"
            alt=""
          />
          <img
          src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0&h=180"
            alt=""
          />
          <img
          src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0&h=180"
            alt=""
          />
          <img
          src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0&h=180"
            alt=""
          />
          <img
          src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0&h=180"
            alt=""
          />
          <img
          src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0&h=180"
            alt=""
          />
      </div>
    </div>
  );
};

export default Profile;
