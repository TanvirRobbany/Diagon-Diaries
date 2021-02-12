import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/dummy/Home/Home";
import Navbar from "./components/dummy/Navbar/Navbar";
import HomeText from "./components/dummy/Home/HomeText";
// import Footer from "./components/dummy/Footer/Footer";
import Login from "./components/container/Login/Login";
import AboutUs from "./components/dummy/About/AboutUs";
import Register from "./components/container/Register/Register";
import AdminPanel from "./components/container/Admin/AdminPanel";
import UserPanel from "./components/container/User/UserPanel";

function App() {
  const [isLoggedIn] = useState(true);
  const [isLoggedInAdmin] = useState(false);
  return (
    <Router>
      {isLoggedInAdmin ? (
        <div className='App'>
          <Home />
          <AdminPanel />
        </div>
      ) : isLoggedIn ? (
        <div className='App'>
          <Home />
          <UserPanel />
        </div>
      ) : (
        <div className='App'>
          <Home />
          <Navbar />
          <div classname='home'>
            <Switch>
              <Route exact path='/' component={HomeText} />
              <Route exact path='/aboutus' component={AboutUs} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
            {/* <Footer /> */}
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
