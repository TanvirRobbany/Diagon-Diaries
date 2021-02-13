import React, {useEffect,useState} from 'react';
import user from '../../dummy/About/Picture/user.png';


const Dashboard = () => {

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="col s12 m12 l6" style={{ paddingTop: "20%", paddingBottom: "20%", borderRadius: "10px" }}>
                <div className="blue-grey lighten-4" style={{ padding: "5%", borderRadius: "10px" }}>
                    <img src={user} alt="" style={{ width: "200px", height: "150px" }} />
                    <h5>Name: New User</h5>
                    <h5>ID: 2000000000000</h5>
                </div>
            </div>
            <div className="col s12 m12 l6" style={{ paddingTop: "20%", paddingBottom: "20%", borderRadius: "10px" }}>
                <div className="blue-grey lighten-4" style={{ padding: "5%", borderRadius: "10px" }}>
                    <h3>General Information</h3>
                    <br />
                    <h5>Total Books Borrowed: 15</h5>
                    <h5>Currently Borrowed Books: 2</h5>
                    {/* <h5>Total Fine: 0 /=</h5> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
