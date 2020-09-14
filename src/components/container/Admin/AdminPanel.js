import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import AddBook from './AddBook';
import Categories from './Categories';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <Router>

            <Fragment>
                <div className="container">
                    <div class="row" style={{ height: "700px" }}>
                        <div class="col s12 m12 l3 grey lighten-2" style={{ height: "100%", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                            {/* <!-- Grey navigation panel

              This content will be:
          3-columns-wide on large screens,
          4-columns-wide on medium screens,
          12-columns-wide on small screens  --> */}
                            <h3 >Admin Panel</h3>
                            <a href="/admindashboard" class="waves-effect waves-light btn-large" style={{ width: "90%", borderRadius: "10px" }}>Dashboard</a>
                            <a href="/adminaddbook" class="waves-effect waves-light btn-large" style={{ width: "90%", borderRadius: "10px" }}>Add Book</a>
                            <a href="/admincategories" class="waves-effect waves-light btn-large" style={{ width: "90%", borderRadius: "10px" }}>Book Categories</a>
                            <a class="waves-effect waves-light btn-large" style={{ width: "90%", borderRadius: "10px" }}>Book Borrowed</a>
                            <a class="waves-effect waves-light btn-large" style={{ width: "90%", borderRadius: "10px" }}>Logout</a>
                        </div>
                        <Switch>
                            <div class="col s12 m12 l9" style={{ marginTop: "10px" }}>
                                {/* <!-- Teal page content
              This content will be:
          9-columns-wide on large screens,
          8-columns-wide on medium screens,
          12-columns-wide on small screens  --> */}
                                {/* 
                                    //// This is the Dashboard ////
                                <div className="row" style={{height: "340px"}}>
                            <div className="col s12 m6" style={{width: "90%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                                <a class="waves-effect waves-light btn-large green accent-3" style={{ width: "40%", height: "70%", borderRadius: "10px" }}>
                                    <h4>Total Books</h4>
                                    <br/>
                                    <h4>2500</h4>
                                </a>
                                <a class="waves-effect waves-light btn-large indigo accent-1" style={{ width: "40%", height: "70%", borderRadius: "10px" }}>
                                    <h4>Total Users</h4>
                                    <br/>
                                    <h4>5000</h4>
                                </a>
                            </div>
                        </div>
                        <div className="row" style={{height: "340px"}}>
                            <div className="col s12 m6" style={{width: "90%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                                <a class="waves-effect waves-light btn-large deep-purple accent-1" style={{ width: "40%", height: "70%", borderRadius: "10px" }}>
                                    <h4>Categories</h4>
                                    <br/>
                                    <h4>16</h4>
                                </a>
                                <a class="waves-effect waves-light btn-large yellow lighten-2" style={{ width: "40%", height: "70%", borderRadius: "10px" }}>
                                    <h4>Books Borrowed</h4>
                                    <br/>
                                    <h4>500</h4>
                                </a>
                            </div>
                        </div> 
                        //// Dashboard Ends here ////
                        */}
                                {/* 
                                //// Add Book Form here ////
                                <div className="container">
                                <div className="input-field">
                                    <input type="text" id="bookname"/>
                                    <label className="white-text" htmlFor="boolname">Book Name:</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" id="authorname"/>
                                    <label className="white-text" htmlFor="authorname">Author Name:</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" id="bookcode"/>
                                    <label className="white-text" htmlFor="bookcode">Book Code:</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" id="category"/>
                                    <label className="white-text" htmlFor="category">Category:</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" id="quantity"/>
                                    <label className="white-text" htmlFor="quantity">Quantity:</label>
                                </div>
                                <a class="waves-effect waves-light btn-large deep-purple accent-1" style={{ width: "40%", height: "70%", borderRadius: "10px" }}>Add Book</a>
                            </div> 
                            //// Add Book end here ////
                            */}
                                {/*
                                //// Categories starts here ////
                                <div class="row" style={{height: "150px"}}>

                                    <div class="col s12 m6 l3 ">
                                        <a class="waves-effect waves-light btn-large red darken-1" style={{width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Bengali</a>
                                    </div>
                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large yellow darken-3" style={{ width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>English</a>
                                    </div>
                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large light-green darken-3" style={{ width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Mathematics</a>
                                    </div>
                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large teal lighten-1" style={{ width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Science</a>
                                    </div>

                                </div>
                                <div class="row" style={{height: "150px"}}>

                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large deep-purple lighten-2" style={{width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Religious</a>
                                    </div>
                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large purple darken-3" style={{ width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>ICT</a>
                                    </div>
                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large brown darken-1" style={{ width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Sociology</a>
                                    </div>
                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large grey darken-3" style={{ width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Arts</a>
                                    </div>

                                </div>
                                <div class="row" style={{height: "150px"}}>

                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large pink accent-1" style={{width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>History</a>
                                    </div>
                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large light-green darken-4" style={{ width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Development</a>
                                    </div>
                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large green darken-4" style={{ width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Business</a>
                                    </div>
                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large lime darken-4" style={{ width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Economics</a>
                                    </div>

                                </div>
                                <div class="row" style={{height: "150px"}}>

                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large pink accent-1" style={{width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Literature</a>
                                    </div>
                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large green darken-2" style={{ width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Agriculture  </a>
                                    </div>
                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large  lime darken-4" style={{ width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Architecture</a>
                                    </div>
                                    <div class="col s12 m6 l3">
                                        <a class="waves-effect waves-light btn-large indigo darken-4" style={{ width: "100%", height: "125px",fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px"}}>Travel</a>
                                    </div>

                                </div>
                                //// Categories ends here ////
                                */}

                                <Route exact path="/admindashboard" component={Dashboard} />
                                <Route exact path="/adminaddbook" component={AddBook} />
                                <Route exact path="/admincategories" component={Categories} />
                            </div>
                        </Switch>
                    </div>
                </div>
            </Fragment>
        </Router>
    )
}

export default AdminPanel;
