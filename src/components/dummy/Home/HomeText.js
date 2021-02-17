import React from "react";
import Navbar from '../Navbar/Navbar';
import "./home.css";

const HomeText = () => {
  return (
    <>
    <Navbar />
    <div className="home">
      <h1 className="details">
        Diagon Diaries is a Library Management System which helps to
        maintain your library.
      </h1>
    </div>
    </>
  );
};

export default HomeText;
