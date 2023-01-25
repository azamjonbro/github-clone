import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const index = () => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".nav-part-sec");
    search.classList.toggle("active", window.scrollY > 10);
  });
  
  return (
    <>
    <div
    className="nav-part-sec d-flex justify-content-center align-items-center"
    id="par"
    >
    <ul className="main-list ">
    <li className="main-item">

    <Link to="/" className="nav-link ">
    Overview
    </Link>
    </li>
    <li className="main-item">
    
    <Link to="/repositories" className="nav-link ">
    Repositories
    </Link>
    </li>
    <li className="main-item">
    <a href="https://github.com/azamjonabdullayev?tab=projects" className="nav-link ">
    Projects
    </a>
    </li>
    <li className="main-item">
    <a href="https://github.com/azamjonabdullayev?tab=packages" className="nav-link  ">
    Packages
    </a>
    </li>
    <li className="main-item">
    <a href="" className="nav-link">
    Starts
    </a>
    </li>
    </ul>
    </div>
    </>
    );
  };
  export default index;
  