import React, { useEffect, useState } from 'react';
import "./style.scss";
import Plus from '../Images/plus.png';
const index = () => {  
   const res = (e)=>{
      const resCon =  document.querySelector('.res-con')
      const input = document.querySelector('#search')
      const navItem = document.querySelectorAll('#nav-item')
      if (resCon.style.display == "flex") {
         
         resCon.style.display = "none"      
         document.body.style.overflow = "auto"
      }else{
         resCon.style.display = 'flex'
         document.body.style.overflow = 'hidden'
      }
      resCon.appendChild(input)
      navItem.forEach(item => resCon.appendChild(item))
   }
   const [image, setimage]=useState([])

   useEffect(()=>{
      fetch("https://api.github.com/users/azamjonabdullayev").then((data)=>data.json()).then((res)=>{
         setimage(res)
      })
   },[])
   return (
      <>
         <header>
            <div className="box" onClick={(()=>res())}>
               <div className="box-item"></div>
               <div className="box-item"></div>
               <div className="box-item"></div>
            </div>
            <div className="part-first">
               <div className="brands">
                  <img className='logotip' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Logo" />
                  <input
                     type="text"
                     id="search"
                     placeholder='Search to jump to'
                     className='form-control'
                  />
                  <svg id='slash' width="22" height="20" aria-hidden="true" className="mr-1 header-search-key-slash"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path></svg>

               </div>
               <ul className='d-flex justify-content-center align-items-center mt-3  gap-3' id='nextitems'>

                  <li className="nav-item" id='nav-item'>
                     <a className="navchalar" href="#">Pull requests</a>
                  </li>
                  <li className="nav-item" id='nav-item'>
                     <a className="navchalar" href="#">Issues</a>
                  </li>
                  <li className="nav-item" id='nav-item'>
                     <a className="navchalar" href="#">Codespaces</a>
                  </li>
                  <li className="nav-item" id='nav-item'>
                     <a className="navchalar" href="#">Marketplace</a>
                  </li>
                  <li className="nav-item" id='nav-item'>
                     <a className="navchalar" href="#">Explore</a>
                  </li>
               </ul>
            </div>


            <div className="dropdown">
            <i class="fa-solid fa-bell"></i>
               <a
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
               >
                  <img
                     src={Plus}
                     id='plus'
                     className="rounded-circle"
                     height="25"
                     alt="Black and White Portrait of a Man"
                     loading="lazy"
                  />
               </a>
               <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
               >
                  <img
                     src={image.avatar_url}
                     className="rounded-circle"
                     id='profile'
                  />
               </a>
            </div>

            <div className="res-con">
               
            </div>
         </header>
      </>
   )
}

export default index;