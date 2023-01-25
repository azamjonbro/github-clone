import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const index = () => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".nav-part-sec");
    search.classList.toggle("active", window.scrollY > 10);
  });

  const [ref]
  return (
    <>
      <div
        className="nav-part-sec d-flex justify-content-center align-items-center"
        id="par"
      >
        <ul className="main-list ">
          <li className="main-item">
            <i className="fa-solid fa-book-open"></i>
            <Link to="/" className="nav-link ">
              Overview
            </Link>
          </li>
          <li className="main-item">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-repo UnderlineNav-octicon hide-sm"
            >
              <path
                fill-rule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              ></path>
            </svg>
            <Link to="/repositories" className="nav-link ">
              Repositories
            </Link>
          </li>
          <li className="main-item">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-table UnderlineNav-octicon hide-sm"
            >
              <path
                fill-rule="evenodd"
                d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
              ></path>
            </svg>
            <Link to="/project" className="nav-link ">
              Projects
            </Link>
          </li>
          <li className="main-item">
            <img src="https://i.pinimg.com/564x/d9/16/63/d91663549ff497751cb780285175cedc.jpg" alt="" className="book2" />
            <Link to="/packages" className="nav-link  ">
              Packages
            </Link>
          </li>
          <li className="main-item">
            <i className="fa-regular fa-star"></i>
            <Link to="/starts" className="nav-link">
              Starts
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default index;
