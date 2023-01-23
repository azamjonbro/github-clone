import React from 'react';
import "./style.scss";
const index = () => {
   return (
      <div className="footer d-flex justify-content-start w-100" id='footer'>
          <div id='brandcha' className="firstbrand d-flex justify-content-around align-items-center mx-5">
               <img className='footer-logo mx-2' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Logo" />
               <p>@ {new Date().getFullYear()} GitHub, Inc.</p>
            </div>
            <ul className="nav-item" id='ulirems' >
               <li>Terms</li>
               <li>Privacy</li>
               <li>Security</li>
               <li>Status</li>   
               <li>Docs</li>
               <li>Contact</li>
               <li>Pricing</li>
               <li>APi</li>
               <li>Traning</li>
               <li>Blog</li>
               <li>Abot</li>
            </ul>
      </div>
   );
};

export default index;