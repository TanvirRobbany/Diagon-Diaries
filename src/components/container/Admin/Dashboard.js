import React from 'react'

const Dashboard = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="row" style={{ height: "340px" }}>
                <div className="col s12 l66" style={{ width: "90%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <a class="waves-effect waves-light btn-large green accent-3" style={{ width: "40%", height: "70%", borderRadius: "10px" }}>
                        <h4>Total Books</h4>
                        <br />
                        <h4>2500</h4>
                    </a>
                    <a class="waves-effect waves-light btn-large indigo accent-1" style={{ width: "40%", height: "70%", borderRadius: "10px" }}>
                        <h4>Total Users</h4>
                        <br />
                        <h4>5000</h4>
                    </a>
                </div>
            </div>
            <div className="row" style={{ height: "340px" }}>
                <div className="col s12 l6" style={{ width: "90%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <a class="waves-effect waves-light btn-large deep-purple accent-1" style={{ width: "40%", height: "70%", borderRadius: "10px" }}>
                        <h4>Categories</h4>
                        <br />
                        <h4>16</h4>
                    </a>
                    <a class="waves-effect waves-light btn-large yellow lighten-2" style={{ width: "40%", height: "70%", borderRadius: "10px" }}>
                        <h4>Books Borrowed</h4>
                        <br />
                        <h4>500</h4>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
