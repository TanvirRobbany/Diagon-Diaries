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

    const data =      issuedBookData.map(data=>
        [data.bookID.bookCode,data.bookID.bookTitle,data.userID.studentID,data.isReceived, data.receivedDate])

    useEffect(() => {
        getIssuedBookData();
    }, []);
    console.log(newData2)
    const csvData = [
        ["Book Code", "Book Title", "Student ID", "Received", "Date"],
   ...data
      ]
    return (
        <CSVLink data={csvData}>Download me</CSVLink>
    );
}
export default Report;