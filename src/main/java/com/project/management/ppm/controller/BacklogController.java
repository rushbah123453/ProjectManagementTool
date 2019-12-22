package com.project.management.ppm.controller;

import com.project.management.ppm.domain.ProjectTask;
import com.project.management.ppm.services.ErrorMapService;
import com.project.management.ppm.services.ProjectTaskServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.xml.ws.http.HTTPBinding;

@RestController
@RequestMapping("/backlog")
@CrossOrigin
public class BacklogController {

    @Autowired
    private ProjectTaskServiceImpl projectTaskService;

    @Autowired
    private ErrorMapService errorMapService;

    @PostMapping("/{backlog_id}")
    private ResponseEntity<?> addPTtoBacklog(@Valid @RequestBody  ProjectTask projectTask, @PathVariable String backlog_id, BindingResult bindingResult){
        ResponseEntity<?> errorMap=errorMapService.getErrorMap(bindingResult);
        if (errorMap!=null) return  errorMap;

        ProjectTask projectTask1= projectTaskService.addProject(backlog_id,projectTask);

        return new ResponseEntity<ProjectTask>(projectTask1,HttpStatus.CREATED);

    }
}
