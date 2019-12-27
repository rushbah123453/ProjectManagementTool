package com.project.management.ppm.controller;

import com.project.management.ppm.domain.User;
import com.project.management.ppm.services.ErrorMapService;
import com.project.management.ppm.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.jws.soap.SOAPBinding;
import javax.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private ErrorMapService errorMapService;

    @Autowired
    private UserServiceImpl userService;


    @PostMapping("/signup")
    public ResponseEntity<?> signupUsers(@Valid @RequestBody User user, BindingResult bindingResult){

        ResponseEntity<?> responseEntity=errorMapService.getErrorMap(bindingResult);
        if (responseEntity!=null) return responseEntity;

           User newUser= userService.saveUser(user);

           return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }



}
