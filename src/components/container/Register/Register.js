import React from "react";
// import "./login.css";

const Register = () => {
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
              <input id='email' type='email' />
              <label for='email'>Email</label>
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='id' type='text' />
              <label for='id'>ID</label>
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='pass' type='password' />
              <label for='pass'>Password</label>
            </div>
          </div>
          <div class="row">
            <a class="waves-effect waves-light btn-large grey"><i class="material-icons">add_circle_outline</i></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;