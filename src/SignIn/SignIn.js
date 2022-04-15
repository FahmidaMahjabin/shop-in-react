
import { Link } from 'react-router-dom';
import useUserInfo from '../Hooks/useUserInfo';

const SignIn = () => {
    const {setError, getEmail, getPassWord, getConfirmPassword} = useUserInfo();
    return (
        <div className='formContainer'>
           <h1 className='title'>Sign In</h1> 
           <form>
               <label>Email</label>
               <input type = "email" onBlur={getEmail} placeholder='example@gmail.com' required></input>
               <label>Password</label>
               <input type = "password" onBlur={getPassWord} placeholder='password' required></input>
               <label> Confirm Password</label>
               <input type = "password" onBlur={getConfirmPassword} placeholder='password' required></input>
               <button type='button'>Sign In</button>
           </form>
           <p>Already have an account?<Link class = "formLink" to = "/logIn">go to log In</Link></p>
        </div>
    );
};

export default SignIn;