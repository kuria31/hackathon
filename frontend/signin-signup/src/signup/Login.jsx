import React, { useState } from 'react'
import './signup.css'
import FormInput from '../components/FormInput';
import Toggle from '../components/toggle';
import Container from '../components/container';
import axios from 'axios';
import Homepage from '../pages/Homepage';

const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const handleLogin = async () =>{
          try {
               await axios.post("http://localhost:8080/user/login", {
                    email: email,
                    password: password
               });
               <Homepage />
               console.log("Login successful");
          } catch (error) {
               console.log("Login failed: ", error.message || error.response?.data);
               alert("Login failed");
          }
     }
     return (
          <Container>
               <h3 className='text-center text-primary fw-bold text-uppercase mb-4'>Login</h3>
               <form action="" className='form mt-3'>

                    <FormInput label="Email" type="email" id="email" placeholder="Enter your email" onChange= {(e)=>setEmail(e.target.value)} />

                    <FormInput label="Password" type="password" id="password" placeholder="Enter your password" onChange= {(e)=>setPassword(e.target.value)} />
                    <div className='inputGroup'>
                         <button type="submit" className="btn btn-primary" onClick={handleLogin}>Sign in</button>
                    </div>
               </form>
               <Toggle query="Don't have an account?" linkTo="/signup" typeButton="btn btn-success" label="Sign up" />
          </Container>
     );
}
export default Login