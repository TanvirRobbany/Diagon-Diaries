import React from "react";
import tanvir from "./Picture/tanvir.jpg";
import towhid from "./Picture/towhid.jpg";
import nila from "./Picture/nila.jpg";

const AboutUs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <div className='card medium black'>
        <div className='card-image waves-effect waves-block waves-light'>
          <img
            className='activator'
            src={tanvir}
            style={{ width: "354px", height: "250px" }}
            alt="Hello from Tavir"
          />
        </div>
        <div className='card-content '>
          <span className='card-title activator text-darken-4 white-text'>
            Tanvir Ahmed Robbany
          </span>
          <p>
            <span className='card-title activator text-darken-4 white-text'>
              ID# 2016100000151
            </span>
            <span className='card-title activator text-darken-4 white-text'>
              2016100000151@seu.edu.bd
            </span>
          </p>
        </div>
      </div>
      <div className='card medium black'>
        <div className='card-image waves-effect waves-block waves-light'>
          <img
            className='activator'
            src={nila}
            style={{ width: "354px", height: "250px" }}
            alt="Hello from Nila"
          />
        </div>
        <div className='card-content '>
          <span className='card-title activator text-darken-4 white-text'>
            Nusrat Jahan
          </span>
          <p>
            <span className='card-title activator text-darken-4 white-text'>
              ID# 2016100000146
            </span>
            <span className='card-title activator text-darken-4 white-text'>
              2016100000146@seu.edu.bd
            </span>
          </p>
        </div>
      </div>
      <div className='card medium black'>
        <div className='card-image waves-effect waves-block waves-light'>
          <img
            className='activator'
            src={towhid}
            style={{ width: "354px", height: "250px" }}
            alt="Hello from Towhid"
          />
        </div>
        <div className='card-content '>
          <span className='card-title activator text-darken-4 white-text'>
            Towhidul Hasan
          </span>
          <p>
            <span className='card-title activator text-darken-4 white-text'>
              ID# 2016000000084
            </span>
            <span className='card-title activator text-darken-4 white-text'>
              2016000000084@seu.edu.bd
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
