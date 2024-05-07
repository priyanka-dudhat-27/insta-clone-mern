/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";
import './Profile.css'

const Profile = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/post/mypost",{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("jwt")
      }
    })
    .then((res)=>res.json())
    .then((data)=>setData(data.data))
    .catch((error)=>console.log(error))
  },[])
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
      {
        data.map((item)=>{
          return(
            <>
            <img key={item._id} src={item.image} alt="" className="gallery-image"/>
            </>
          )
        })
      }
      </div>
    </div>
  );
};

export default Profile;
