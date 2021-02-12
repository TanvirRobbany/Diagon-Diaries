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
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAwZjEzNmMyYjY0MDMyNzkwMzJlYjIxIn0sImlhdCI6MTYxMzA2NzU4MywiZXhwIjoxNjEzNDI3NTgzfQ.Pw8rbL7VJOPTzs_P-uPBDHHbmje4ll8wk8MA5Nvf71U"
            }
        }
        const res = await axios.post(`${BASE_URL}/api/books/issue`, issuedBook, options);
        console.log(res);
    }

    const removeIssue = async (id) =>{
        const res = await axios.delete(`${BASE_URL}/api/books/issue/${id}`)
        console.log(res);
        getIssuedBookData();
    } 

    const getIssuedBookData = async () => {
        const options = {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAwZjEzNmMyYjY0MDMyNzkwMzJlYjIxIn0sImlhdCI6MTYxMzA2NzU4MywiZXhwIjoxNjEzNDI3NTgzfQ.Pw8rbL7VJOPTzs_P-uPBDHHbmje4ll8wk8MA5Nvf71U"
            }
        }

        const res = await axios.get(`${BASE_URL}/api/books/issue`, options);
        console.log(res.data);
        setIssuedBookData(res.data);
    }

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
                <form action="">
                <div className="search-container">
                        <div className="input-field">
                            <input type="text" id="search" />
                            <label className="black-text" style={{ fontSize: "20px" }} htmlFor="search">Search: </label>
                        </div>
                        <button className="waves-effect waves-light btn blue-grey lighten-2" style={{marginRight: "1rem"}}><i class="small material-icons">search</i></button>
                        <button className="waves-effect waves-light btn blue-grey lighten-2" style={{marginRight: "1rem"}}><i class="small material-icons">arrow_back</i></button>
                        </div>
                </form>
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
                                <td><button onClick={()=>removeIssue(issue._id)} className="waves-effect waves-light btn blue-grey lighten-2"><i class="small material-icons">add_box</i></button></td>
                            </tr>)}
                        {/* <tr>
                            <td>B-101</td>
                            <td>Bengali book with a long Name very long Name very very long nameD</td>
                            <td>2016100000151</td>
                            <td>50 BDT</td>
                            <td><Link className="waves-effect waves-light btn blue-grey lighten-2"><i class="small material-icons">add_box</i></Link></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookIssued;
