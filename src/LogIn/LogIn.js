import React from 'react';
import { useSignInWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import useUserInfo from '../Hooks/useUserInfo';
import auth from '../init';
import './LogIn.css';
const LogIn = () => {
    const {user, email, passWord, setError, getEmail, getPassWord} = useUserInfo();
    const [signInWithEmailAndPassword,
    
    error
    
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  console.log("from:", from)

    const logInWIthEmailPassword = () =>{
    signInWithEmailAndPassword(email, passWord);
    console.log("email:", email, "password:", passWord, "user:", user);
    
    if (user){
        navigate(from, {replace:true})

    }
}
    return (
        <div className='formContainer'>
           <h1 className='title'>Log In</h1> 
           <form>
               <label>Email</label>
               <input type = "email" placeholder='example@gmail.com' onBlur={getEmail} required></input>
               <label>Password</label>
               <input type = "password" placeholder='password' onBlur={getPassWord} required></input>
               <p style={{color:'red'}}>{error?.message}</p>
               <button type='button' onClick={logInWIthEmailPassword}>Sign In</button>
           </form>
           <p>New to shop-in?<Link class = "formLink" to = "/signIn">go to sign In</Link></p>
        </div>
    );
};

export default LogIn;