package com.sigin_signup.SiginUpPage.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.context.annotation.Bean;

@Configuration
public class SecurityConfig {
     @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable CSRF for testing (enable in production)
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/user/signup", "/user/login", "/user/resetPassword").permitAll() // Allow public access to signup
                .anyRequest().authenticated() // Require authentication for all other requests
            )
            // .formLogin(form -> form.disable()) // Disable default login form
            .httpBasic(httpBasic -> httpBasic.disable()); // Disable basic auth if not needed

        return http.build();
    }
     @Bean
     public BCryptPasswordEncoder bycrptPasswordEncoder(){
          return new BCryptPasswordEncoder();
     }
}
