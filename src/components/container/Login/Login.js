import React from "react";


const Login = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className='row'>
        <form className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <input id='name' type='text' />
              <label for='name'>Name</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input id='pass' type='password' />
              <label for='pass'>Password</label>
            </div>
          </div>
          <div className="row">
            <a className="waves-effect waves-light btn-large grey"><i className="material-icons">forward</i></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
