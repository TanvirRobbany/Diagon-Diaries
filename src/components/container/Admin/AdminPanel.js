import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddBook from './AddBook';
import Categories from './Categories';
import BookIssued from './BookIssued';
import BookTableUser from '../Book Table/BookTableUser';
import Report from './Report'

const AdminPanel = () => {
    const handleLogout = () => {
        window.localStorage.clear();
        window.location.reload();
    }
    return (
            <Fragment>
                <div className="container" style={{marginBottom: "25px"}}>
                    <div className="row" style={{ height: "700px",}}>
                        <div className="col s12 m12 l3 grey lighten-2" style={{ height: "100%", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                            <h3 >Admin Panel</h3>
                            <Link to="/admin/dashboard" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Dashboard</Link>
                            <Link to="/admin/addbook" className="waves-effect waves-light btn-large blue-grey black-text lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Add Book</Link>
                            <Link to="/admin/categories" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Book Categories</Link>
                            <Link to="/admin/bookissued" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Book Borrowed</Link>
                            <Link to="/admin/report" className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Report</Link>
                            <button onClick={handleLogout} className="waves-effect waves-light btn-large black-text blue-grey lighten-2" style={{ width: "90%", fontSize: "20px", borderRadius: "10px", padding: "0" }}>Logout</button>
                        </div>
                        <Switch>
                            <div className="col s12 m12 l9">
                                <Route exact path="/admin/dashboard" component={Dashboard} />
                                <Route exact path="/admin/addbook" component={AddBook} />
                                <Route exact path="/admin/categories" component={Categories} />
                                <Route exact path="/admin/:id/books" render={()=><BookTableUser isAdmin={true}/>} />
                                <Route exact path="/admin/bookissued" component={BookIssued} />
                                <Route exact path="/admin/report" component={Report} />
                            </div>
                        </Switch>
                    </div>
                </div>
            </Fragment>
    )
}

export default AdminPanel;
