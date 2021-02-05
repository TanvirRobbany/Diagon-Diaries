import React from 'react'

const BookBorrowed = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="col s12 m12 l12 blue-grey lighten-4" style={{ height: "700px", borderRadius: "10px", overflowY: "scroll" }}>
                <h3>Borrowed Book List</h3>
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
                            {/* <th>Remaining Day(s)</th> */}
                            {/* <th>Expired Day(s)</th> */}
                            {/* <th>Fine</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>CSE-101</td>
                            <td>Computer Organization And Design</td>
                            <td>2016100000151</td>
                            {/* <td>2</td> */}
                            {/* <td>0</td> */}
                            {/* <td>50 BDT</td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookBorrowed;
