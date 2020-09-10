import React from "react";
// import "../About/aboutus.css";
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
      <div class='card medium black'>
        <div class='card-image waves-effect waves-block waves-light'>
          <img
            class='activator'
            src={tanvir}
            style={{ width: "354px", height: "250px" }}
          />
        </div>
        <div class='card-content '>
          <span class='card-title activator text-darken-4 white-text'>
            Tanvir Ahmed Robbany
          </span>
          <p>
            <span class='card-title activator text-darken-4 white-text'>
              ID# 2016100000151
            </span>
            <span class='card-title activator text-darken-4 white-text'>
              2016100000151@seu.edu.bd
            </span>
          </p>
        </div>
      </div>
      <div class='card medium black'>
        <div class='card-image waves-effect waves-block waves-light'>
          <img
            class='activator'
            src={nila}
            style={{ width: "354px", height: "250px" }}
          />
        </div>
        <div class='card-content '>
          <span class='card-title activator text-darken-4 white-text'>
            Nusrat Jahan
          </span>
          <p>
            <span class='card-title activator text-darken-4 white-text'>
              ID# 2016100000146
            </span>
            <span class='card-title activator text-darken-4 white-text'>
              2016100000146@seu.edu.bd
            </span>
          </p>
        </div>
      </div>
      <div class='card medium black'>
        <div class='card-image waves-effect waves-block waves-light'>
          <img
            class='activator'
            src={towhid}
            style={{ width: "354px", height: "250px" }}
          />
        </div>
        <div class='card-content '>
          <span class='card-title activator text-darken-4 white-text'>
            Towhidul Hasan
          </span>
          <p>
            <span class='card-title activator text-darken-4 white-text'>
              ID# 2016000000084
            </span>
            <span class='card-title activator text-darken-4 white-text'>
              2016000000084@seu.edu.bd
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
