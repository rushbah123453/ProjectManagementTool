package com.project.management.ppm.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectTaskExceptionResponse {

    private String projectTaskNotFound;


    public ProjectTaskExceptionResponse(String projectTaskNotFound) {
        this.projectTaskNotFound = projectTaskNotFound;
    }
}
