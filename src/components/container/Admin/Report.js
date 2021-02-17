import { Divider } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import { BASE_URL } from '../../../config/config';

const Report = () => {
    const [issuedBookData, setIssuedBookData] = useState([]);
    const [newData2, setNewData2] = useState([]);
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
        //    const newData =  issuedBookData.map(data => {
        //         return [data.bookID.bookCode,data.bookID.bookTitle];
        //         setNewData2([newData2,])
        //     })
        // setNewData2(newData);
    }

    const data = issuedBookData.map(data =>
        [data.bookID.bookCode, data.bookID.bookTitle, data.userID.studentID, data.isRec, data.receivedDate])

    useEffect(() => {
        getIssuedBookData();
    }, []);
    console.log(newData2)
    const csvData = [
        ["Book Code", "Book Title", "Student ID", "Received", "Date"],
        ...data
    ]
    return (
        <div style={{ width: "100%", height: "100%", padding: "200px"}}>
            <CSVLink style={{fontSize: "3em", color:"#ffffff"}} data={csvData}><b>Download Report</b></CSVLink>
        </div>
    );
}
export default Report;