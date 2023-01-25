import React, {useEffect, useState} from "react";
import axios from "axios";
import Profile from '../../components/Profile'
import './index.scss'
const index = ()=>{
    const [users, setUsers] = useState([])

    const resDatas = async()=>{
       const res =  await axios.get("https://api.github.com/users/azamjonabdullayev/followers")     
       setUsers(res.data)
    }

    useEffect(()=>{
        resDatas()
    }, [])

    return(
        <div className="wrap">       
        <div className="follow w-75">
            {
                users.length>0 ? users.map((item, index)=>{
                    console.log(item)
                    return(
                        <div className="carts d-flex justify-content-between w-100  " key={item.id}>
                        <div className="forimg">
                            <img src={item.avatar_url} className='user-logo' alt="Avatar"/>
                        </div>

                        <div className="infolar d-flex justify-content-between align-items-center w-100 mx-2">
                            <a href={item.html_url} target="_blank">{item.login}</a>
                            <button className="unflow">Unfollow</button>
                        </div>
                    </div>
                    )                    
                }):"Followers no"
            }
              </div>
            </div>
    )
}

export default index