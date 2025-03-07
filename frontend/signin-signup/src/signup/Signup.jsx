import React, { useState } from 'react'
import './signup.css'
import FormInput from '../components/FormInput';
import MyLink from '../components/MyLink';
import Container from '../components/Container';
import AlertMessage from '../components/AlertMessage';
import MyButton from '../components/myButton'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfrimPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigator = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Fill all fields");
      return;
    }
    // check if password and confirm password match
    if (password !== confirmPassword){
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/user/signup", {
        name: name,
        email: email,
        password: password
      });
      setError("");
      setSuccess(response.data.message);
      sessionStorage.setItem("userEmail", email);

      // Naviagte to login after sucessful signup
      navigator("/login");

    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      }
      setSuccess("");
    }
  }
  return (
    <Container>
      <h3 className='text-center  text-uppercase fs-2 fw-bold mb-4'>Register</h3>
      <form action="" className='form mt-3' onSubmit={handleSignUp}>
        <AlertMessage success={success} error={error}/>

        <FormInput label="Name" type="text" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />

        <FormInput label="Email" type="email" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />

        <FormInput label="Password" type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        <FormInput label="Confrim Password" type="password" id="confirm-password" placeholder="Confrim password" onChange={(e) => setConfrimPassword(e.target.value)} />

        {/* submit button */}
        <MyButton type="submit" name="Sign up" />

        {/* Remember me checkbox */}
        <div className='form-check mt-2'><input type="checkbox" className="form-check-input" id="remember" />
          <label htmlFor="remember" className="form-check-label fw-semibold">Remember me</label>
        </div>

      </form>
      {/* Link to login account */}
      <p className="mt-5 text-center">Already have an account?
        <MyLink linkTo="/login" label="Login" />
      </p>
    </Container>
  );
}
export default Signup