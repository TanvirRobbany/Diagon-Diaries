import React from 'react';
import '../About/aboutus.css';
import tanvir from "../Picture/tanvir.jpg";
import towhid from "../Picture/towhid.jpg";
import nila from "../Picture/nila.jpg";

const AboutUs = () => {
    return (
        <div className="about">
            <div className="profile">
                <img src={tanvir} width="300" height="250" alt=""/>
                <h2 className="text">Tanvir Ahmed Robbany</h2>
                <h3 className="text">ID# 2016100000151</h3>
                <h3 className="text">2016100000151@seu.edu.bd</h3>
            </div>
            <div className="profile">
                <img src={nila} width="300" height="250" alt=""/>
                <h2 className="text">Nusrat Jahan</h2>
                <h3 className="text">ID# 2016100000146</h3>
                <h3 className="text">2016100000146@seu.edu.bd</h3>
            </div>
            <div className="profile">
                <img src={towhid} width="300" height="250" alt=""/>
                <h2 className="text">Towhidul Hasan</h2>
                <h3 className="text">ID# 2016000000084</h3>
                <h3 className="text">2016000000084@seu.edu.bd</h3>
            </div>
        </div>
    )
}

export default AboutUs;
