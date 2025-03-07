import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import FormInput from '../components/FormInput'
import MyButton from '../components/myButton'
import MyLink from '../components/MyLink';
import AlertMessage from '../components/AlertMessage';
import axios from 'axios';

const ResetPassword = () => {
     const [newPassword, setNewPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [error, setError] = useState("");
     const [success, setSuccess] = useState("");
     const [email, setEmail] = useState("");

     
     // Retriveing email form session storage
     useEffect(() => {
          const storedEmail = sessionStorage.getItem("userEmail");
          if (storedEmail) {
               setEmail(storedEmail);
          }

     }, []);
     const handlePasswordReset = async (event) => {
          event.preventDefault();
          // check if the email is not empty
          if (!email){
               setError("Email not found. Please try again.");
               return;
          }
          // check id the password and confirm password match
          if (newPassword !== confirmPassword) {
               setError("Passwords do not match");
               setSuccess("");
               return;
          } 
          // check if the password is not empty
          if (!newPassword|| !confirmPassword){
               setError("Enter password");
               return;
           }else{
               setError("");
          }

          try {
               const response = await axios.post("http://localhost:8080/user/resetPassword", {
                    email: email,
                    password: confirmPassword
               });
               if (response.status === 200) {
                    // success message
                    setSuccess(response?.data.message || "Password reset successful");
                    // Clear the input fields
                    setNewPassword("");
                    setConfirmPassword("");
               }
          } catch (error) {
               if (error.response && error.response.data) {
                    setError(error.response.data.error || "Failed to reset password. Try again.");
               } else { setError("An unexpected error occurred."); }
               setSuccess("");
          }
     }
     return (
          <Container>
               <h3 className='text-center fs-2 fw-bold mb-4'>Set new Password</h3>
               <form onSubmit={handlePasswordReset}>
                    {/* message if the password is reset or not */}
                    <AlertMessage success={success} error={error}/>

                    <FormInput label="New password" type="password" id="newPassword" value={newPassword} placeholder="Enter your new password" onChange={(e) => setNewPassword(e.target.value)} />

                    <FormInput label="Confirm password" type="password" value={confirmPassword} id="confirmPassword" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />

                    {/* Submit button */}
                    <MyButton type="submit" name="Reset Password" />

                    {/* Link to login */}
                    <MyLink linkTo="/login" label="Back to login" />
               </form>
          </Container>
     )
}

export default ResetPassword