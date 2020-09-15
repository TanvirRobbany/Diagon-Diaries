import React from 'react';
import { Link } from 'react-router-dom';
const Categories = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="row" style={{ height: "150px" }}>

                <div className="col s12 m6 l3 ">
                    <Link className="waves-effect waves-light btn-large red darken-1" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Bengali</Link>
                </div>
                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large yellow darken-3" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>English</Link>
                </div>
                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large light-green darken-3" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Mathematics</Link>
                </div>
                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large teal lighten-1" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Science</Link>
                </div>

            </div>
            <div className="row" style={{ height: "150px" }}>

                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large deep-purple lighten-2" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Religious</Link>
                </div>
                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large purple darken-3" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>ICT</Link>
                </div>
                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large brown darken-1" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Sociology</Link>
                </div>
                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large grey darken-3" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Arts</Link>
                </div>

            </div>
            <div className="row" style={{ height: "150px" }}>

                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large pink accent-1" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>History</Link>
                </div>
                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large light-green darken-4" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Development</Link>
                </div>
                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large green darken-4" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Business</Link>
                </div>
                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large lime darken-4" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Economics</Link>
                </div>

            </div>
            <div className="row" style={{ height: "150px" }}>

                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large pink accent-1" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Literature</Link>
                </div>
                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large green darken-2" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Agriculture  </Link>
                </div>
                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large  lime darken-4" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Architecture</Link>
                </div>
                <div className="col s12 m6 l3">
                    <Link className="waves-effect waves-light btn-large indigo darken-4" style={{ width: "100%", height: "125px", fontSize: "22px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>Travel</Link>
                </div>

            </div>
        </div>
    )
}

export default Categories;
