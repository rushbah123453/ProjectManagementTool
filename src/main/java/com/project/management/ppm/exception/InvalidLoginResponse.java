package com.project.management.ppm.exception;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
public class InvalidLoginResponse {
    private String usename;
    private String password;

    public InvalidLoginResponse() {
        this.usename = "Invalid Username";
        this.password = "Invalid Password";
    }


}
