import React from 'react'

const BookBorrowed = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="col s12 m12 l5" style={{ paddingTop: "20%", paddingBottom: "20%", borderRadius: "10px" }}>
                <div className="blue-grey lighten-4" style={{ padding: "5%", borderRadius: "10px" }}>
                    <h3>Issue A Book</h3>
                    <form action="">
                        <div className="input-field">
                            <input type="text" id="boocode" />
                            <label className="black-text" style={{ fontSize: "20px" }} htmlFor="bookcode">Book Code:</label>
                        </div>
                        <div className="input-field">
                            <input type="text" id="id" />
                            <label className="black-text" style={{ fontSize: "20px" }} htmlFor="id">ID:</label>
                        </div>
                        <a class="waves-effect waves-light btn-large green lighten-2" style={{ width: "80%", height: "70%", borderRadius: "10px" }}>Issue Book</a>
                    </form>
                </div>
            </div>
            <div className="col s12 m12 l7 blue-grey lighten-4" style={{ height: "700px", borderRadius: "10px", overflow: "scroll" }}>
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
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>B-101</td>
                            <td>Bengali</td>
                            <td><a className="waves-effect waves-light btn blue-grey lighten-2"><i class="small material-icons">add_box</i></a></td>
                        </tr>
                        <tr>
                            <td>Alan</td>
                            <td>Jellybean</td>
                            <td>$3.76</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>Lollipop</td>
                            <td>$7.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookBorrowed;