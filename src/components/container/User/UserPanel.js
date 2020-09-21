import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from './Dashboard';
import Categories from '../Admin/Categories';
import BookBorrowed from './BookBorrowed';
import user from '../../dummy/About/Picture/user.png';

const UserPanel = () => {
    return (
        <Router>
            <Fragment>
                <div className="container" style={{ marginBottom: "25px" }}>
                    <div className="row" style={{ height: "700px", }}>
                        <div className="col s12 m12 l3 grey lighten-2" style={{ height: "100%", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                            <h3 >User Panel</h3>
                            <Link to="/userdashboard" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Dashboard</Link>
                            <Link to="/usercategories" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Book Categories</Link>
                            <Link to="/userbookborrowed" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Book Borrowed</Link>
                            <Link className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Logout</Link>
                        </div>
                        <Switch>
                            <div className="col s12 m12 l9">                    
                                <Route exact path="/userdashboard" component={Dashboard} />
                                <Route exact path="/userbookborrowed" component={BookBorrowed} />
                                <Route exact path="/usercategories" component={Categories} />
                            </div>
                        </Switch>
                    </div>
                </div>
            </Fragment>
        </Router >
    )
}

export default UserPanel;
