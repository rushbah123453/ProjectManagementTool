package com.project.management.ppm.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;
@Service
public class ErrorMapService {

    public ResponseEntity<?> getErrorMap(BindingResult bindingResult){

        if (bindingResult.hasErrors()){
            Map<String,String> erroMap=new HashMap<>();
            for (FieldError fieldError:
                    bindingResult.getFieldErrors()) {
                erroMap.put(fieldError.getField(),fieldError.getDefaultMessage());

            }
            return new ResponseEntity<Map<String,String>>(erroMap, HttpStatus.BAD_REQUEST);
        }
        return null;

    }
}
