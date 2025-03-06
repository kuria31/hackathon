package com.sigin_signup.SiginUpPage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.sigin_signup.SiginUpPage.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
     User findUserByEmail(String email);
}
