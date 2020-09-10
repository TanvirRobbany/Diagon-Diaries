import React from "react";
// import "./login.css";

const Login = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div class='row'>
        <form class='col s12'>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='name' type='text' />
              <label for='name'>Name</label>
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='pass' type='text' />
              <label for='pass'>Password</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
