import React, { useState } from 'react'
import './signup.css'
import FormInput from '../components/FormInput';
import Toggle from '../components/toggle';
import Container from '../components/container';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () =>{
    try {
      const response = await axios.post("http://localhost:8080/user/signup",  {
        name: name,
        email: email,
        password: password
      });
      alert("you have sucessfully signed up");
    } catch (error) {
        console.error("Signup failed: ", error.response?.data || error.message);
        alert("Signup failed");
    }
  }
  return (
    <Container>
      <h3 className='text-center text-primary text-uppercase fs-2 fw-bold mb-4'>Sign Up</h3>
      {/* <div className='m-5'> */}
        <form action="" className='form mt-3'>
          <FormInput label="Name" type="text" id="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />

          <FormInput label="Email" type="email" id="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />

          <FormInput label="Password" type="password" id="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}  />


          <div className='d-flex flex-column w-100'>
            <button type="submit" className="btn btn-success" onClick={handleSignUp}>Sign Up</button>
          </div>
        </form>
      {/* </div> */}
      <Toggle query="Already have an account?" linkTo="/login" typeButton="btn btn-primary" label="Login" />
    </Container>
  );
}
export default Signup