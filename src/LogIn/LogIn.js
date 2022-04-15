import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
const LogIn = () => {
    return (
        <div className='formContainer'>
           <h1 className='title'>Log In</h1> 
           <form>
               <label>Email</label>
               <input type = "email" placeholder='example@gmail.com' required></input>
               <label>Password</label>
               <input type = "password" placeholder='password' required></input>
               <button type='button'>Sign In</button>
           </form>
           <p>New to shop-in?<Link class = "formLink" to = "/signIn">go to sign In</Link></p>
        </div>
    );
};

export default LogIn;