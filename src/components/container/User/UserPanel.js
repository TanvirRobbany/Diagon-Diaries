import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from './Dashboard';
import Categories from './Categories';
import BookBorrowed from './BookBorrowed';
import BookTableUser from '../Book Table/BookTableUser';
import BookTableStudent from '../Book Table/BookTableStudent';
// import CategoriesContainer from '../Categories Container/CategoriesContainer';

const UserPanel = () => {
    const handleLogout = () => {
        window.localStorage.clear();
        window.location.reload();
    }
    return (
        <Router>
            <Fragment>
                <div className="container" style={{ marginBottom: "25px" }}>
                    <div className="row" style={{ height: "700px", }}>
                        <div className="col s12 m12 l3 grey lighten-2" style={{ height: "100%", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                            <h3 >User Panel</h3>
                            <Link to="/user/dashboard" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Dashboard</Link>
                            {/* <Link to="/user/categories" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Book Categories</Link> */}
                            <Link to="/user/books" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Books</Link>
                            <Link to="/user/bookborrowed" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Book Borrowed</Link>
                            <button onClick={handleLogout} className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Logout</button>
                        </div>
                        <Switch>
                            <div className="col s12 m12 l9">                    
                                <Route exact path="/user/dashboard" component={Dashboard} />
                                <Route exact path="/user/bookborrowed" component={BookBorrowed} />
                                <Route exact path="/user/categories" component={Categories} />
                                {/* <Route exact path="/user/:id/books" component={BookTableUser} /> */}
                                <Route exact path="/user/books" component={BookTableStudent} />
                            </div>
                        </Switch>
                    </div>
                </div>
            </Fragment>
        </Router >
    )
}

export default UserPanel;
