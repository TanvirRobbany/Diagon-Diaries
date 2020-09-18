import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const AddBook = () => {

    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <div className='container'>
            <form action=''>
                <h3>Add New Book</h3>
                <div className='input-field'>
                    <input type='text' id='booktitle' />
                    <label
                        className='white-text'
                        style={{ fontSize: "20px" }}
                        htmlFor='booktitle'
                    >
                        Book Title:
          </label>
                </div>
                <div className='input-field'>
                    <input type='text' id='authorname' />
                    <label
                        className='white-text'
                        style={{ fontSize: "20px" }}
                        htmlFor='authorname'
                    >
                        Author(s) Name(s):
          </label>
                </div>
                <div className='input-field'>
                    <input type='text' id='bookcode' />
                    <label
                        className='white-text'
                        style={{ fontSize: "20px" }}
                        htmlFor='bookcode'
                    >
                        Book Code:
                    </label>
                </div>
                {/* <div className='input-field'>
                    <input type='text' id='category' />
                    <label
                        className='white-text'
                        style={{ fontSize: "20px" }}
                        htmlFor='category'
                    >
                        Category:
          </label>
                </div> */}
                <div class='input-field'>
                    <select class='browser-deafault'>
                        <option>Choose Category</option>
                        <option value='1'>CSE</option>
                        <option value='2'>EEE</option>
                        <option value='3'>Textile</option>
                        <option value='4'>Architecture</option>
                        <option value='5'>Pharmacy</option>
                        <option value='6'>BBA</option>
                        <option value='7'>Economics</option>
                        <option value='8'>English</option>
                        <option value='9'>Bengali</option>
                        <option value='10'>Religious</option>
                        <option value='11'>Magazine</option>
                        <option value='12'>Journal</option>
                    </select>
                </div>
                <div className='input-field'>
                    <input type='text' id='quantity' />
                    <label
                        className='white-text'
                        style={{ fontSize: "20px" }}
                        htmlFor='quantity'
                    >
                        Quantity:
          </label>
                </div>
                <Link
                    class='waves-effect waves-light btn-large green lighten-2'
                    style={{ width: "50%", height: "70%", borderRadius: "10px" }}
                >
                    Add Book
        </Link>
            </form>
        </div>
    );
};

export default AddBook;
