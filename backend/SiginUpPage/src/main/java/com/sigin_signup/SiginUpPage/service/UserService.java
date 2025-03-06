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

     public User addUser(User user){

          user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
          return userRepository.save(user);
     }

     public boolean loginUser(String email, String password) {
          User user = userRepository.findUserByEmail(email);
          if (user == null) {
               return false;
          }
          return bCryptPasswordEncoder.matches(password, user.getPassword());
     }

     public boolean userExists(User user) {
          User existingUser = userRepository.findUserByEmail(user.getEmail());
          return existingUser != null;
     }
}
