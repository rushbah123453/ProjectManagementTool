package com.project.management.ppm.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserAlreadyExistsExceptionResponse {

    private String userAlreadyExists;

    public UserAlreadyExistsExceptionResponse(String userAlreadyExists) {
        this.userAlreadyExists = userAlreadyExists;
    }
}
