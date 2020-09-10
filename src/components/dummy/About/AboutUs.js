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
            style={{ width: "354px", height: "200px" }}
          />
        </div>
        <div class='card-content '>
          <span class='card-title activator text-darken-4 white-text'>
            Tanvir
          </span>
          <p>
            <span class='card-title activator text-darken-4 white-text'>
              ID# 2016100000146{" "}
            </span>{" "}
            <span class='card-title activator text-darken-4 white-text'>
              2016100000146@seu.edu.bd{" "}
            </span>
          </p>
        </div>
        {/* <div class='card-reveal'>
          <span class='card-title grey-text text-darken-4'>
            Card Title<i class='material-icons right'>close</i>
          </span>
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        </div> */}
      </div>
      <div class='card medium black'>
        <div class='card-image waves-effect waves-block waves-light'>
          <img
            class='activator'
            src={tanvir}
            style={{ width: "354px", height: "200px" }}
          />
        </div>
        <div class='card-content '>
          <span class='card-title activator text-darken-4 white-text'>
            Tanvir
          </span>
          <p>
            <span class='card-title activator text-darken-4 white-text'>
              ID# 2016100000146{" "}
            </span>{" "}
            <span class='card-title activator text-darken-4 white-text'>
              2016100000146@seu.edu.bd{" "}
            </span>
          </p>
        </div>
        {/* <div class='card-reveal'>
          <span class='card-title grey-text text-darken-4'>
            Card Title<i class='material-icons right'>close</i>
          </span>
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        </div> */}
      </div>
      <div class='card medium black'>
        <div class='card-image waves-effect waves-block waves-light'>
          <img
            class='activator'
            src={tanvir}
            style={{ width: "354px", height: "200px" }}
          />
        </div>
        <div class='card-content '>
          <span class='card-title activator text-darken-4 white-text'>
            Tanvir
          </span>
          <p>
            <span class='card-title activator text-darken-4 white-text'>
              ID# 2016100000146{" "}
            </span>{" "}
            <span class='card-title activator text-darken-4 white-text'>
              2016100000146@seu.edu.bd{" "}
            </span>
          </p>
        </div>
        {/* <div class='card-reveal'>
          <span class='card-title grey-text text-darken-4'>
            Card Title<i class='material-icons right'>close</i>
          </span>
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        </div> */}
      </div>
      {/* <div className='profile'>
        <img src={nila} width='300' height='250' alt='' />
        <h2 className='text'>Nusrat Jahan</h2>
        <h3 className='text'>ID# 2016100000146</h3>
        <h3 className='text'>2016100000146@seu.edu.bd</h3>
      </div>
      <div className='profile'>
        <img src={towhid} width='300' height='250' alt='' />
        <h2 className='text'>Towhidul Hasan</h2>
        <h3 className='text'>ID# 2016000000084</h3>
        <h3 className='text'>2016000000084@seu.edu.bd</h3>
      </div> */}
    </div>
  );
};

export default AboutUs;
