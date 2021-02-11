import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from "../../../config/config";

const BookIssued = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = e.target;
        const issuedBook = {
            bookCode: formData.bookID.value,
            studentID: formData.userID.value
        }
        console.log(issuedBook);
        const options = {
            headers: {
                Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAwZjEzNmMyYjY0MDMyNzkwMzJlYjIxIn0sImlhdCI6MTYxMzAwNTE2MSwiZXhwIjoxNjEzMzY1MTYxfQ.iKINk6lV7hLRhhWMnWyHgsIFbXamElFrLHoe9qip9-Y"
            }
        }
        const res = await axios.post(`${BASE_URL}/api/books/issue`,issuedBook, options);
        console.log(res);
    }
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="col s12 m12 l5" style={{ paddingTop: "20%", paddingBottom: "20%", borderRadius: "10px" }}>
                <div className="blue-grey lighten-4" style={{ padding: "5%", borderRadius: "10px" }}>
                    <h3>Issue A Book</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <input type="text" name="bookID" requiered/>
                            <label className="black-text" style={{ fontSize: "20px" }}>Book Code:</label>
                        </div>
                        <div className="input-field">
                            <input type="text" name="userID" required/>
                            <label className="black-text" style={{ fontSize: "20px" }}>ID:</label>
                        </div>
                        <button class="waves-effect waves-light btn-large green lighten-2" style={{ width: "80%", height: "70%", borderRadius: "10px" }}>Issue Book</button>
                    </form>
                </div>
            </div>
            <div className="col s12 m12 l7 blue-grey lighten-4" style={{ height: "700px", borderRadius: "10px", overflowY: "scroll" }}>
                <h3>Issued Book List</h3>
                <form action="">
                    <div className="input-field">
                        <input type="text" id="search" />
                        <label className="black-text" style={{ fontSize: "20px" }} htmlFor="search">Search: </label>
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
                        <tr>
                            <td>B-101</td>
                            <td>Bengali book with a long Name very long Name very very long nameD</td>
                            <td>2016100000151</td>
                            {/* <td>50 BDT</td> */}
                            <td><Link className="waves-effect waves-light btn blue-grey lighten-2"><i class="small material-icons">add_box</i></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookIssued;
