import "./index.scss";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

function index() {
  const [profil, setProfil] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/azamjonbro")
      .then((data) => data.json())
      .then((result) => {
        setProfil(result);
      });
  }, []);
  return (
    <>
      <div className="profil">
        {
          <div className="mt-2 " key={profil.id}>
            <div className="prof-imagebox">
              <img className="prof-image" src={profil.avatar_url} alt="Url" />
            </div>
            <div className="about-me">
              <div className="information">
                <div className="userm mx-5">
                  <h4 className="prof-name">{profil.name}</h4>
                  <h5 className="prof-name username">{profil.login}</h5>
                </div>

                <div id="bio" className="bio-box mx-5">
                  <p>{profil.bio}</p>
                </div>

                <div className="btns mx-5">
                  <button className="edit-p">Edit Profile</button>
                </div>
                <Link className="mx-5" to="/follow">
                  {profil.followers} followers
                </Link>
                <Link className="mx-5" to="/follow">
                  {" "}
                  {profil.following} following
                </Link>

                <ul className="mx-3 prof-list">
                  <li className="prof-list-item">{profil.company}</li>
                  <li className="prof-list-item">{profil.location}</li>
                  <li className="prof-list-item">{profil.created_at}</li>

                  <li className="prof-list-item">
                    <a href="https://t.me/azamjon_bro">{profil.blog}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default index;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import './index.scss'
// const Index = () => {
//       const [account, setAccount] = useState([])
//       useEffect(() => {
//             fetch('https://api.github.com/users/azamjonabdullayev').then((db) => db.json()).then((res) => {
//                   setAccount(res)
//             })

//       }, [])
//       return (
//             <>
//                   {
//                         account?.map((el) => {
//                               return (
//
//                               )
//                         })
//                   }
//             </>
//       )
// }

// export default Index
