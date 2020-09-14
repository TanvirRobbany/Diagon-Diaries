import React from 'react'

const AddBook = () => {
    return (
        <div className="container">
            <div className="input-field">
                <input type="text" id="bookname" />
                <label className="white-text" htmlFor="boolname">Book Name:</label>
            </div>
            <div className="input-field">
                <input type="text" id="authorname" />
                <label className="white-text" htmlFor="authorname">Author Name:</label>
            </div>
            <div className="input-field">
                <input type="text" id="bookcode" />
                <label className="white-text" htmlFor="bookcode">Book Code:</label>
            </div>
            <div className="input-field">
                <input type="text" id="category" />
                <label className="white-text" htmlFor="category">Category:</label>
            </div>
            <div className="input-field">
                <input type="text" id="quantity" />
                <label className="white-text" htmlFor="quantity">Quantity:</label>
            </div>
            <a class="waves-effect waves-light btn-large deep-purple accent-1" style={{ width: "40%", height: "70%", borderRadius: "10px" }}>Add Book</a>
        </div>
    )
}

export default AddBook;
