package com.project.management.ppm.exception;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectNotFoundExceptionResponse {

    private String projectNotFound;

    public ProjectNotFoundExceptionResponse(String projectNotFound) {
        this.projectNotFound = projectNotFound;
    }
}
