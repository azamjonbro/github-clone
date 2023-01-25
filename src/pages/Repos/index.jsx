import React from 'react'
import './style.scss'
import { useEffect, useState } from 'react';



function Index() {

    const [repos, setRepos]=useState([])
    const [qidiruvFunc, setQidiruvFunc]= useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/azamjonabdullayev/repos').then((data)=>data.json()).then((res)=>
        setRepos(res),
        
        )
    },[])
  return (
    <>
    <section className="repol">
        <div className="container">
        <div className="inputbar">
            <button className="new form-control bg-success">new</button>
        <input 
                  type="text"
                  placeholder='Find a repasitory...'
                  className='form-control w-50 repo-input'
                  />
                  <div className="btnbar">
                  <button className="btn-type">type <i class="fa-solid fa-sort-down"></i></button>
                  <button className="btn-type">language <i class="fa-solid fa-sort-down"></i></button>
                  <button className="btn-type">sort <i class="fa-solid fa-sort-down"></i></button>
                  <button className="btn btn-success al">new </button>
                  </div>

        </div>
            <div className="repol-card">
                {
                    repos.map((e)=>{
                       
                        
                        return(
                            <div className='contain    p-3' >
                                <div className="left">
                                    <div className="html_url">
                                    <a href={e.html_url} target='_blank' className='card-title'>{e.name}</a>
                                    <button className='public'>
                                    {
                                                e.private==false?<div>Public</div>:<div>Private</div>
                                            }
                                    </button>
                                    </div>
                                    <div className="card-language">
                                        <div className={e.language}></div>
                                        {
                                            e.language
                                        }
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                <i className="fa-regular fa-star"></i>
                                    <button className='btn-star'>Star</button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Index