/* eslint-disable no-unused-vars */
import React,{createContext,useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import SignIn from './components/SignIn'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './components/CreatePost'
import { LoginContext } from './context/ContextLogin'
import Modal from './components/Modal'

const App = () => {
  const [userLogin,setUserLogin]=useState(false);
  const [openModal,setOpenModal]=useState(false);
  return (
    <BrowserRouter>
    <div>
      <LoginContext.Provider value={{setUserLogin,setOpenModal}}>
      <Navbar login={userLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/createpost' element={<CreatePost/>}></Route>
      </Routes>
      <ToastContainer theme="dark" />
      { openModal && <Modal setOpenModal={setOpenModal}></Modal>}
      </LoginContext.Provider>
    </div>
    </BrowserRouter>
  )
}

export default App