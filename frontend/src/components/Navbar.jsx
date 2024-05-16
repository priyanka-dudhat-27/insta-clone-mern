/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import logo from '/images/insta-logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { LoginContext } from '../context/ContextLogin'

const Navber = ({login}) => {
  const {setOpenModal} =useContext(LoginContext)
  const loginStatus=()=>{
    const token=localStorage.getItem('jwt');
    if(token || login){
      return [
        <>
          <Link to="/profile"><li>Profile</li></Link>
          <Link to="/createpost"><li>Create Post</li></Link>
          <Link to="/post/myfollowingpost" style={{marginLeft:"20px"}}><li>My Following</li></Link>
          <Link to={""}>
            <button className='primaryBtn' onClick={()=>setOpenModal(true)}>Logout</button>
          </Link>
        </>
      ]
    }else{
      return [
        <>
         <Link to="/signup"><li>SignUp</li></Link>
          <Link to="/signin"><li>SignIn</li></Link>
        </>
      ]
    }
  }
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" />
        <ul className='nav-menu'>
           {
            loginStatus()
           }
        </ul>
    </div>
  )
}

export default Navber