import React from "react";
// import "./login.css";

const Login = () => {
  return (
    <div class='row'>
      <form class='col s12'>
        <div class='row'>
          <div class='input-field col s6'>
            <input id='input_text' type='text' />
            <label for='input_text'>Input text</label>
          </div>
        </div>
        <div class='row'>
          <div class='input-field col s6'>
            <input id='input_text' type='text' />
            <label for='input_text'>Input text</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
