import React from 'react';
import  { useState } from 'react';
import  auth from "../init";
import { useAuthState } from 'react-firebase-hooks/auth';

const useUserInfo = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [passWord, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const getEmail = (event) =>{
        setEmail(event.target.value)
    }
    const getPassWord = (event) =>{
        setPassword(event.target.value)
    }
    const getConfirmPassword = (event) =>{
        setConfirmPassword(event.target.value)
    }
    

    return (
        {   user,
            email,
            passWord,
            confirmPassword,
            error,
            setError,
            getEmail,
            getPassWord,
            getConfirmPassword
        }
    );
};

export default useUserInfo;