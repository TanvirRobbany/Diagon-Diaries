import React from 'react'

const Dashboard = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="row" style={{ height: "340px" }}>
                <div className="col s12 m6 l6 ">
                    <a className="waves-effect waves-light btn-large indigo lighten-2" style={{ width: "90%", height: "300px", fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>
                        <h4>Total Books</h4>
                        <br />
                        <h3>2500</h3>
                    </a>
                </div>
                <div className="col s12 m6 l6">
                    <a className="waves-effect waves-light btn-large purple lighten-2" style={{ width: "90%", height: "300px", fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>
                        <h4>Total Users</h4>
                        <br />
                        <h3>5000</h3>
                    </a>
                </div>

            </div>
            <div className="row" style={{ height: "340px" }}>

                <div className="col s12 m6 l6">
                    <a className="waves-effect waves-light btn-large purple lighten-2" style={{ width: "90%", height: "300px", fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>
                        <h4>Categories</h4>
                        <br />
                        <h3>16</h3>
                    </a>
                </div>
                <div className="col s12 m6 l6">
                    <a className="waves-effect waves-light btn-large indigo lighten-2" style={{ width: "90%", height: "300px", fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>
                        <h4>Books Borrowed</h4>
                        <br />
                        <h3>500</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
