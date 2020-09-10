import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import HomeText from './Home/HomeText';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import AboutUs from './About/AboutUs';

function App() {
  return (
    <Router>
    <div className="App">
      <Home/>
      <Navbar/>
      <div className="home">
      <Switch>
            <Route exact path="/" component={HomeText} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/login" component={Login} />
            {/* <Route component = {NotFound} /> */}
        </Switch>
        {/* <HomeText/> */}
        {/* <Login/> */}
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
