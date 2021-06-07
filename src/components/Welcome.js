import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

const Welcome = () => {
    const history=useHistory();
    const [User,setUser]=useState("");
    useEffect(() => {
        const accessToken=localStorage.getItem("accessGrant");
        if(accessToken){
            const resi=async()=>{
                const userData = await axios.get("http://localhost:8000/auth/user/", {
                    headers: {
                      Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log(userData);
                setUser(userData)
            }
            resi();
        }
        else{
            history.redirect("/");
        }
    }, [history])
    
    return (
        <div>
        <div>
        USER EMAIL:-- {User.data.email}
        </div>
           
        <div>USER NAME:-- {User.data.username}</div> 
        <div>
        USER FIRST_NAME:-- {User.data.first_name}
        </div>
        <div>
        USER LAST_NAME:-- {User.data.last_name}
        </div>
           
        </div>
    )
}

export default Welcome
