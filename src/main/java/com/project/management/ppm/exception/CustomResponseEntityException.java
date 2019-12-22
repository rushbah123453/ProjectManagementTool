package com.project.management.ppm.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomResponseEntityException extends ResponseEntityExceptionHandler {

    @ExceptionHandler
    public final ResponseEntity<Object> handleProjectException(ProjectIdException ProjectExcption, WebRequest webRequest){
        ProjectIdExceptionResponse projectIdExceptionResponse=new ProjectIdExceptionResponse(ProjectExcption.getMessage());
        return new ResponseEntity(projectIdExceptionResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public final ResponseEntity<?> handleProjectNotFoundException(BacklogNotFoundException backlogException , WebRequest webRequest){
        ProjectNotFoundExceptionResponse projectNotFoundExceptionResponse= new ProjectNotFoundExceptionResponse(backlogException.getMessage());
        return new ResponseEntity(projectNotFoundExceptionResponse,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public final ResponseEntity<?> handleProjectTaskNotFoundException(ProjectTaskException  projectTaskExcepiton , WebRequest webRequest){
        ProjectTaskExceptionResponse projectTaskNotFoundExceptionResponse= new ProjectTaskExceptionResponse(projectTaskExcepiton.getMessage());
        return new ResponseEntity(projectTaskNotFoundExceptionResponse,HttpStatus.BAD_REQUEST);
    }

}
