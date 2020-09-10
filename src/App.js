import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/dummy/Home/Home";
import Navbar from "./components/dummy/Navbar/Navbar";
import HomeText from "./components/dummy/Home/HomeText";
import Footer from "./components/dummy/Footer/Footer";
import Login from "./components/container/Login/Login";
import AboutUs from "./components/dummy/About/AboutUs";

function App() {
  return (
    <Router>
      <div className='App '>
        <Home />
        <Navbar />
        <div className='home'>
          <Switch>
            <Route exact path='/' component={HomeText} />
            <Route exact path='/aboutus' component={AboutUs} />
            <Route exact path='/login' component={Login} />
          </Switch>
          {/* <HomeText/> */}
          {/* <Login/> */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
