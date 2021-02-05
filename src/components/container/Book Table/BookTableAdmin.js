import React from 'react';
import {Link} from 'react-router-dom';

const BookTableAdmin = () => {
    return (
        <div className="col s12 m12 l12">
            <div style={{ width: "100%", height: "100%" }}>
                <div className="col s12 m12 l12 blue-grey lighten-4" style={{ height: "700px", borderRadius: "10px", overflowY: "scroll" }}>
                    <h3>CSE</h3>
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
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>CSE-101</td>
                                <td>Computer Organization And Design</td>
                                <td>David A. Patterson, John L. Hennessy</td>
                                <td>10</td>
                                {/* <td>50 BDT</td> */}
                                <td><Link className="waves-effect waves-light btn blue-grey lighten-2"><i class="small material-icons">border_color</i></Link><Link className="waves-effect waves-light btn blue-grey lighten-2"><i class="small material-icons">delete</i></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BookTableAdmin;
