// "use client";

import {Navigate, Route, Routes} from 'react-router-dom';
// import "./App.css";
// import Login from  "./pages/login/Login";
// import Signup from './pages/signup/SignUp';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const {authUser}=useAuthContext();
  

  return (
    
    <div className='p-4 h-screen  flex items-center justify-center '>
    <Routes>
    <Route path="/" element={authUser?<Home/> : <Navigate to={"/login"}/>}/>
    <Route path="/login" element={authUser?<Navigate to={"/"}/>:<Login/>}/>
    <Route path="/signup" element={authUser?<Navigate to={"/"}/>:<SignUp/>}/>

    </Routes>
    <Toaster/>
    {/* <div className="bg-[url('/bg1.jpg')] h-96 bg-cover bg-no-repeat bg-center"> */}

    {/* <Signup /> */}
    {/* <Home/> */}
    {/* <Login/> */}

 
</div>
  );
}


export default App;
