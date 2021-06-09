import React, { useEffect, useState } from 'react';
import axios from "axios"
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {useHistory} from 'react-router'


const Google = () => {
    const [token,setToken]=useState("");
    const history=useHistory();
    const responseGoogle = (response) => {
        //console.log(response.profileObj.email);
        setToken(response);
    }
    useEffect(() => {
       
            if(token!==""){
            const headers = {
                'Content-Type': 'application/json',
            }
            
            const resi=async()=>{
                try{
                if((token.profileObj.email).split('@')[1]==="iitjammu.ac.in"){
                    const What=await axios.post("http://localhost:8000/social-login/google/",{access_token:token.accessToken},headers);
                    console.log(What.data)
                    localStorage.setItem('accessGrant',What.data.access_token);
                    return What;
                } 
                else{
                    console.log("Not from organisation")
                    return {"Error":"Not from organisation"}
                }
                }
                catch(error){
                    console.log(error);
                }
            }
            resi();
        }
    }, [token])
    
    return ( 
        <div>
            <GoogleLogin
    clientId="3628049175-305lfr60td466e2kjd0fjg0pm9ergu7a.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

        </div>
    )
}

export default Google
