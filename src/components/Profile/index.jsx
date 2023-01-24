import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const index = ()=>{
    const [info, setInfo]= useState([])

    let salomcha;
    useEffect  (()=>{
          const res = async()=>{
                const data =  await axios.get('https://api.github.com/users/azamjonabdullayev')           
                const arr = [data.data]
                setInfo(arr)
          }
          res()
    }, [])
    return(
        <>
             {
                        info.map((item, index)=>{
                            return(
                              <div className='mt-2 mx-2'>
                              <div className="foravatar">
                                    <img className='avatar' src={item.avatar_url} alt="Url" />
                              </div>
                              <div className="aboutcoder">
                                   <div className="info">
                                    
                                   <div className="userm mx-5">
                                       <h4>{item.name}</h4>
                                       <h5>{item.login}</h5>
                                   </div>

                                   <div id='des' className="forbio mx-5">
                                    <p>{item.bio}</p>
                                   </div>


                                    <div className="btns mx-5">
                                     <button className='edit-p'>Edit Profile</button>
                                    </div>
                                    <Link className='mx-5' to='/follow'>{item.followers}  followers <br /> {item.following}  following</Link>

                                    <ul className='mx-3'>
                                          <li className='lchalar'>{item.company}</li>
                                          <li className='lchalar'>{item.location}</li>
                                          <li className='lchalar'>{item.created_at}</li>

                                          <li className='lchalar'><a href="https://t.me/azamjon_bro">{item.blog}</a></li>
                                    </ul>
                                   </div>
                              </div>
                              </div>
                              )
                        })
                  }
        </>
    )
}

export default index