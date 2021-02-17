import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { BASE_URL } from '../../../config/config';
import user from '../../dummy/About/Picture/user.png';


const Dashboard = () => {
    const [issuedBookData, setIssuedBookData] = useState([]);

    const userIDLocal = localStorage.getItem("userID");
    const userNameLocal = localStorage.getItem("userName");
    const userIdLocal = localStorage.getItem("userId");
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
    }
    // console.log(userIDLocal);
    // console.log(issuedBookData);
    let totalBooks= 0
    let currentBoorowed = 0

    // const totalCount = issuedBookData.map(book =>{} book.userID._id === userIDLocal && newData+1);
    // const currentCount = issuedBookData.map(book => book.userID._id === userIDLocal && !book.isReceived);
    // console.log(totalCount);
    // console.log(currentCount);

    useEffect(() => {
        getIssuedBookData();
    }, []);

    issuedBookData.map(book =>{
        if(book.userID._id === userIDLocal){
            totalBooks=totalBooks+1;
        }
        if(book.userID._id === userIDLocal && !book.isReceived){
            currentBoorowed=currentBoorowed+1;
        }
    });
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="col s12 m12 l6" style={{ paddingTop: "20%", paddingBottom: "20%", borderRadius: "10px" }}>
                <div className="blue-grey lighten-4" style={{ padding: "5%", borderRadius: "10px" }}>
                    <img src={user} alt="" style={{ width: "200px", height: "150px" }} />
                    <h5><b>Name:</b> {userNameLocal}</h5>
                    <h5><b>ID:</b> {userIdLocal}</h5>
                </div>
            </div>
            <div className="col s12 m12 l6" style={{ paddingTop: "20%", paddingBottom: "20%", borderRadius: "10px" }}>
                <div className="blue-grey lighten-4" style={{ padding: "5%", borderRadius: "10px" }}>
                    <h3>General Information</h3>
                    <br />
                    <h5>Total Books Borrowed: {totalBooks}</h5>
                    <h5>Currently Borrowed Books:{currentBoorowed} </h5>
                    {/* <h5>Total Fine: 0 /=</h5> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
