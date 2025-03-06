package com.sigin_signup.SiginUpPage.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sigin_signup.SiginUpPage.model.LoginRequest;
import com.sigin_signup.SiginUpPage.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.sigin_signup.SiginUpPage.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/user")
public class UserController {
     @Autowired 
     private UserService userService;

     @PostMapping("/signup")
     public ResponseEntity<String> signUp(@RequestBody User user){
          boolean isUserExist = userService.userExists(user);
          if (isUserExist){
               return ResponseEntity.status(400).body("Email already exists");
          }

          userService.addUser(user);
          return ResponseEntity.ok("User sucessfully added");
     }
     @PostMapping("/login")
     public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest){
          boolean isAutheticated = userService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
          return isAutheticated ? ResponseEntity.ok("Login successful") : ResponseEntity.status(401).body("Logging in not sucessfull");
     }
}
