// import React from 'react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../config/config';




const BookBorrowed = () => {
    const [issuedBookData, setIssuedBookData] = useState([]);

    const userIDLocal = localStorage.getItem("userID");
    console.log(userIDLocal);
    const getIssuedBookData = async () => {
        const options = {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        }
        const res = await axios.get(`${BASE_URL}/api/books/issue`, options);
        console.log(res.data)
        setIssuedBookData(res.data)
    }
    // console.log(userIDLocal);
    // console.log(issuedBookData);

    useEffect(() => {
        getIssuedBookData();
    }, []);

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="col s12 m12 l12 blue-grey lighten-4" style={{ height: "700px", borderRadius: "10px", overflowY: "scroll" }}>
                <h3>Borrowed Book List</h3>
                {/* <form action="">
                    <div className="input-field">
                        <input type="text" id="search" />
                        <label className="black-text" style={{ fontSize: "20px" }} htmlFor="search">Search: </label>
                    </div>
                </form> */}
                <table className="centered highlight">
                    <thead>
                        <tr>
                            <th>Book Code</th>
                            <th>Book Name</th>
                            <th>Student ID</th>
                            {/* <th>Remaining Day(s)</th> */}
                            {/* <th>Expired Day(s)</th> */}
                            {/* <th>Fine</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        {issuedBookData.map(book =>
                        book.userID._id === userIDLocal && !book.isReceived &&
                        <tr>
                            <td>{book.bookID.bookCode}</td>
                            <td>{book.bookID.bookTitle}</td>
                            <td>{book.userID.studentID}</td>
                            {/* <td>2</td> */}
                            {/* <td>0</td> */}
                            {/* <td>50 BDT</td> */}
                        </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookBorrowed;
