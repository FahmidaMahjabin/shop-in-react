
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useUserInfo from '../Hooks/useUserInfo';
import auth from '../init';
import { useCreateUserWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
// function = signInWithEmail password
// input = email and password parameter
// output = new user create kore user return korbe 


const SignIn = () => {
    const { email, passWord, confirmPassword, error, setError, getEmail, getPassWord, getConfirmPassword } = useUserInfo();
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const signInWithEmail = () => {
        console.log("password:", passWord, "confirmPassword:", confirmPassword)
        if (passWord !== confirmPassword) {
            setError("Two passwords are not same")
            return
        }
        if (passWord.length < 6) {
            setError("password must be more than six character")
            return
        }
        else {
            createUserWithEmailAndPassword(email, passWord);
            setError("");
            console.log("user:", user)
            if (user){
                navigate("/order")
            }
        }

    }
    return (
        <div className='formContainer'>
            <h1 className='title'>Sign In</h1>
            <form>
                <label>Email</label>
                <input type="email" onBlur={getEmail} placeholder='example@gmail.com' required></input>
                <label>Password</label>
                <input type="password" onBlur={getPassWord} placeholder='password' required></input>
                <label> Confirm Password</label>
                <input type="password" onBlur={getConfirmPassword} placeholder='password' required></input>
                <p style={{color:'red'}}>{error}</p>
                <button type='button' onClick={signInWithEmail}>Sign In</button>
            </form>
            <p>Already have an account?<Link class="formLink" to="/logIn">go to log In</Link></p>
        </div>
    );
};

export default SignIn;