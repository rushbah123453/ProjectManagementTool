package com.project.management.ppm.validator;


import com.project.management.ppm.domain.User;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;


@Component
public class UserValidator implements Validator {

    @Override
    public boolean supports(Class<?> aClass) {
        return User.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {

        User user=(User) o;
        if (user.getPassword().length()<6){
            errors.rejectValue("password","Length","Password must be atleast of length 6");
        }

        if (!user.getPassword().equals(user.getConfirmPassword())){
            errors.rejectValue("confirmPassword","Match","Password dont match");
        }
    }
}
