import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { BASE_URL } from "../../../config/config";
import '../Book Table/BookTableUser.css'

const BookIssued = ({ isAdmin }) => {
    const [issuedBookData, setIssuedBookData] = useState([]);

    const handleSubmit = async (e) => {
        const formData = e.target;
        e.preventDefault();
        console.log(formData.bookID, formData.userID);
        const issuedBook = {
            bookID: formData.bookID.value,
            userID: formData.userID.value
        }
        console.log(issuedBook);
        const options = {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAyNzY0ODI2ODE1ZmIxNGE4ZTQ2OWQwIn0sImlhdCI6MTYxMzQ4MzYyMywiZXhwIjoxNjEzODQzNjIzfQ.giOu3BwnsGX5zUvfWym8zcErTbdowgWiySyAr_106c4"
            }
        }
        const res = await axios.post(`${BASE_URL}/api/books/issue`, issuedBook, options);
        console.log(res);
        // setTimeout(() => {alert("Book Issued")}, 100)
        getIssuedBookData();

    }

    const updateIssue = async (id) => {
        const res = await axios.put(`${BASE_URL}/api/books/issue/${id}`)
        console.log(res);
        getIssuedBookData();
        // setTimeout(() => {alert("Book Received")}, 1000)
    }

    const getIssuedBookData = async () => {
        const options = {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAyNzY0ODI2ODE1ZmIxNGE4ZTQ2OWQwIn0sImlhdCI6MTYxMzQ4MzYyMywiZXhwIjoxNjEzODQzNjIzfQ.giOu3BwnsGX5zUvfWym8zcErTbdowgWiySyAr_106c4"
            }
        }

        const res = await axios.get(`${BASE_URL}/api/books/issue`, options);
        console.log(res.data);
        setIssuedBookData(res.data);
    }

    // const handleSearch = async (e) => {
    //     e.preventDefault();
    //     // console.log(e.target.bookTitle.name);
    //     const formData = e.target
    //     const searchedIssuedBook = {
    //         query:formData.search.value,
    //     }
    //     console.log(searchedIssuedBook);
    //     const options = {
    //         headers: {
    //             Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAwZjEzNmMyYjY0MDMyNzkwMzJlYjIxIn0sImlhdCI6MTYxMzA2NzU4MywiZXhwIjoxNjEzNDI3NTgzfQ.Pw8rbL7VJOPTzs_P-uPBDHHbmje4ll8wk8MA5Nvf71U"
    //         }
    //     }
    //     const res = await axios.post(`${BASE_URL}/api/books/issue/search`,searchedIssuedBook,options);
    //     console.log(res);
    //     setIssuedBookData(res.data);
    // }

    // const resetSearch = (e) => {
    //     getIssuedBookData();
    // }

    useEffect(() => {
        getIssuedBookData();
    }, []);

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="col s12 m12 l5" style={{ paddingTop: "20%", paddingBottom: "20%", borderRadius: "10px" }}>
                <div className="blue-grey lighten-4" style={{ padding: "5%", borderRadius: "10px" }}>
                    <h3>Issue A Book</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <input type="text" name="bookID" requiered />
                            <label className="black-text" style={{ fontSize: "20px" }}>Book Code:</label>
                        </div>
                        <div className="input-field">
                            <input type="text" name="userID" required />
                            <label className="black-text" style={{ fontSize: "20px" }}>ID:</label>
                        </div>
                        <button type="submit" className="waves-effect waves-light btn-large green lighten-2" style={{ width: "80%", height: "70%", borderRadius: "10px" }}>Issue Book</button>
                    </form>
                </div>
            </div>
            <div className="col s12 m12 l7 blue-grey lighten-4" style={{ height: "700px", borderRadius: "10px", overflowY: "scroll" }}>
                <h3>Issued Book List</h3>
                {/* <form onSubmit={handleSearch}>
                <div className="search-container">
                        <div className="input-field">
                            <input type="text" name="search" />
                            <label className="black-text" style={{ fontSize: "20px" }} htmlFor="search">Search: </label>
                        </div>
                        <button type="submit" className="waves-effect waves-light btn blue-grey lighten-2" style={{marginRight: "1rem"}}><i class="small material-icons">search</i></button>
                        <button onClick={resetSearch} className="waves-effect waves-light btn blue-grey lighten-2" style={{marginRight: "1rem"}}><i class="small material-icons">arrow_back</i></button>
                        </div>
                </form> */}
                <table className="centered highlight">
                    <thead>
                        <tr>
                            <th>Book Code</th>
                            <th>Book Name</th>
                            <th>Student ID</th>
                            {/* <th>Fine</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {issuedBookData.map(issue =>
                            <tr>
                                <td>{issue.bookID.bookCode}</td>
                                <td>{issue.bookID.bookTitle}</td>
                                <td>{issue.userID.studentID}</td>
                                <td><button onClick={() => updateIssue(issue._id)} className={`waves-effect waves-light btn ${issue.isReceived ? 'disabled' : 'green'}`}><i class="small material-icons">add_box</i></button></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookIssued;
