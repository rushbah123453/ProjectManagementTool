package com.project.management.ppm.controller;

import com.project.management.ppm.domain.User;
import com.project.management.ppm.payload.JWTLoginResponse;
import com.project.management.ppm.payload.LoginRequest;
import com.project.management.ppm.security.JWTTokenProvider;
import com.project.management.ppm.services.ErrorMapService;
import com.project.management.ppm.services.UserServiceImpl;
import com.project.management.ppm.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;

import static com.project.management.ppm.constants.SecurityConstants.TOKEN_PREFIX;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private ErrorMapService errorMapService;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    private JWTTokenProvider jwtTokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;


    @PostMapping("/login")
    public ResponseEntity<?> loginUsers(@Valid @RequestBody LoginRequest loginRequest,BindingResult bindingResult){
        ResponseEntity<?> responseEntity=errorMapService.getErrorMap(bindingResult);
        if (responseEntity!=null) return responseEntity;

        Authentication authentication=authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),loginRequest.getPassword())

        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt=TOKEN_PREFIX+jwtTokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new JWTLoginResponse(true,jwt));

    }


    @PostMapping("/signup")
    public ResponseEntity<?> signupUsers(@Valid @RequestBody User user, BindingResult bindingResult){

        userValidator.validate(user,bindingResult);

        ResponseEntity<?> responseEntity=errorMapService.getErrorMap(bindingResult);
        if (responseEntity!=null) return responseEntity;

           User newUser= userService.saveUser(user);

           return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }



}
