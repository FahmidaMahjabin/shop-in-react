// function = requireAuth (jodi user login thake tahole er childer show korbo)
// input = children
// step1:user nibo
// step2:user undefined hole login page e redirect korbo 
// stp3:login kore same page e redirect korbo
// step4:else children page e nibo
import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useUserInfo from '../../Hooks/useUserInfo';

const RequireAuth = ({children}) => {
    const navigate = useNavigate();
    const {user} = useUserInfo();
    const location = useLocation();
    if (user){
        console.log("user in RequireAuth:", user)
        return children
    }
    else{
        // navigate("/logIn")
        
        return <Navigate to = "/logIn" state = {{from:location}} replace></Navigate>
    }

    
};

export default RequireAuth;