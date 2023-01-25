import React, { useEffect, useState } from 'react';
import ProfileUser from '../../components/Profile'
import "./style.scss";
import { NavLink } from 'react-router-dom';
const index = () => {
      const [total, setTotal] = useState(4);
      const [totalIndex, setTotalIndex] = useState(1);
      const firstOperator = total * totalIndex;
      const lastOperator = firstOperator - total;
      const [repolis, setRepolis] = useState([]);
      const pochin = [];

            
      useEffect(() => {
            fetch('https://api.github.com/users/azamjonabdullayev/repos').then((data)=>data.json()).then((res)=>{
                 setRepolis(res) 
            })
      }, [])
      
      const pochination = repolis.slice(lastOperator, firstOperator);
      for (let i = 1; i <= Math.floor(repolis.length / total); i++) {
            pochin.push(i)
      }

      const ClickedBtn = (number) => {
            setTotalIndex(number);
      };
      

      return (
            <div className="home-box">
                  

                  <div className="wrapper mt-5">
                        <div className='title-line mx-2'>
                              <h5 className='mx-2 title-line-text'>Popular repositories</h5>
                              <p className='title-line-text'>Customize your pins</p>
                        </div>
                        <div className="repostory">
                              {
                                    repolis.length > 0 ? pochination.map((e) => {
                                          return (
                                                <div key={e.id} className="cart" >
                                                     <div className="home-card-left">
                                                     <div className="thml_url">
                                                            <h2 className="html-title">
                                                                  <a href={e.html_url}> {e.name}</a>
                                                            </h2>
                                                      </div>
                                                      <div className="desc w-100">
                                                            <p className='mx-3'>{e.description}</p>
                                                      </div>
                                                      <div className="language">
                                                            <div className={e.language} id='lang'></div>
                                                            {
                                                                  e.language
                                                            }
                                                      
                                                      </div>
                                                      
                                                     </div>
                                                     <div className="home-cart-right">
                                                            <button className="private">{e.private==false? <p className='home-cart-text'>public</p>:<p className='home-cart-text'>private</p>}</button>
                                                      </div>
                                                </div>
                                          )
                                    }) : "Not Found"
                              }
                        </div>
                        <div className="pochin-btn mt-5">
                              {pochin.length && pochin.map((item, index) => (
                                   <div className="btnss">
                                     <button
                                          key={index}
                                          className="pochin-btn btn btn-primary"
                                          type="button"
                                          onClick={() => ClickedBtn(item)}
                                    >
                                          {item}
                                    </button>
                                   </div>
                              ))}
                        </div>


                  </div>
            </div>

      );
};

export default index;