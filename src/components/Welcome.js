import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router';

const Welcome = () => {
    const history=useHistory();
    const [logoutHandler,setLogout]=useState();
    const [User,setUser]=useState(null);
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
                const x=()=>{setUser(userData)}
                x();
            }
            resi();
        }
        else{
            history.push("/");
        }
    }, [history,logoutHandler])
    
    return (
        <div>
        {User&& (<><div>
        USER EMAIL:-- {User.data.email}
        </div>
           
        <div>USER NAME:-- {User.data.username}</div> 
        <div>
        USER FIRST_NAME:-- {User.data.first_name}
        </div>
        <div>
        USER LAST_NAME:-- {User.data.last_name}
        </div></>)
        }
        <GoogleLogout
      clientId="3628049175-305lfr60td466e2kjd0fjg0pm9ergu7a.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={()=>{console.log("Logged out");localStorage.removeItem('accessGrant');setLogout(false)}}
    >
    </GoogleLogout>
        </div>
    )
}

export default Welcome
