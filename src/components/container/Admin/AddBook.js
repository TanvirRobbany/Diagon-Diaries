import React from 'react'

const AddBook = () => {
    return (
        <div className="container">
            <div className="input-field">
                <input type="text" id="bookname" />
                <label className="white-text" style={{fontSize: "20px"}} htmlFor="boolname">Book Name:</label>
            </div>
            <div className="input-field">
                <input type="text" id="authorname" />
                <label className="white-text" style={{fontSize: "20px"}} htmlFor="authorname">Author Name:</label>
            </div>
            <div className="input-field">
                <input type="text" id="bookcode" />
                <label className="white-text" style={{fontSize: "20px"}} htmlFor="bookcode">Book Code:</label>
            </div>
            <div className="input-field">
                <input type="text" id="category" />
                <label className="white-text" style={{fontSize: "20px"}} htmlFor="category">Category:</label>
            </div>
            <div className="input-field">
                <input type="text" id="quantity" />
                <label className="white-text" style={{fontSize: "20px"}} htmlFor="quantity">Quantity:</label>
            </div>
            <a class="waves-effect waves-light btn-large green lighten-2" style={{ width: "40%", height: "70%", borderRadius: "10px" }}>Add Book</a>
        </div>
    )
}

export default AddBook;
