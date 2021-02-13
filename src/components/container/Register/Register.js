import React from "react";
// import { Link } from 'react-router-dom';
import axios from 'axios';
import {BASE_URL} from "../../../config/config";

const Register = ({history}) => {

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
    const formData = e.target;
    const user = {
      name: formData.name.value,
      email: formData.email.value,
      studentID: formData.studentID.value,
      password: formData.password.value
    }
    console.log(user);
    const res = await axios.post(`${BASE_URL}/api/users`,user);
    console.log(res);
    console.log("clicked");
    alert("Successfully Registered");
    history.push("/login");
    } catch (error) {
      console.log(error);
    }
    // e.preventDefault();
    // const formData = e.target;
    // const user = {
    //   name: formData.name.value,
    //   email: formData.email.value,
    //   studentID: formData.studentID.value,
    //   password: formData.password.value
    // }
    // console.log(user);
    // const res = await axios.post(`${BASE_URL}/api/users`,user);
    // console.log(res);
    // console.log("clicked");
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className='row'>
        <form className='col s12' onSubmit={handleRegister}>
          <div  className='row'>
            <div className='input-field col s12'>
              <input type='text' name="name" required/>
              <label className='white-text' htmlFor='name' style={{ fontSize: "20px" }}>Name</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input type='email' name="email" required/>
              <label className='white-text' htmlFor='email' style={{ fontSize: "20px" }}>Email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input type='text' name="studentID" required/>
              <label className='white-text' htmlFor='id' style={{ fontSize: "20px" }}>ID</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input type='password' name="password" required/>
              <label className='white-text' htmlFor='pass' style={{ fontSize: "20px" }}>Password</label>
            </div>
          </div>
          <div className="row">
            <button type="submit" className="waves-effect waves-light btn-large grey"><i className="material-icons">add_circle_outline</i></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
