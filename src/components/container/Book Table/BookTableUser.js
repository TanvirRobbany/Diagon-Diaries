import axios from 'axios';
import { BASE_URL } from '../../../config/config'
import React, { useEffect, useState } from 'react'
import {withRouter} from 'react-router-dom';

const BookTableUser = ({ match, isAdmin }) => {
    console.log(match.params.id)
    const [bookData, setBookData] = useState([]);
    const [page] = useState(match.params.id)
    console.log(isAdmin);
    useEffect(() => {
        getBookData();
    }, []);

    const getBookData = async () => {
        const options = {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAwZjEzNmMyYjY0MDMyNzkwMzJlYjIxIn0sImlhdCI6MTYxMzAwMDU4NCwiZXhwIjoxNjEzMzYwNTg0fQ.-eRkiey_X-PEAJJF_I26Z5MTEjFvGZy1IITy46NmZ-o"
            }
        }
        const res = await axios.get(`${BASE_URL}/api/books`, options);
        console.log(res.data)
        setBookData(res.data)
    }

    return (
        <div className="col s12 m12 l12">
            <div style={{ width: "100%", height: "100%" }}>
                <div className="col s12 m12 l12 blue-grey lighten-4" style={{ height: "700px", borderRadius: "10px", overflowY: "scroll" }}>
                    <h3>{page}</h3>
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
                                <th>Author Name</th>
                                {isAdmin && <th>Action</th>}
                            </tr>
                        </thead>

                        <tbody>
                            {/* <tr>
                                <td>CSE-101</td>
                                <td>Computer Organization And Design</td>
                                <td>David A. Patterson, John L. Hennessy</td> */}
                            {/* <td>50 BDT</td> */}
                            {/* <td><Link className="waves-effect waves-light btn blue-grey lighten-2"><i class="small material-icons">border_color</i></Link><Link className="waves-effect waves-light btn blue-grey lighten-2"><i class="small material-icons">delete</i></Link></td> */}
                            {/* </tr> */}
                            {bookData.map(book =>
                                book.category === page &&
                                <tr>
                                    <td>{book.bookCode}</td>
                                    <td>{book.bookTitle}</td>
                                    <td>{book.authorName}</td>
                                    {isAdmin && <td><button className="waves-effect waves-light btn blue-grey lighten-2"><i class="small material-icons">border_color</i></button><button className="waves-effect waves-light btn blue-grey lighten-2"><i class="small material-icons">delete</i></button></td>}

                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default withRouter(BookTableUser);
