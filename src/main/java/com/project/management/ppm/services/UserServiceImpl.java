package com.project.management.ppm.services;

import com.project.management.ppm.domain.User;
import com.project.management.ppm.exception.UserAlreadyExistsException;
import com.project.management.ppm.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    public User saveUser(User user){

       try {
           User userResponse = userRepository.findByUsername(user.getUsername());

           user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
           return userRepository.save(user);
       }catch (Exception e){

             throw new UserAlreadyExistsException("This user "+user.getUsername()+" already exists !");
            }

    }
}
