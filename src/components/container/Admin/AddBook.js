import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import M from "materialize-css";
// import { Button } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../../../config/config";

const AddBook = ({isAdmin}) => {
    const handleSubmit = async (e) => {
        // e.preventDefault();
        console.log(e.target.bookTitle.name,e.target.bookTitle.value);
        const formData = e.target
        const book = {
            bookTitle:formData.bookTitle.value,
            bookCode:formData.bookCode.value,
            authorName:formData.authorName.value,
            category:formData.category.value,
            quantity:formData.quantity.value
        }
        console.log(book);
        const options = {
            headers: {
                Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAwZjEzNmMyYjY0MDMyNzkwMzJlYjIxIn0sImlhdCI6MTYxMzA2NzU4MywiZXhwIjoxNjEzNDI3NTgzfQ.Pw8rbL7VJOPTzs_P-uPBDHHbmje4ll8wk8MA5Nvf71U"
            }
        }
        const res = await axios.post(`${BASE_URL}/api/books`,book,options);
        console.log(res)
    }
    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h3>Add New Book</h3>
                <div className='input-field'>
                    <input type='text' name="bookTitle" required />
                    <label
                        className='white-text'
                        style={{ fontSize: "20px" }}
                        htmlFor='booktitle'
                    >
                        Book Title:
          </label>
                </div>
                <div className='input-field'>
                    <input type='text' name="authorName" required/>
                    <label
                        className='white-text'
                        style={{ fontSize: "20px" }}
                        htmlFor='authorname'
                    >
                        Author(s) Name(s):
          </label>
                </div>
                <div className='input-field'>
                    <input type='text' name='bookCode' required/>
                    <label
                        className='white-text'
                        style={{ fontSize: "20px" }}
                        htmlFor='bookcode'
                    >
                        Book Code:
                    </label>
                </div>
                {/* <div className='input-field'>
                    <input type='text' name='category' />
                    <label
                        className='white-text'
                        style={{ fontSize: "20px" }}
                        htmlFor='category'
                    >
                        Category:
          </label>
                </div> */}
                <div class='input-field'>
                    <select class='browser-deafault' name="category" required>
                        <option>Choose Category</option>
                        <option value='CSE'>CSE</option>
                        <option value='EEE'>EEE</option>
                        <option value='Textile'>Textile</option>
                        <option value='Architecture'>Architecture</option>
                        <option value='Pharmacy'>Pharmacy</option>
                        <option value='BBA'>BBA</option>
                        <option value='Economics'>Economics</option>
                        <option value='English'>English</option>
                        <option value='Bengali'>Bengali</option>
                        <option value='Religious'>Religious</option>
                        <option value='Magazine'>Magazine</option>
                        <option value='Journal'>Journal</option>
                    </select>
                </div>
                <div className='input-field'>
                    <input type='text' name='quantity' type='number' required/>
                    <label
                        className='white-text'
                        style={{ fontSize: "20px" }}
                        htmlFor='quantity'
                    >
                        Quantity:
          </label>
                </div>
                <button
                    class='waves-effect waves-light btn-large green lighten-2'
                    style={{ wnameth: "50%", height: "70%", borderRadius: "10px" }}
                    type='submit'
                >
                    Add Book
        </button>
            </form>
        </div>
    );
};

export default AddBook;
