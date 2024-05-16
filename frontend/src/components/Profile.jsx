/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";
import './Profile.css'
import PostDetails from "./PostDetails"
const Profile = () => {
  const [data,setData]=useState([])
  const [show,setShow]=useState(false)
  const [posts,setPosts]=useState([])

  const toggleComments=(posts)=>{
    if(show){
      setShow(false)
    }else{
      setShow(true)
      setPosts(posts)
    }
  }

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
          <h1>{JSON.parse(localStorage.getItem("user")).name}</h1>
          <div className="profile-info">
            <p>{data.length} posts</p>
            <p>40 folowwers</p>
            <p>40  following</p>
          </div>
        </div>
      </div>
      <hr style={{width:"90%",opacity:"0.8",margin:"25px auto"}}/>
      {/* gallery */}
      <div className="gallery">
      {
        data.map((pics)=>{
          return(
            <>
            <img key={pics._id} src={pics.image} alt="" className="gallery-image" onClick={()=>{toggleComments(pics)}}/>
            </>
          )
        })
      }
      </div>
      {/* {
        show && <PostDetails  item={posts}/>
      } */}
    </div>
  );
};

export default Profile;
