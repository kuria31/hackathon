package com.sigin_signup.SiginUpPage.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.sigin_signup.SiginUpPage.repository.UserRepository;
import com.sigin_signup.SiginUpPage.model.User;

@Service
public class UserService {
     @Autowired
     private UserRepository userRepository;

     @Autowired
     private BCryptPasswordEncoder bCryptPasswordEncoder;

     public User addUser(User user) {
          user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
          return userRepository.save(user);
     }

     public String loginUser(String email, String password) {
          User user = userRepository.findUserByEmail(email);
          if (user == null) {
               return "Email not found";
          }
          boolean validated = bCryptPasswordEncoder.matches(password, user.getPassword());
          if (!validated) {
               return "Password incorrect";
          }
          return "Login successful";
     }

     public String userExists(User user) {
          User existingUser = userRepository.findUserByEmail(user.getEmail());
          if(existingUser != null){
               return "Email already exists";
          }
          return "Email does not exist";
     }

     public String resetPassword(String email, String password) {
          User existingUser = userRepository.findUserByEmail(email);
          if (existingUser == null) {
               return "Email not found";
          }
          existingUser.setPassword(bCryptPasswordEncoder.encode(password));
          userRepository.save(existingUser);
          return "Password reset successful";

     }
}
