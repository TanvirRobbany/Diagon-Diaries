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
                    <div className="row" style={{ height: "700px" }}>
                        <div className="col s12 m12 l3 grey lighten-2" style={{ height: "100%", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                            <h3 >Admin Panel</h3>
                            <a href="/admindashboard" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px" }}>Dashboard</a>
                            <a href="/adminaddbook" className="waves-effect waves-light btn-large blue-grey black-text lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px" }}>Add Book</a>
                            <a href="/admincategories" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px" }}>Book Categories</a>
                            <a className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px" }}>Book Borrowed</a>
                            <a className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px" }}>Logout</a>
                        </div>
                        <Switch>
                            <div className="col s12 m12 l9" style={{ marginTop: "10px" }}>
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
