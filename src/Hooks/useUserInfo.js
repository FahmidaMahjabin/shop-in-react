import React from 'react';
import  { useState } from 'react';
const useUserInfo = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        {
            email,
            password,
            confirmPassword,
            setError,
            getEmail,
            getPassWord,
            getConfirmPassword
        }
    );
};

export default useUserInfo;