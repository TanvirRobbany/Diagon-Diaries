import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import AddBook from './AddBook';
import Categories from './Categories';
import BookBorrowed from './BookBorrowed';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <Router>

            <Fragment>
                <div className="container" style={{marginBottom: "25px"}}>
                    <div className="row" style={{ height: "700px",}}>
                        <div className="col s12 m12 l4 grey lighten-2" style={{ height: "100%", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                            <h3 >Admin Panel</h3>
                            <Link to="/admindashboard" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px" }}>Dashboard</Link>
                            <Link to="/adminaddbook" className="waves-effect waves-light btn-large blue-grey black-text lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px" }}>Add Book</Link>
                            <Link to="/admincategories" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", padding: "0px 0px 0px 0px", borderRadius: "10px" }}>Book Categories</Link>
                            <Link to="/adminbookborrowed" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px" }}>Book Borrowed</Link>
                            <Link className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px" }}>Logout</Link>
                        </div>
                        <Switch>
                            <div className="col s12 m12 l8" >
                                <Route exact path="/admindashboard" component={Dashboard} />
                                <Route exact path="/adminaddbook" component={AddBook} />
                                <Route exact path="/admincategories" component={Categories} />
                                <Route exact path="/adminbookborrowed" component={BookBorrowed} />
                            </div>
                        </Switch>
                    </div>
                </div>
            </Fragment>
        </Router >
    )
}

export default AdminPanel;
