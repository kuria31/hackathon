import React, { useState } from 'react'
import './signup.css'
import FormInput from '../components/FormInput';
import MyLink from '../components/MyLink';
import Container from '../components/Container';
import MyButton from '../components/myButton'
import AlertMessage from '../components/AlertMessage';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");
     const [success, setSuccess] = useState("");
     const navigate = useNavigate();

     const handleLogin = async (event) => {
          event.preventDefault();
          try {
               const response = await axios.post("http://localhost:8080/user/login", {
                    email: email,
                    password: password
               });
               setSuccess(response.data.message);
               setError("");
               navigate("/homepage");
          } catch (error) {
               if (error.response && error.response.data) {
                    setError(error.response.data.error || "Login failed");
               } 
               else {
                    setError(`An unexpected error occurred. ${error}`);
               }
               setSuccess("");
          }
     }
     return (
          <Container>
               <h3 className='text-center  text-uppercase fs-2 fw-bold mb-4'>Login</h3>
               <form action="" className='form mt-3' onSubmit={handleLogin}>

                    {/* Display errors or success messages */}
                    <AlertMessage success={success} error={error}/>

                    <FormInput label="Email" type="email" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />

                    <FormInput label="Password" type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />

                    {/* Submit button */}
                    <MyButton type="submit" name="Login" />
                    <MyLink linkTo="/resetPassword" label="Forgot password?" />
               </form>
               {/* Link to sign up page */}
               <p className="mt-5 text-center">Don't have an account?
                    <MyLink linkTo="/signup" label="Sign up" />
               </p>
          </Container>
     );
}
export default Login