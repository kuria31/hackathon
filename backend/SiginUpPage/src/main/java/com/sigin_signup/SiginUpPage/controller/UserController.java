package com.sigin_signup.SiginUpPage.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sigin_signup.SiginUpPage.model.LoginRequest;
import com.sigin_signup.SiginUpPage.model.User;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.sigin_signup.SiginUpPage.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/user")
public class UserController {
     @Autowired
     private UserService userService;
     Map<String, String> response = new HashMap<>();

     @PostMapping("/signup")
     public ResponseEntity<Map<String, String>> signUp(@RequestBody User user) {
          String isUserExist = userService.userExists(user);
          if (("Email already exists").equals(isUserExist)) {
               response.put("error", isUserExist);
               return ResponseEntity.badRequest().body(response);
          } else {
               userService.addUser(user);
               response.put("message", "You have sucessfully signed up");
               return ResponseEntity.ok(response);
          }
     }

     @PostMapping("/login")
     public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest loginRequest) {
          String isAutheticated = userService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
          if ("Email not found".equals(isAutheticated) || "Password incorrect".equals(isAutheticated)) {
               response.put("error", isAutheticated);
               return ResponseEntity.badRequest().body(response);
          } else {
               response.put("message", "Login successful");
               return ResponseEntity.ok(response);
          }
     }

     @PostMapping("/resetPassword")
     public ResponseEntity<Map<String, String>> resetPassword(@RequestBody LoginRequest loginRequest) {
          String sucessfulReset = userService.resetPassword(loginRequest.getEmail(), loginRequest.getPassword());

          if ("Email not found".equals(sucessfulReset)) {
               response.put("error", "Email not found");
               return ResponseEntity.badRequest().body(response);
          } else {
               response.put("message", sucessfulReset);
               return ResponseEntity.ok(response);
          }

     }
}
