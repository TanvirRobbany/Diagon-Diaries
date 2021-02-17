import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import axios from 'axios';
import {BASE_URL} from "../../../config/config";
import { Redirect, withRouter } from 'react-router-dom';
import Navbar from '../../dummy/Navbar/Navbar';


const Login = ({history}) => {


  const [isAdmin,setIsAdmin]=useState(null)
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const login = {
      email: formData.email.value,
      password: formData.password.value
    }
    console.log(login);
    try {
      const res = await axios.post(`${BASE_URL}/api/auth`,login);
      console.log(res);
      setIsAdmin(res.data.isAdmin);
      window.localStorage.setItem('isAdmin',res.data.isAdmin);
      window.localStorage.setItem('token',res.data.token);
      window.localStorage.setItem('userID',res.data.userID)
      window.localStorage.setItem('userName',res.data.userName)
      window.localStorage.setItem('userId',res.data.userId)
      // setTimeout(() => {
        
      // }, 10000);

    } catch (error) {
      alert("Login Failed")
    }
  }

  useEffect(()=>{
    if(isAdmin!==null){
      // setTimeout(() => {
        if( isAdmin ){history.push("/admin/panel");window.location.reload();}
        else {history.push("/user/panel");window.location.reload();}
      // }, 5000);
  
    }
  },[isAdmin])

  return (
    <>
    {/* {isAdmin === true  && <Redirect to={'/admin/panel'}/>} */}
    <Navbar/>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className='row'>
        <form className='col s12' onSubmit={handleLogin}>
          <div className='row'>
            <div className='input-field col s12'>
              <input name='email' type='text' />
              <label className='white-text' htmlFor='email' style={{ fontSize: "20px" }}>Email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input name='password' type='password' />
              <label className='white-text' htmlFor='password' style={{ fontSize: "20px" }}>Password</label>
            </div>
          </div>
          <div className="row">
            <button type="submit" className="waves-effect waves-light btn-large grey"><i className="material-icons">forward</i></button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
