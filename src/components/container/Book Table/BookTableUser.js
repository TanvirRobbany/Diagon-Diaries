import axios from 'axios';
import { BASE_URL } from '../../../config/config'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import './BookTableUser.css'

const BookTableUser = ({ match, isAdmin }) => {
    console.log(match.params.id)
    const [bookData, setBookData] = useState([]);
    const [editBook, setEditBook] = useState({});
    const [page] = useState(match.params.id)
    console.log(isAdmin);
    const [modalIsOpen, setIsOpen] = useState(false);

    const editOnClick = (book) => {
        setIsOpen(true);
        setEditBook(book);
    }

    const exitEditOnClick = () => {
        setIsOpen(false);
        setEditBook({});
    }

    const handleEdit = async (e) => {
        const options = {
            headers: {
                Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAwZjEzNmMyYjY0MDMyNzkwMzJlYjIxIn0sImlhdCI6MTYxMzA2NzU4MywiZXhwIjoxNjEzNDI3NTgzfQ.Pw8rbL7VJOPTzs_P-uPBDHHbmje4ll8wk8MA5Nvf71U"
            }
        }
        const res = await axios.put(`${BASE_URL}/api/books/${editBook._id}`,editBook,options);
        console.log(res)
    }

    const deleteBook = async (id) => {
        const res = await axios.delete(`${BASE_URL}/api/books/${id}`)
        console.log(res);
        getBookData();
    }

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
                                <th>Author Name</th>
                                <th>Quantity</th>
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
                                    <td>{book.quantity}</td>
                                    {isAdmin && <td><button className="waves-effect waves-light btn blue-grey lighten-2" onClick={() => editOnClick(book)} style={{marginRight: "1rem"}}><i class="small material-icons">border_color</i></button><button onClick={() => deleteBook(book._id)} className="waves-effect waves-light btn blue-grey lighten-2"><i class="small material-icons">delete</i></button></td>}

                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={modalIsOpen}
                onRequestClose={() => exitEditOnClick()}>
                <center>
                    <form onSubmit={handleEdit}>
                        <h3>Update Book</h3>
                        <div>
                            <label
                                className='black-text'
                                style={{ fontSize: "20px", float: "left" }}
                                htmlFor='booktitle'
                            >
                                Book Title:
          </label>
                            <input type='text' name="bookTitle" required value={editBook.bookTitle} onChange={(e) => { setEditBook({ ...editBook, [e.target.name]: e.target.value }) }} />
                        </div>
                        <div>
                            <label
                                className='black-text'
                                style={{ fontSize: "20px", float: "left" }}
                                htmlFor='authorname'
                            >
                                Author(s) Name(s):
          </label>
                            <input type='text' name="authorName" required value={editBook.authorName} onChange={(e) => { setEditBook({ ...editBook, [e.target.name]: e.target.value }) }} />
                        </div>
                        <div>
                            <label
                                className='black-text'
                                style={{ fontSize: "20px", float: "left" }}
                                htmlFor='bookcode'
                            >
                                Book Code:
                    </label>
                            <input type='text' name='bookCode' required value={editBook.bookCode} onChange={(e) => { setEditBook({ ...editBook, [e.target.name]: e.target.value }) }} />
                        </div>
                        <div>
                            <label
                                className='black-text'
                                style={{ fontSize: "20px", float: "left" }}
                            >
                                Quantity:
          </label>
                            <input type='text' name='quantity' type='number' required value={editBook.quantity} onChange={(e) => { setEditBook({ ...editBook, [e.target.name]: e.target.value }) }} />
                        </div>
                        <button type="submit"
                            class='waves-effect waves-light btn-large green lighten-2'
                            style={{ wnameth: "50%", height: "70%", borderRadius: "10px" }}
                            type='submit'
                        >
                            Update Book
        </button>
                    </form>
                </center>
            </Modal>
        </div>
    )
}

export default withRouter(BookTableUser);
