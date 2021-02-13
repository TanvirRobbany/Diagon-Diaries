import React from "react";
// import { Link } from 'react-router-dom';
import axios from 'axios';
import {BASE_URL} from "../../../config/config";

const Login = () => {

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const login = {
      email: formData.email.value,
      password: formData.password.value
    }
    console.log(login);
    const res = await axios.post(`${BASE_URL}/api/auth`,login);
    console.log(res);
    // localStorage.setItem('token',res.data.token);
    // localStorage.setItem('isAdmin',res.data.isAdmin);
  }

  return (
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
  );
};

export default Login;
