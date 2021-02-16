import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from "../../../config/config";


const Dashboard = () => {
    const [allBookCount, setAllBookCount] = useState([]);
    const [allIssuedBookCount, setAllIssuedBookCount] = useState([]);
    const [allUserCount, setAllUserCount] = useState([]);

    const getAllBookCount = async () => {
        const options = {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAyNzY0ODI2ODE1ZmIxNGE4ZTQ2OWQwIn0sImlhdCI6MTYxMzQ4MzYyMywiZXhwIjoxNjEzODQzNjIzfQ.giOu3BwnsGX5zUvfWym8zcErTbdowgWiySyAr_106c4"
            }
        }

        const res = await axios.get(`${BASE_URL}/api/books`, options);
        console.log(res.data);
        setAllBookCount(res.data);
    }

    const getAllIssuedBookCount = async () => {
        const options = {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAyNzY0ODI2ODE1ZmIxNGE4ZTQ2OWQwIn0sImlhdCI6MTYxMzQ4MzYyMywiZXhwIjoxNjEzODQzNjIzfQ.giOu3BwnsGX5zUvfWym8zcErTbdowgWiySyAr_106c4"
            }
        }

        const res = await axios.get(`${BASE_URL}/api/books/issue`, options);
        console.log(res.data);
        setAllIssuedBookCount(res.data);
    }

    const getAllUserCount = async () => {
        const options = {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAyNzY0ODI2ODE1ZmIxNGE4ZTQ2OWQwIn0sImlhdCI6MTYxMzQ4MzYyMywiZXhwIjoxNjEzODQzNjIzfQ.giOu3BwnsGX5zUvfWym8zcErTbdowgWiySyAr_106c4"
            }
        }

        const res = await axios.get(`${BASE_URL}/api/users`, options);
        console.log(res.data);
        setAllUserCount(res.data);
    }

    useEffect(() => {
        getAllBookCount();
        getAllIssuedBookCount();
        getAllUserCount();
    }, [])
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="row" style={{ height: "340px" }}>
                <div className="col s12 m6 l6 ">
                    <div className="waves-effect waves-light btn-large indigo lighten-2" style={{ width: "90%", height: "300px", fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>
                        <h4>Total Books</h4>
                        <br />
                        <h3>{allBookCount.length}</h3>
                    </div>
                </div>
                <div className="col s12 m6 l6">
                    <div className="waves-effect waves-light btn-large purple lighten-2" style={{ width: "90%", height: "300px", fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>
                        <h4>Total Users</h4>
                        <br />
                        <h3>{allUserCount.length}</h3>
                    </div>
                </div>

            </div>
            <div className="row" style={{ height: "340px" }}>

                <div className="col s12 m6 l6">
                    <div className="waves-effect waves-light btn-large purple lighten-2" style={{ width: "90%", height: "300px", fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>
                        <h4>Categories</h4>
                        <br />
                        <h3>16</h3>
                    </div>
                </div>
                <div className="col s12 m6 l6">
                    <div className="waves-effect waves-light btn-large indigo lighten-2" style={{ width: "90%", height: "300px", fontSize: "25px", padding: "38px 0px 0px 0px", margin: "10px", borderRadius: "10px" }}>
                        <h4>Books Borrowed</h4>
                        <br />
                        <h3>{allIssuedBookCount.length}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
